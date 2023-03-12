// 파일 읽기
// const fs = require('fs');

// fs.readFile('readme.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 파일 쓰기
const fs = require('fs');
const str = '파일 쓰기가 정상적으로 되는지 테스트 합니다';

fs.writeFile('writeme.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('writefile succed');
  }
});
