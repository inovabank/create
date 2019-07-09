import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Video} from '../imports/api/collections/schema';
import {Playlist} from '../imports/api/collections/schema';
import {videos} from '../imports/api/insertVideo';
import {playlist} from '../imports/api/insertPlaylist';


Meteor.startup(() => {
  process.env.MONGO_URL = "mongodb+srv://rubens:U1vd0NphH6ugNUKy@inovabank-odcfn.mongodb.net/test?retryWrites=true&w=majority";

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

    'APICall': (method, url, options) => {
      HTTP.call(method, url, options, function(error, result) {
        if (error) {
          console.log('SERVER ERRR');
          console.log(error);
        } else
          console.log('SERVER RESULT');
          console.log(result);
      });
    },

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
