import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    user.profile = options.profile;
    user = Object.assign({
      whatsapp: user.username,
    }, user)
    delete user['username'];
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
    }
  });
});
