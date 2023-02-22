const young = {
  name : 'inyoung',
  age : 25,
};

//접근
console.log(young.name)
console.log(young['age'])
//추가
young.gender = 'F'
console.log(young)

young['haircolor'] = 'black'
console.log(young)

//삭제
//delete young.gender 같은 표현 방법
delete young['gender']
console.log(young)