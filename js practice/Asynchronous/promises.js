// const status = true;

// console.log(`task 1`);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (status) {
//             resolve(`task 2`);
//         }
//         else{
//             reject(`task 3`);
//         }

//     }, 2000);
// })

// promise
// .then((value)=> console.log(value))
// .catch((err)=> console.log(err))

const payment = `true`;
const marks = 90;
const enroll = (callback) => {
  console.log(`process....`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve();
      } else {
        reject(`payment failed`);
      }
    }, 2000);
  });

  return promise;
};

const progress = (callback) => {
  console.log(`progress...`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject(`fail...`);
      }
    }, 3000);
  });
  return promise;
};

const certificate = () => {
  console.log(`preparing certificate`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`congrats`);
    }, 1000);
  });
  return promise;
};

enroll()
  .then(progress)
  .then(certificate)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
