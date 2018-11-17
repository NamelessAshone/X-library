// TODO: add codes to connect db here.
const mongoose = require('mongoose');

const DEV_DB_URL = 'mongodb://dba:codefor42@ds163226.mlab.com:63226/xibrary';
const mongoDB = process.env.MONGODB_URI || DEV_DB_URL;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connected', () => {
  console.log('ok');
});

module.exports = db;
