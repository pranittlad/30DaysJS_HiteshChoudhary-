
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 3000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 2000);
  });
  

  Promise.race([promise1, promise2, promise3])
    .then(value => {
      console.log('First promise resolved:', value);
    })
    .catch(error => {
      console.log('First promise rejected:', error);
    });
  