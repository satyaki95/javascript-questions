function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
var result = sum(10)(20)(30);
console.log(result);
