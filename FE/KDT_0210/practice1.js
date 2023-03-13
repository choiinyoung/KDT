const 최이녕 = {
  성인 : true,
  vip : false,
  취했는가 : true,
  돈 : true
}

let isAdult = false
let vip = true
let isDrunken = false
let money =true
if (isAdult || vip) {
  if(isDrunken) {
    console.log('돌아가')
  } else {
    console.log('통과')
  }
} else {
  console.log('돈 통과')
}

if (((isAdult || vip) && !isDrunken)||money) {
    console.log('통과')
 } else {
    console.log('돌아가')
}

if (((최이녕.성인 || 최이녕.vip) && !최이녕.취했는가)||최이녕.돈) {
  console.log('통과')
} else {
  console.log('돌아가')
}