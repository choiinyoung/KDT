//while문 기본
/*let index = 0

while (index <10) {
  console.log("인사를 ", index+1,"번째 드립니다")
  index++;
}
//조건문 사용x if+break 사용
let index2 = 0
while (true) {
  console.log("절을 ", index2+1,"번째 드립니다")
  index2++
  if (index2 > 10){
    break
  }
}

//do - while*/
let index1 = 0 
do {
  console.log(`인덱스 ${index1} 입니다`)
  index1++  //++를 안해주면 계속 0이여서 무한루프
}  while (index1 < 10)
