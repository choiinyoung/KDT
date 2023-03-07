const kdt = ['최두루','신상아','이유림','구슬기']

//뒤에 배열 제거 추가
kdt[0] = '최이녕'
kdt.push('ㅎㅎ')

console.log(kdt[0])
console.log(kdt,length)
console.log(kdt,kdt.pop()) //어떤 것을 뺐는지를 알려줌

//앞에 배열 제거 추가
kdt.unshift('우와')
console.log(kdt)

kdt.shift()
console.log(kdt.shift()) //어떤 것을 뺐는지를 알려줌

for(let i = 0; i < kdt.length; i++){
  console.log(kdt[i])
}