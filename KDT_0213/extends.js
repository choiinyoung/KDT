//클래스 선언
class Car {
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
  
  drive(){
    console.log(`${this.brand}의 ${this.color}색의 자동차가 주행 중입니다`)
  }
}

//클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel){
    super(brand, color);  //브랜드와 컬러는 위에서 받아옴
    this.fuel = fuel;
  }
  
  /*showFuel(){
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  }*/
  //over-riding이 되어 같은 메소드에 덮어쓰기 됨
  drive() {
    super.drive() //부모에 있는 메서드에 접근할수 있음
    console.log(`그리고 이 차는 ${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다.`)
  }
}

const hyundai = new Car('hyundai','blue')
hyundai.drive()
const tesla = new ElecCar('tesla','red','electricity'); 
tesla.drive();

//instanceof
console.log(hyundai instanceof Car);  //true
console.log(tesla instanceof Car);  //true