//생성자 함수는 초록색으로 표시
function Kdt(name, gender){
  this.name = name;
  this.gender = gender;
  this.showName = function () {
    console.log(`성함은 ${this.name} 입니다`)
  }
}

let user1 = new Kdt('최인영','M')
let user2 = new Kdt('홍승미','M')
let user3 = new Kdt('박현진','M')
let user4 = new Kdt('이호찬','F')
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)

user1.showName()
user2.showName()
user3.showName()
user4.showName()