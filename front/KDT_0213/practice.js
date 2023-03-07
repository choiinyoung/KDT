/*const kdt = ['최두루','신상아','이유림','구슬기']

kdt.push('최인영')
console.log(kdt)

kdt.pop()
console.log(kdt)

kdt.unshift('최인영')
console.log(kdt)*/

/*practice2
const pororo = {
  name : "뽀로로",
  age : 7,
  height : 110,
  weight : 30,
  //객체 내부에 존재하여 =가 아니라 :를 사용
  running : function(){ //function()을 빼고 running()으로 줄여 써도 됨
    console.log('뽀로로가 뜁니다')
  },
  say(){
    console.log('뽀로로는 귀엽습니다')
  }
}
pororo.say()*/

//객체에 있으면 true 없으면 false
//console.log('name' in pororo)
//console.log('height' in pororo)

//for...in 반복문
/*for (let key in pororo) {
  console.log(`key 는 ${key}, key 안의 값은 ${pororo[key]}`)
}*/

/*console.log(pororo)

pororo.gender = 'M'
console.log(pororo)

pororo.height = 184
console.log(pororo)

delete pororo.gender
console.log(pororo)*/

/*practice3
function showHeight(){
  console.log(`${this.height}`)
}
let pororo = {
  name : '뽀로로',
  height : 185,
  showName(){ 
    console.log('뽀로로')
  },
  showHeight,
}
pororo.showName()
pororo.showHeight()*/

/*practice4

function Kdt(name,gender) {
  this.name = name;
  this.gender = gender;
  this.showKdt = function(){
    console.log(`이름 : ${this.name} 성별 : ${this.gender}`)
  }
}
let one = new Kdt('최인영','F')
let two = new Kdt('최두루','M')
let three = new Kdt('신상아','F')
let four = new Kdt('이유림','F')
let five = new Kdt('구슬기','F')

one.showKdt()
two.showKdt()
three.showKdt()
four.showKdt()
five.showKdt()*/

/*practice4*/
class Shape {
  constructor(width,height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return console.log(this.width*this.height);
  }
}
class Rectangle extends Shape {
  constructor(width,height) {
    super(width,height);
  }
}
class Triangle extends Shape{
  constructor(width,height) {
    super(width,height);
  }
  getArea(){
    return console.log((this.width*this.width)/2);
  }
}
class Circle extends Shape{
  constructor(radius) {
    super() //부모로부터 값을 받지 않아도 필수적으로 넣어줘야함
    this.radius=radius
  }
  getArea(){
    return console.log(this.radius ** 2 * 3.14);
  }
}
let result1 = new Rectangle(4,4);
let result2 = new Triangle(4,4);
let result3 = new Circle(4);

result1.getArea();
result2.getArea();
result3.getArea();