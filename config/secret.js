require('dotenv').config();
var port = 3000;
var dbBase = 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@ds155150.mlab.com:55150/mongobasic';


module.exports = {
  database: dbBase,
  port: port,
  secretKey: process.env.Secret_key,

  facebook: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallback: true
  }
}
