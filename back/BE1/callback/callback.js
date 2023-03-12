// function buySync(item, price, quantity) {
//   console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다`);
//   console.log('계산이 필요합니다');
//   const total = price * quantity;
//   return total;
// }

// function pay(tot) {
//   console.log(`${tot} 원을 지불하였습니다`);
// }

// const totalMomey = buySync('포켓몬빵', 1000, 5);

// pay(totalMomey);

// setTimeout 함수를 사용해서 계산원이 1초에 걸려서 계산을 한다고 만들어보자
// function buySync(item, price, quantity) {
//   console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다`);
//   setTimeout(() => {
//     console.log('계산이 필요합니다');
//     const total = price * quantity;
//     return total;
//   }, 1000);
// }

// function pay(tot) {
//   console.log(`${tot} 원을 지불하였습니다`);
// }

// const totalMomey = buySync('포켓몬빵', 1000, 5);

// pay(totalMomey);

// callback 사용
// function buySync(item, price, quantity, callback) {
//   console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다`);
//   setTimeout(() => {
//     console.log('계산이 필요합니다');
//     const total = price * quantity;
//     callback(total);
//   }, 1000);
// }

// function pay(tot) {
//   console.log(`${tot} 원을 지불하였습니다`);
// }

// const totalMomey = buySync('포켓몬빵', 1000, 5, pay);

// pay(totalMomey);

// 익명함수 사용
function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다`);
  setTimeout(() => {
    console.log('계산이 필요합니다');
    const total = price * quantity;
    callback(total);
  }, 1000);
}

buySync('포켓몬빵', 1000, 5, function (total) {
  console.log(`${total}원을 지불하였습니다.`);
});
