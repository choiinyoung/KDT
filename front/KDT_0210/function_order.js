/*SayHello()

function SayHello() {
  console.log('Hello')
}

let SayHello = function() {
  console.log('Hello')
}*/

/* arrow-function 같은 표현 방식*/
function SayHello() {
  console.log('Hello')
}

let SayHello = function () {
  console.log('Hello')
}

let SayHello = () => {
  console.log('Hello')
}
/*같은 표현 방식*/
function sum(num1, num2) {
  return num1+num2
}

let sum = function(num1,num2){
  return num1+num2
};

let sum = (num1,num2) => {num1+num2}