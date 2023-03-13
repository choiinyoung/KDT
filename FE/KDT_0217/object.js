const obj1 = {a:1,b:2};
const obj2 = {b:3,c:4};

const resultObj = Object.assign(obj1, obj2);

console.log('obj1', obj1);  //1 3 4로 출력 b는 덮어쓰기 되어 3으로 출력
console.log('obj2', obj2);  //3 4 출력
console.log('resultObj', resultObj);  //1 3 4출력
console.log(obj1===resultObj);  //true출력
resultObj.a = 10;
console.log(obj1);

const youngObj = {
  name: "최인영",
  age: "25",
  brain: null,
};

//const name = youngObj.name; //옛날 방법
const { name ,age,brain } = youngObj;  //구조 분해 할당 방법(최근)
//name : 바꾸고싶은 변수명 -> 이렇게하면 변수명이 바뀜
console.log(name,age,brain)