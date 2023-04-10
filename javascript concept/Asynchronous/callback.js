// function display(item){
//     console.log(item);
// }

// function cal(num1,num2,callback){
//     let sum = num1+num2;
//     callback(sum);
// }

// cal(5,5,display);

const payment = `true`;
const marks = 90;
const enroll = (callback) => {
  console.log(`process....`);

  setTimeout(() => {
    if (payment) {
      callback();
    } else {
      console.log(`payment failed`);
    }
  }, 2000);
};

const progress = (callback) => {
  console.log(`progress...`);

  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log(`fail...`);
    }
  }, 3000);
};

const certificate = () => {
  console.log(`preparing certificate`);

  setTimeout(() => {
    console.log(`congrats`);
  }, 1000);
};

enroll(() => {
  progress(certificate);
});
