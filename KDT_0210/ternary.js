let name = '최인영ㅇ'

if(name === '최인영'){
  console.log('맞음')
} else {
  console.log('틀림')
}

//3항 연산자
name === "최인영" ? console.log("맞음"): 
name === '최인영ㅇ' ? console.log("맞음ㅇㅇ"):console.log("틀림")
//틀렸을때 다시 ?를 사용하여 조건문을 걸어줄 수 있음 
//근데 많은 조건문을 걸게되면 가독성이 떨어짐