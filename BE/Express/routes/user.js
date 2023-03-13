const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send('여기는 user 라우터 입니다 !');
  res.render('users', { msg: '인영 회원님 반갑습니다!' });
});

module.exports = router;
