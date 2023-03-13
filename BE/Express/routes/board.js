const express = require('express');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content: '안녕하세용 저는 최이녕 25살이에용',
  },
  {
    title: 'title2',
    content: '민트초코 조아용',
  },
];

// localhost:4000/board/
// 글 전체 목록 보여주기
router.get('/', (req, res) => {
  res.render('board', { ARTICLE, articleCounts: ARTICLE.length });
});

// 글 쓰기
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 글 추가
router.post('/write', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newARTICLE = {
        title: req.body.title,
        content: req.body.content,
      };

      ARTICLE.push(newARTICLE);
      res.redirect('/board');
    } else {
      const err = new Error('글쓰기 오류');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('글쓰기 오류');
    err.statusCode = 404;
    throw err;
  }
});

// 글 수정
// title이라는 파라미터를 받아 수정하게 함
router.get('/modify/:title', (req, res) => {});

router.post('/modify/:title', (req, res) => {});

// 글 삭제
router.delete('/delete/:title', (req, res) => {});

module.exports = router;
