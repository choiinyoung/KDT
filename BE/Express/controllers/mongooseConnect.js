const mongoose = require('mongoose');
const MONGO_DB_URI =
  'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';
// const { MONGO_DB_URI } = process.env;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      dbName: 'kdt5',
      useNewUrlParser: true,
    });

    console.log('몽구스 접속 성공');

    mongoose.connection.on('error', (err) => {
      console.error('몽고디비 연결하세용', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.error('몽고 디비 연결 끊어졌어용');
      connect();
    });
  } catch (err) {
    console.error(err);
  }
};

connect();

module.exports = connect;
