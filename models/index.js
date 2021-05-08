/////////////////////
// DATA ENTRY POINT//
/////////////////////

const mongoose = require('mongoose');
const brandModel = require('./Brand');

const connectionString = 'mongodb://localhost:27017/melty';

//Firing off connection to MongoDB and passing in deprication warning flags
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//Let us know we're connected//
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

//Let us know we're disconnected//
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

//Let us know theres an error//
mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ', err);
});


module.exports = {
    Brand: brandModel
};