const express = require('express');

const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  userDB.userCheck(req.body.id, (data) => {
    if (data.length === 0) {
      // 회원가입 진행
      userDB.registerUser(req.body, (result) => {
        if (result.affectedRows >= 1) {
          res.status(200);
          res.send('회원가입 성공<br><a href="/login">로그인으로 이동</a>');
        } else {
          res.status(500);
          res.send(
            '회원가입 실패! 알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동</a>',
          );
        }
      });
    } else {
      res.status(400);
      res.send(
        '동일한 ID를 가진 회원이 존재 !<br><a href="/register">회원가입으로 이동</a>',
      );
    }
  });
});

module.exports = router;
