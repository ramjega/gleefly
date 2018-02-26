// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
      'clientID'      : '152259558812236', // your App ID
      'clientSecret'  : '4f77a5a344537cea9474ee4e2f7ad7ac',
      'callbackURL'   : 'http://ukiassignment3byram.herokuapp.com/_oauth/facebook',
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
