const express = require('express');
const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  userDB.userCheck(req.body.id, (data) => {
    if (data.length === 1) {
      if (data[0].PASSWORD === req.body.password) {
        // 백엔드 발행
        req.session.login = true;
        req.session.userId = req.body.id;

        // 로그인 쿠키 발행
        res.cookie('user', req.body.id, {
          maxAge: 1000 * 10, // 생성 기준으로 10초 동안 유지
          httpOnly: true, // 통신시에만 사용
          signed: true, // 쿠키가 암호화되어 저장됨
        });

        res.status(200);
        res.redirect('/dbBoard');
      } else {
        res.status(400);
        res.send(
          '비밀번호가 다릅니다!<br><a href="/login">로그인으로 이동</a>',
        );
      }
    } else {
      res.status(400);
      res.send(
        '해당 ID가 존재하지 않습니다!<br><a href="/register">회원가입으로 이동</a>',
      );
    }
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.clearCookie('user');
    res.redirect('/');
  });
});

module.exports = router;
