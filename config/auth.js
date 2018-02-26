// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
      'clientID'      : '2047379022143883', // your App ID
      'clientSecret'  : '3942e359231b0ee76ce3dea5e588448e',
      'callbackURL'   : 'http://ukiassignment3byram/auth/facebook/callback',
      'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
      'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
  },

  'twitterAuth' : {
      'consumerKey'       : 'bJqg5WcNCFimqKG0G0476u12q',
      'consumerSecret'    : 'OIEyUKjt93t3Kva6A7VfLKWCpIFnYu7QPMvYudHDfaO6JAbyAa',
      'callbackURL'       : 'http://ukiassignment3byram.herokuapp.com/auth/twitter/callback'
  },

    'googleAuth' : {
        'clientID'      : '719244576802-gtgf6vmvgs3um8tq2n8cq0tqal4s6onc.apps.googleusercontent.com',
        'clientSecret'  : 'Paikb6hYAQnoGbgEpMs4yGWs',
        'callbackURL'   : 'http://ukiassignment3byram.herokuapp.com/auth/facebook/callback'
    }

};
