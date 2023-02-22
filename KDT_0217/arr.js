/*const fruits = ["사과","파인애플","수박","포도","오렌지"];

//map 기존 배열에 특정 작업을 한 배열을 리턴하는 메소드
const fruitsObjectArr = fruits.map(function (item, index, origin){
  return{
    id: index,
    name : item,
  }
})
console.log(fruits);
console.log(fruitsObjectArr);
//화살표 함수
const fruitsObjectArrr = fruits.map( (item, index, origin)=>{
  return{
    id: index,
    name : item,
  }
})

const nums = [3,6,9,12,15,18,21]; 
//3으로 나눈 수를 divideArr에 저장
const divideArr = nums.map(function(item, index){
  return item / 3;
})
console.log(divideArr);

//각각의 배열에 *4를 해보기
const nums2= [1,2,3,4,5,6];
//1
const multArr = nums2.map(function(item){
  return item*4;
})
console.log(nums2);
console.log(multArr);

//2
const multArrr = nums2.map((item)=>{
  return item*4;
})
console.log(multArr);

//3 이렇게 변경이 가능 화살표 함수로 간략하게 나타낼 수 있음
const multArrrr = nums2.map((item)=> item*4)
console.log(multArrr);*/


/*const str = "apple";

for (letter in str){  //of는 배열에 입력되있는 데이터가 하나하나 출력되고 in은 배열 숫자를 알려줌
  console.log(letter)
}*/

/*const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball:"TMT",
}
for (let item in obj) {
  console.log(obj [item]);
}*/

/*const numbers2 = [1,2,3,4,5,6];
const filterArr = numbers2.filter( (item) => item > 3 ); //return에 조건에 true 이면 배열에 들어감 

console.log(filterArr);

const words = ['spray','limit','elite','exuberant','destruction','present'];
//글자 길이가 6이상인 것들만 result에 넣기 
const result = words.filter((item) => item.length > 6);
console.log(result)*/

//includes 해당 배열에 지정한 요소가 있는지 확인하는 메소드
/*const num4 = [1,2,3,4,5,6];

num4.map((item) => {
  if(item === 3) flag = true;
})
console.log(num4.includes(3));  //true
console.log(num4.includes(7));  //false*/

/*const fruits3 = ["Apple","Banana","Cherry"];
const findResult = fruits3.find((item) => {
  return /^A/.test(item);
}); //정규식 A로 시작하면 true 아니면 false

const findIndexResult = fruits3.findIndex(item => item === /^B/.test(item))

console.log(findResult);
console.log(findIndexResult);*/

/*const num5 = [1,2,3,4,5];
const sumResult = num5.reduce(function (acc,item,index,og){
  return acc += item;
}, 10);
console.log(sumResult);*/

const num6 = [2,-5,-123,-5480,24,0,-69,349,3];
const resultReduce = num6.reduce((acc, item) => {
  if (item < 0){
    acc[0] ++;
  } else {
    acc[1] ++; ;
  }
  return acc;
},[0,0]);
//acc = [0,0];  //앞에는 음수 뒤에는 양수를 뜻함
console.log(resultReduce);
