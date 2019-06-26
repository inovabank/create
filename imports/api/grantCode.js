import { Meteor } from 'meteor/meteor';

const method = 'POST';
const url = 'http://api-topazio.sensedia.com/oauth/grant-code';
const content_type = 'application/json';
const authorization = '';
const grant_type = '';
const code = '';
const client_id = '';
const redirect_uri = 'http://localhost:3000/';
const options = {
    headers: {
        'Content-Type': content_type,
        'Authorization': authorization,
    },
    data: {
        'grant_type': grant_type,
        'code': code,
        'client_id': client_id,
        'redirect_uri': redirect_uri,
    }
}

Meteor.call('APICall', method, url, options, function(error, result) {
    if (error) {
        console.log('CLIENT ERRR');
        console.log(error);
    } else {
        console.log('CLIENT RESULT');
        console.log(result);
    }
});
