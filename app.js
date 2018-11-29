require('dotenv').config();


/***********************
 * Module dependencies *
 ***********************/
const   
        bodyParser        = require("body-parser"),
        compress          = require("compression"),
        cookieParser      = require("cookie-parser"),
        express           = require("express"),
        mongoose          = require("mongoose"),
        session           = require("express-session"),
        http              = require('http'),
        log4js            = require('log4js'),
        nodemon           = require("nodemon"),
        path              = require('path'),
        Pusher            = require('pusher'),
        cors              = require('cors'),
        log               = require('./util/logger').getLogger('APP');


var credentials       = require('./cred');
var africastalking    = require('africastalking')(credentials.AT);
var pusher            = new Pusher(credentials.pusher);
/********************
 * express instance *
 ********************/
    const app = express();   

/********************
 * Module variables *
 ********************/
const
    port = process.env.PORT || 3000,
    env = process.env.NODE_ENV,
  DBURL = process.env.DBURL || 'mongodb+srv://davidteejay:Brain.box8@cluster0-xw7ug.mongodb.net/test?retryWrites=true';
let db;

/********************
 * App config       *
 ********************/
app.set('port', port);
app.set('env', env);

/********************
 * database config  *
 ********************/

mongoose.Promise = require('bluebird');

var options = {
  //useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};

mongoose.connect(DBURL, options);
db = mongoose.connection;
db.on('error', err => {
  log.error('There was a db connection error');
});
db.once('connected', () => {
  log.info('connection created successfully!');
});
db.once('disconnected', () => {
  log.error('Successfully disconnected!');
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    log.error('dBase connection closed due to app termination');
    process.exit(0);
  });
});

/*********************
 * Module middleware *
 *********************/
    app.use(log4js.connectLogger(log, { level: 'auto' }));
    app.enabled('trust proxy');    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors())
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        if(req.method === 'OPTIONS') {
            res.status(200).end();
        }
        else {
            next();
        }
    });    

/**********
 * Routes *
 *********/
    app.use('/', (reeq, res) => res.send('Yay!!!'))
    app.use('/ussd', require('./index'));

/**************
 * Export app *
 *************/

module.exports = app;

