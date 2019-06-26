import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';


Meteor.startup(() => {
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
