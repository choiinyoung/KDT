/*const young = {
  name :'inyoung',
  sayHello : function(){
    console.log(`Hello, I'm ${this.name}`)
  }
}
young.sayHello()*/

//this 사용의 좋은 예
function sayHello(){
  console.log(`Hello, I'm ${this.name}`)
}

const boy = {
  name : 'Mike',
  sayHello,
}
const girl = {
  name : 'Jane',
  sayHello,
}

boy.sayHello();
girl.sayHello();