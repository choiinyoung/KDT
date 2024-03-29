// 필요 패키지 불러오기
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

// req.body를 사용하려면 선언해줘야힘
const bodyParser = require('body-parser');

// express를 실행해서 app에 넣기
// 포트 번호 설정
const app = express();
const { PORT } = process.env; // 구조분해할당

app.use(cors());
// 뷰엔진을 ejs로 세팅한다는 코드
// 해당 코드를 추가하면 express가 알아서 프로젝트 폴더의 views폴더를 인식하게 됨
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('young'));

const mainRouter = require('./routes');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// req.body사용하려먼 사용해야함
// 또한 제일 위에 사용해야 값이 읽힘
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'young',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// 미들웨어
// app.get('/', (req, res) => {
//   res.send('Express처음이지용');
// });

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

// 서버를 최초로 열어주는 코드
app.listen(PORT, () => {
  // 서버가 제대로 열렸을 때 보여지는 콜백함수
  console.log(`서버는 ${PORT}번 포트에서 실행 중`);
});
