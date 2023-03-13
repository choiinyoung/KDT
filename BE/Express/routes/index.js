const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send('여기는 메인 라우터 입니다 !');

  // 그려주고 싶은 views 폴더 파일이 연결됨
  // res.render('뷰파일명',{데이터})
  res.render('index', { msg: '이 데이터는 백엔드가 보냈어요!' });
});

module.exports = router;
