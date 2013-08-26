var Kabam = require('./../index.js');


var kabam = Kabam({
  'hostUrl': ((process.env.hostUrl) ? (process.env.hostUrl) : 'http://vvv.msk0.ru/'),
//  'mongoUrl': 'mongodb://localhost/mwc_dev', - we use it from enviroment
  'secret': 'Long_and_hard_secret',
//  'redis': 'redis://mwcKernel:@localhost:6379', - we use it from enviroment
  'emailConfig': ((process.env.emailConfig) ? (process.env.emailConfig) : 'myemail@gmail.com:1234567'),
  "passport": {
    "GITHUB_CLIENT_ID": ((process.env.GITHUB_CLIENT_ID) ? (process.env.GITHUB_CLIENT_ID) : '--insert-github-client-id-here--'),
    "GITHUB_CLIENT_SECRET": ((process.env.GITHUB_CLIENT_SECRET) ? (process.env.GITHUB_CLIENT_SECRET) : '--insert-github-client-secret-here--'),
    "TWITTER_CONSUMER_KEY": ((process.env.TWITTER_CONSUMER_KEY) ? (process.env.TWITTER_CONSUMER_KEY) : '--insert-twitter-consumer-key-here--'),
    "TWITTER_CONSUMER_SECRET": ((process.env.TWITTER_CONSUMER_SECRET) ? (process.env.TWITTER_CONSUMER_SECRET) : '--insert-twitter-consumer-secret-here--'),
    "FACEBOOK_APP_ID": ((process.env.FACEBOOK_APP_ID) ? (process.env.FACEBOOK_APP_ID) : '--insert-facebook-app-id-here--'),
    "FACEBOOK_APP_SECRET": ((process.env.FACEBOOK_APP_SECRET) ? (process.env.FACEBOOK_APP_SECRET) : '--insert-facebook-app-secret-here--')
  },
  "spine": {
    'domains': ['urgentTasks']
  }
});

kabam.extendRoutes(function (core) {
  core.app.get('/', function (request, response) {
    response.render('index', {userAgent: request.headers['user-agent'], title: 'Welcome!'})
  });
});

//kabam.start();
kabam.startCluster();

/*/
//promote users to root
setTimeout(function(){
kabam.model.User.findOneByLoginOrEmail('vodolaz095',function(err,userFound){
  userFound.root=true;
  userFound.save(function(){
    console.log('You are root!');
  });
})},5000);
//*/
