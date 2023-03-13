// --> Hello
let helloTest = 'H-e-l-l-o'

let helloTestArr = helloTest.split('-') //안에 들어가는대로 짤라서 배열에 넣어줌
console.log(helloTestArr) //H e l l o가 배열에 저장 됨

let hellString = helloTestArr.join('-') //글 사이사이에 - 추가함
console.log(hellString) //H-e-l-l-o가 배열에 저장 됨

let reverseHelloTestArr = helloTestArr.reverse()
console.log(reverseHelloTestArr)

//메소드 체이닝
let finalStr = helloTest.split('-').reverse().join("") // H e l l o
console.log(finalStr)

const obj = {
  arr : ['a', 'b', 'c',],
  number : 10,
}
let reversearr = obj.arr.reverse().join("")  
//obj.str을 하면 객체 내부에 str이 없어서 에러가 뜨지만 ?를 하면 에러는 안뜨고 실행은 되지만 별로 좋지 않은 방법임
console.log(reversearr)