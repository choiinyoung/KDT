//문자열  문자열에는 배열 함수 x
const str = "Hello, World!";

//문자열 길이 13 출력
console.log(str.length);  

for(let i = 0; i < str.length; i++){
  console.log(str[i]);
}   //Hello, World! 출력

//특정 문자열 찾기  if -1이 출력되면 없는거 7출력
console.log(str.indexOf("World"));

//문자열 자르기 index 5 전까지 잘라서 Hello만 출력
console.log(str.slice(0,5));
console.log(str.slice(0, str.indexOf("World")));

//문자열 바꾸기
console.log(str.replace("World","뽀로로"));
console.log(str);

//문자열 반복
const str2 = "우영"
const longStr = str2.repeat(10) + "우";
console.log(longStr)

//공백제거
const str3 = "    Hello, world    ";
console.log(str3.trim()); 

//수박수 문제
//3이면 수박수 4면 수박수 출력되게
//1번째 방법
/*function solution(n) {
  let answer = '';
  
  for (let i = 0; i < n ; i++){
      if(i % 2 === 1){
          answer += "박"
      } else {
          answer += "수"
      }
  }
  return answer
}*/

//2번째 방법
function solution(n) {
  const str = "수박";
  
  const result = str.repeat(n);
  return result.slice(0,n)
}
console.log(solution(3));