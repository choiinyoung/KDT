// @ts-check

const express = require("express");

const app = express();
const PORT = 4000;

const userRouter = require("./routes/users");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/users", userRouter);

console.log(__dirname);
//app.use("/css", express.static(__dirname + "views/css"));
//app.use(express.static("views")); 위에가 조금 더 정확한 개념
//app.use("/js", express.static("js"));
app.use("users", userRouter);

//http://locahhost:4000/users
//http://127.0.0.1:4000/users
app.get("/", (req, res) => {
  res.send("Hello, Express world!");
});

//연결이 되어있는지 확인해주는 코드
app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
