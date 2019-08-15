import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Video} from '../imports/api/collections/schema';
import {Playlist} from '../imports/api/collections/schema';
import {SavingsAccounts} from '../imports/api/collections/schema';
import {videos} from '../imports/api/insertVideo';
import {playlist} from '../imports/api/insertPlaylist';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
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

    'getAccountData': () => {
      const clientId = Meteor.users.find({_id: Meteor.userId()}).clientId;
      return SavingsAccounts.findOne({clientId: clientId});
    }
  });
});
