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
      'consumerKey'       : 'bJqg5WcNCFimqKG0G0476u12q',
      'consumerSecret'    : 'OIEyUKjt93t3Kva6A7VfLKWCpIFnYu7QPMvYudHDfaO6JAbyAa',
      'callbackURL'       : 'http://ukiassignment3byram.herokuapp.com/auth/twitter/callback'
  },

    'googleAuth' : {
        'clientID'      : '719244576802-b1fmaet8ukveo13fsfcqecuceqlass4m.apps.googleusercontent.com',
        'clientSecret'  : 'vc4zu_Oun4Ky7Ale3rflbHTb',
        'callbackURL'   : 'http://ukiassignment3byram.herokuapp.com/auth/google/callback'
    }

};
