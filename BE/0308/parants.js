// @ts-check

const express = require('express');

const app = express();
const PORT = 4000;

//localhost:4000/~~
app.get('/:id/:name/:gender', (req, res) => {
  console.log(req.params);
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 실행 중`);
});
