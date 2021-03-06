module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '3.17.205.114',
      username: 'ubuntu',
      pem: '~/.ssh/create3.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'create',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://3.17.205.114/',
      MONGO_URL: "mongodb+srv://rubens:U1vd0NphH6ugNUKy@inovabank-odcfn.mongodb.net/test?retryWrites=true&w=majority",
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
     domains: '3.17.205.114',

     ssl: {
       forceSSL: true,
       // Enable Let's Encrypt
       letsEncryptEmail: 'admin@test.fi'
     }
   }
};
