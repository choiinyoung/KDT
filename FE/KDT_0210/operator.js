//나머지 연산자
let num = Math.floor(Math.random()*10)
console.log(num);
console.log(num%2);
if(num%2==0){
  console.log("짝수")
}else{
  console.log("홀수")
}

//거듭제복
console.log(2**4)
console.log(Math.sqrt(4))

//연산자 줄여 쓰기
let num2 = 5
num2 =num2 *5
let num3 = 5
num3 *=5
console.log(num2)
console.log(num3)

//증가 감소 연산자
let num4 = 10
console.log('증가 감소 연산자',num4++)
console.log(num4)

//비교 연산자
let a = 5;
let b = '5';
console.log('비교연산자',a==b,a===b)