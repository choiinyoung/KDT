function buySync(item, price, quantity) {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다`);
  console.log('계산이 필요합니다');
  const total = price * quantity;
  return total;
}

function pay(tot) {
  console.log(`${tot} 원을 지불하였습니다`);
}

const totalMomey = buySync('포켓몬빵', 1000, 5);

pay(totalMomey);
