let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`),
  console.log(this)
}

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`),
  console.log(this)
}

let boy = {
  name : 'Mike',
  sayHello
}
let girl = {
  name : 'Jane',
  sayHallo
}

boy.sayHello()
girl.sayHallo()