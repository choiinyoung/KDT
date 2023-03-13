const promise = new Promise(function (resolve, reject) {
  const young = 'a';
  if (young === ' a') {
    setTimeout(() => {
      resolve('young is young');
    }, 3000);
  } else {
    reject('young is getting old');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
