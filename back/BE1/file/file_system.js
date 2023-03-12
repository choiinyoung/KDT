// 파일 시스템을 이용해서 비동기 프로그래밍 코드 짜보가
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('4번', data.toString());
});
// 이렇게 하면 파일이 차례대로 안 나옴
// -> JS가 각각의 Thread에 실어서 처리하기 때문에 각각의
// Thread상황에 따라 file 읽는 속도가 다르기 때문

// 차례대로 나오게 하려면 callback을 사용해야 함
