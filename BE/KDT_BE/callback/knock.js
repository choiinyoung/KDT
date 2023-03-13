// callback 함수 구현
// 인자로 입력된 숫자의 초 만큼 기다렸다가 입력된 '이름'이 문을 열고 나왔습니다
function KnockDoor(time, name, callback) {
  console.log('노크를 하고 기다립니다 !');
  setTimeout(() => {
    callback(time, name);
  }, time * 1000);
}

function callName(time, name) {
  console.log(`${name}이가 ${time}초 만에 문을 열고 나왔습니다 !`);
}

KnockDoor(1, '인영', callName);
