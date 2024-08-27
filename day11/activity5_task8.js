// Define some sample promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 1500);
  });
  
  
  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log('All promises resolved');
      console.log(values); 
    })
    .catch(error => {
      console.log('One of the promises rejected', error);
    });
  