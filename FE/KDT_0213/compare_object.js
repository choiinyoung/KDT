const young = {
  name : '최이녕',
  email: 'choi121100@naver.com'
}

const 최인영 = {
  name : '최이녕',
  email: 'choi121100@naver.com'
}

console.log(young == 최인영)  //false

const inn = young
inn.name='최이녕'

console.log(young == inn) //true
