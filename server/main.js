import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Video} from '../imports/api/collections/schema';
import {Playlist} from '../imports/api/collections/schema';
import {SavingsAccounts} from '../imports/api/collections/schema';
import {videos} from '../imports/api/insertVideo';
import {playlist} from '../imports/api/insertPlaylist';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  process.env.MONGO_URL = "mongodb+srv://rubens:U1vd0NphH6ugNUKy@inovabank-odcfn.mongodb.net/test?retryWrites=true&w=majority";

  Tracker.autorun(() => {
    const method = 'GET';
    const url = 'https://mifos.inovabank.com.br/fineract-provider/api/v1/savingsaccounts?tenantIdentifier=default&pretty=true';
    const options = {
      headers : {
        Authorization: "Basic bWlmb3M6YXNla2h0MTk3Mw==",
      }
    };

    console.log('GET');

    HTTP.call(method, url, options, function(error, response) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log('SUCESSFUL');
        console.log(response.data);
        for (let i = 0; i < response.data.pageItems.length; i++) {
          if(SavingsAccounts.find({}).count() < response.data.pageItems.length) {
            SavingsAccounts.insert(response.data.pageItems[i]);
          } else {
            SavingsAccounts.update({}, {$set: response.data.pageItems[i]});
          }

        }

      }
    });
  });


  Accounts.onCreateUser((options, user) => {
      user.profile = options.profile;
      user = Object.assign({
        whatsapp: {
          number: user.username,
          verified: false,
        },
      }, user);
      return user;
  });

  Meteor.methods({
    'createNewUser': (userData) => {
      if(Meteor.users.find({"profile.cpf": userData.profile.cpf}).count() === 0){
        return Accounts.createUser(userData);
      } else {
        throw new Meteor.Error("cpf.invalid", "Esse CPF já foi cadastrado!");
      }
    },

    'videoRoom': (url) => {
      let videoId = Video.findOne({ url: url })._id;

      return {
        videoId: videoId,
      };
    },

    'getVideoData': (pathname) => {
      const id = pathname.split("/").pop();
      let videoData = Video.findOne({_id: id});
      videoData = {...videoData, ...{playlist_title: Playlist.findOne({url: videoData.playlist_link}).title}};
      return {
        data: videoData,
        playlist: Video.find({playlist_link: videoData.playlist_link}).fetch()
      }
    },
  });
});
