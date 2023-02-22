/*function triangle1(num1,num2){
  return console.log((num1*num2)/2)
}
function circle1(num){
  return console.log(num**2*3.14)
}
function pytha1(num1,num2){
  return console.log(Math.sqrt(num1**2+num2**2))
}*/

/*다른 방식으로 하는 방법*/
let triangle = (num1,num2) =>{
  return console.log(num1*num2/2)
}

/*let circle = function(num = 3) {
  return Math.sqrt(num1**2 + num2**2)
}*/
let circle = (num = 3) => {
  return console.log(num**2*3.14)
}

let pytha = (num1,num2) => {
  return console.log(Math.sqrt(num1**2+num2**2))
}

triangle(2,4)
circle(3)
pytha(3,4)