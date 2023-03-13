// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

app.use('/', (req, res, next) => {
  res.send('Hello, express!');
});

app.listen(PORT, () => {
  console.log(`${PORT}에 연결되었음`);
});
