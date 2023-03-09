// @ts-check

const express = require("express");

const app = express();
const userRouter = express.Router();

const PORT = 4000;

const USER = {
  1: {
    id: "young",
    name: "최이녕",
  },
};

const USER_ARR = [
  {
    id: "youngs",
    name: "최인영",
  },
  {
    id: "pororo",
    name: "뽀로로",
  },
];

app.set("view engine", "ejs");

app.use("/users", userRouter);

//http://locahhost:4000/users
//http://127.0.0.1:4000/users
app.get("/", (req, res) => {
  res.send("Hello, Express world!");
});
userRouter.get("/", (req, res) => {
  res.send(USER);
});

userRouter.get("/id/:id/", (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send("ID 못찾겠슴");
  }
});

userRouter.post("/add", (req, res) => {
  if (!req.query.id || !req.query.name) res.send("쿼리 잘못 입력");

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };

  USER[Object.keys(USER).length + 1] = newUser;

  res.send("회원등록완료");

  // query 가 잘 들어왔는지
  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };

  //   USER[Object.keys(USER).length + 1] = newUser;

  //   res.send("회원등록완료");
  // } else {
  //   res.send("쿼리 입력이 잘못 되었습니다");
  // }
});

userRouter.get("/show", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8 " });
  res.write("<h1>Hello, Dynamic Web Page</h1>");

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER ID is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

userRouter.get("/ejs", (req, res) => {
  const userCounts = USER_ARR.length;
  res.render("index", { USER_ARR, userCounts });
});

//연결이 되어있는지 확인해주는 코드
app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
