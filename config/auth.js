// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
      'clientID'      : '2047379022143883', // your App ID
      'clientSecret'  : '3942e359231b0ee76ce3dea5e588448e',
      'callbackURL'   : 'http://127.0.0.1:8080/auth/facebook/callback',
      'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
      'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
  },

  'twitterAuth' : {
      'consumerKey'       : 'g4fod0hSvYKQ1zt92aXPNzk9c',
      'consumerSecret'    : 'orJipbM0ZqQFILDddZ7EMKKmbkL43VaOalQzmrfz3Iz0UQrghp',
      'callbackURL'       : 'http://127.0.0.1:5000/auth/twitter/callback'
  },

    'googleAuth' : {
        'clientID'      : '719244576802-4q5uschlsheme5scdohfqh6a2ijncond.apps.googleusercontent.com',
        'clientSecret'  : 'U8j0EHGzBKsyUyGr8hTq0RjX',
        'callbackURL'   : 'http://127.0.0.1:5000/auth/google/callback'
    }

};
