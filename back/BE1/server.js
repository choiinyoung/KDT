// index.html(프론트)로 보내질 정보

const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  const str = '안녕하세용 여기는 백엔드에용';
  const json = JSON.stringify(str);
  res.send(json);
});

app.listen(PORT, () => {
  console.log(`데이터 통신서버 ${PORT}에서 작동 중입니다`);
});
