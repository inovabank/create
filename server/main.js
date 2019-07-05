import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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

  });
});
