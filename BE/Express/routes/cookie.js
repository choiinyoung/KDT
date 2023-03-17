const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.cookie('alert', true, {
  //   expires: new Date(Date.now() + 1000 * 60),
  //   httpOnly: true,
  // });
  // console.log(req.cookies);
  // res.render('index');
  res.render('cookie');
});

// 쿠키 구우기
router.get('/cook', (req, res) => {
  res.cookie('alert', true, {
    maxAge: 1000 * 5, //5초 뒤에 사라짐
  });
  res.status(200).json('쿠키 굽기 성공 !');
});

module.exports = router;
