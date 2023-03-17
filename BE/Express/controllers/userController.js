const connection = require('./dbConnect');

const userDB = {
  // getUsers: (cb) => {
  //   connection.query('SELECT * FROM mydb1.user;', (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //     cb(data);
  //   });
  // },
  userCheck: (userId, cb) => {
    connection.query(
      `SELECT * FROM mydb1.user WHERE USERID = '${userId}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
  // 회원가입 하기
  registerUser: (newUser, cb) => {
    connection.query(`INSERT INTO mydb1.user (USERID, PASSWORD) values ('${newUser.id}', '${newUser.password}');`,
    (err, data) => {
      if (err) throw err;
      cb(data);
      },
    );
  },
};

module.exports = userDB;
