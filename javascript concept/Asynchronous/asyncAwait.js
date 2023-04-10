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

async function course() {
  try {
    await enroll();
    await progress();
    const message = await certificate();

    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
