function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
var result = sum(10)(20)(30);
console.log(result);


// function abc (){
// var b=10;
// function cd(){
// var res = b*10;
// return res;
// }
// console.log(cd());
// }
// abc();

