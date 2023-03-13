/*function hellFunc(){
  console.log('Hello')
}

function returnFunc() {
  console.log('Return')
  return  'return'
}

let str = hellFunc()
console.log(str)*/

function sayHello(name = 'ㅎㅎ') {
  console.log(`Hello~ ${name}`)
} //if 인자가 전달되지 않으면 ㅎㅎ가 디폴트값으로 출력

sayHello()

/*function sum(num1, num2){
  return num1 + num2
}

console.log(sum(10,20))

function square(num) {
  return num ** 2;
}
console.log(square(37))*/