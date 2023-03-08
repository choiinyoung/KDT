const promise = new Promise(function (resolve, reject) {
  const young = 'young';

  if (young === 'young') {
    setTimeout(() => {
      resolve('young is young');
    }, 3000);
  } else {
    reject('young is getting young');
  }
});

promise.then(function (data) {
  console.log(data);
});
