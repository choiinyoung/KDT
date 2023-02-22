let result=0

for(let i = 0 ; i <= 1000 ; i++){
  if(i % 2 === 1) continue
  console.log(i)
  result+=i
}
console.log(result)