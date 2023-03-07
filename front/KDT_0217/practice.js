/*let nums = [-1.23, 13, 14.52, -33.53, 30] ;

//큰 수와 작은 수 찾아서 소수점 버림 처리
let minnum = Math.min(...nums);
let maxnum = Math.max(...nums);
console.log("min: ",Math.floor(minnum));
console.log("max: ",Math.floor(maxnum));

//절대값의 평균 구하기
let plus = 0;
for(let i = 0; i < nums.length; i ++){
  nums[i] = Math.floor(nums[i])
  //console.log(nums[i])
  plus+=nums[i];
}
console.log("평균",plus/nums.length);

//0~100 정수 랜덤
console.log("random ",Math.floor(Math.random()*100));*/

//for문으로 1-100숫자 넣고 map사용해서 다 합산
/*const arr = []

for(let i =1;i<=100;i++){
  arr.push[i];
  console.log(arr)
}*/

//두 배열에서 동일한 요소만을 가지는 배열과 다른 요소만을 가지고 있는 배열 만들기
/*let fruits1 =["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"];

const sameArr = fruits1.filter(function (item){
  return fruits2.includes(item);
})
const sameArr1 = fruits1.filter((item) =>fruits2.includes(item));

console.log(sameArr)

const diffArr = fruits1.filter(function (item){
  return !fruits2.includes(item);
})
const diffArr1 = fruits1.filter((item) => !fruits2.includes(item));
console.log(diffArr)*/

//1부터 100까지의 숫자가 들어있는 배열을 for문으로 만들기
//Reduce메소드를 이용하여 해당 배열의 합산 구하기

const num=[];

for(let i =1; i <= 100; i++){
  num.push(i);  //num[i]=i; 이렇게해도 차례대로 들어감
}

//화살표 함수
const result = num.reduce((acc,item) => {
  return (acc += item);
},0)
//이렇게 표현해도 됨
/*const result = num.reduce(function(acc,item){
  return (acc += item);
},0);*/
console.log(result);