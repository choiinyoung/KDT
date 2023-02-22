const fruits = ["사과","바나나","수박","망고","딸기"];
console.log(fruits);  //[ '사과', '바나나', '수박', '망고', '딸기' ] 출력
console.log(...fruits) //전개연산자 -> 사용 사과 바나나 수박 망고 딸기 출력

function conLog(a,b,...c){
  console.log(a,b,c);
}

conLog(fruits[0],fruits[1],fruits[2]);  
//사과 바나나 [ '수박' ] 출력
//함수에서 c만 전개연산자를
conLog(...fruits) //사과 바나나 [ '수박', '망고', '딸기' ] 출력

const str = "apple"
const strToArr = [...str];
console.log(strToArr)

const strToArr2 = str.split("");
console.log(strToArr2)