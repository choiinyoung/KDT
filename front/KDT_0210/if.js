//if문
if(false){
  console.log('true')
} else if(true){
  console.log('else if 내부')
} else {
  console.log('false')
}

//조건 비교
let age = 25;

if(age > 40) {
  console.log('늙었음')
} else if(age<=40 && age>=20){
  console.log('mz')
} else {
  console.log('어림')
}

//if문 중첩
let isOld = true
let isRich = false

if (isOld){
  if (isRich){
    console.log('ㅜㅡㅜ')
  } else {
    console.log('ㅇㅡㅇ')
  }
} else {
  if (isRich) {
    console.log('good')
  } else {
    console.log('wow')
  }
}

// not 연산자
let otherAge = 25;
let isAdult = otherAge>19

if(!isAdult)  {
  console.log('돌아가')
} else {
  console.log('통과')
}

//다중비교
//여성이고 이름이 jane 이거나 성인이면 통과
let gender = 'M'
let name = 'Tom'
let isAdultTom = true
//이렇게 묶어주면 묶어준거 먼저 계산함
if (gender === 'F' && (name === 'jane' || isAdultTom === true)){
  console.log('통과!')
} else {
  console.log('돌아가')
}