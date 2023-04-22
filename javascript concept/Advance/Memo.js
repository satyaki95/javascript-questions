let sum = 0;

const cal = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memo = (cal) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = cal(n);
      cache[n] = result;

      return result;
    }
  };
};

console.time();
const effi = memo(cal);
console.log(effi(5));
console.timeEnd();
console.time();
console.log(effi(5));
console.timeEnd();

