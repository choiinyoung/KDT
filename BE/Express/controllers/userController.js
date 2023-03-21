// const connection = require('./dbConnect');
const MongoClient = require('./mongoConnect');

const userDB = {
  // getUsers: (cb) => {
  //   connection.query('SELECT * FROM mydb1.user;', (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //     cb(data);
  //   });
  // },
  userCheck: async (userId) => {
    try {
      const client = await MongoClient.connect();
      const user = client.db('kdt5').collection('user');
      const findUser = await user.findOne({ id: userId });
      return findUser;
    } catch (err) {
      console.error(err);
    }
  },
  // 회원가입 하기
  registerUser: async (newUser) => {
    try {
      const client = await MongoClient.connect();
      const user = client.db('kdt5').collection('user');

      await user.insertOne(newUser);
      return true;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = userDB;
