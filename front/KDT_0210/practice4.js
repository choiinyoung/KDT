let result = 0

for(let i=0;i<101;i++){
  if(i%2===0 || i%5===0){
    console.log(i)
    result +=i
  }
}
console.log(result)