//생성자 함수 버전
function Car(brand,color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`)
  }
}

const hyundai = new Car('hyundai','blue')

console.log(hyundai)
hyundai.drive()

//class 버전
class ClassCar {
  constructor(brand, color){
    this.brand = brand;
    this.color = color
  }
  drive(){
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`)
  }
}
const porshe = new ClassCar('porshe','black')
porshe.drive()

/*선언해주는 것을 위에하게 되면 class 실행 o   함수 실행 x 
그래서 class가 더 안전함*/