// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
      'clientID'      : '189039655051547', // your App ID
      'clientSecret'  : '12c806e29b71a7ed8fad7d1aaa481e18',
      'callbackURL'   : 'http://gleefly.herokuapp.com/auth/facebook/callback',
      'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
      'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
  },

  'twitterAuth' : {
      'consumerKey'       : 'bJqg5WcNCFimqKG0G0476u12q',
      'consumerSecret'    : 'OIEyUKjt93t3Kva6A7VfLKWCpIFnYu7QPMvYudHDfaO6JAbyAa',
      'callbackURL'       : 'http://gleefly.herokuapp.com/auth/twitter/callback'
  },

    'googleAuth' : {
        'clientID'      : '719244576802-vb1l8je58jr8reg3ocgnp056o4sucohu.apps.googleusercontent.com',
        'clientSecret'  : '6JDLMcKZhQAYtbvOZpTr-P8C',
        'callbackURL'   : 'http://gleefly.herokuapp.com/auth/google/callback'
    }

};
