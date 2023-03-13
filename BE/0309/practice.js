// // @ts-check
// // 회원 수정 – 삭제 API 만들기!

// const express = require("express");

// const app = express();
// const userRouter = express.Router();

// const PORT = 4000;

// const USER = {
//   1: {
//     email: "young",
//     name: "최이녕",
//   },
// };

// app.use("/users", userRouter);

// //http://locahhost:4000/users
// //http://127.0.0.1:4000/users
// app.get("/", (req, res) => {
//   res.send("Hello, Express world!");
// });
// userRouter.get("/", (req, res) => {
//   res.send(USER);
// });

// userRouter.get("/id/:id/", (req, res) => {
//   const userData = USER[req.params.id];
//   if (userData) {
//     res.send(userData);
//   } else {
//     res.send("ID 못찾겠슴");
//   }
// });

// userRouter.post("/add", (req, res) => {
//   // query 가 잘 들어왔는지
//   if (req.query.id && req.query.name) {
//     const newUser = {
//       id: req.query.id,
//       name: req.query.name,
//     };

//     USER[Object.keys(USER).length + 1] = newUser;

//     res.send("회원등록완료");
//   } else {
//     res.send("쿼리 입력이 잘못 되었습니다");
//   }
// });

// userRouter.put("/modify/:id", (req, res) => {
//   if (req.query.email && req.query.name) {
//     if (req.params.id in USER) {
//       USER[req.params.id] = {
//         email: req.query.email,
//         name: req.query.name,
//       };

//       res.send("굿");
//     } //USER라는 객체에 params로 받아온 값이 있는지 없는지 확인
//     else {
//       res.send("해당 id를 가진 회원이 존재하지 않음");
//     }
//   } else {
//     res.send("잘못된 쿼리");
//   }
// });

// userRouter.delete("/delete/:id", (req, res) => {
//   if (req.params.id in USER) {
//     delete USER[req.params.id]; //문자열로 접근해야해서[] 사용
//     res.send("회원삭제");
//   } else {
//     res.send("회원 없음");
//   }
// });

// //연결이 되어있는지 확인해주는 코드
// app.listen(PORT, () => {
//   console.log(`${PORT}번에서 서버 실행`);
// });

//데이터에 email 필드를 추가!
const express = require("express");

const app = express();
const userRouter = express.Router();

const PORT = 4000;

const USER_ARR = [
  {
    id: "youngs",
    name: "최인영",
    email: "ciy",
  },
  {
    id: "pororo",
    name: "뽀로로",
    email: "prr",
  },
];
