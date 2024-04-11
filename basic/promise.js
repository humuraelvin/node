
const myPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       var randomNumber = Math.random();

       if (randomNumber < 0.5) {
           resolve('Sucessful!');
       } else {
           reject('Failed')
       }
   }, 1000);
})

myPromise.then((resolve) => {
    console.log("Promise resolved sucessfully !", resolve);
}).catch((reject) => {
    console.error("Promise rejected", reject);
})