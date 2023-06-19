require('dotenv').config();

const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Connection failed');
});

connection.on('connected', () => {
  console.log('Connection successful');
});

module.exports = mongoose;
