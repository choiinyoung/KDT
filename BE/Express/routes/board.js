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
  if (req.body.title && req.body.content) {
    const newARTICLE = {
      title: req.body.title,
      content: req.body.content,
    };

    ARTICLE.push(newARTICLE);
    res.redirect('/board');
  }
});

// 글 수정
// title이라는 파라미터를 받아 수정하게 함
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => req.params.title === article.title
  );
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});

router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    // findIndex 사용해서 내가 원하는 데이터가 몇번째 배열에 있는지
    const arrIndex = ARTICLE.findIndex(
      (article) => article.title === req.params.title
    );
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  }
});

// 글 삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => article.title === req.params.title
  );
  // splice
  ARTICLE.splice(arrIndex, 1);
  res.redirect('/board');
  // res.send('삭제 완료');
});

module.exports = router;
