// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
      'clientID'      : '1988897964770535', // your App ID
      'clientSecret'  : '4af0659c8ab95faf672bdd490e39d340',
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
        'clientID'      : '719244576802-vb1l8je58jr8reg3ocgnp056o4sucohu.apps.googleusercontent.com',
        'clientSecret'  : '6JDLMcKZhQAYtbvOZpTr-P8C',
        'callbackURL'   : 'http://ukiassignment3byram.herokuapp.com/auth/google/callback'
    }

};
