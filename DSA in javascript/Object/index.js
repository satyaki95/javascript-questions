//input = [ [ 1, ’a’], [ 2, ’b’], [ 3, ’c’] ]   output = [ ‘a’, ‘b’, ‘c’ ]
// let a = [ [ 1, 'a'], [ 2, 'b'], [ 3, 'c'] ];
// let b = [];
// for(let i=0;i<a.length;i++){
//     b.push(a[i][1]);
// }
// console.log(b);

let inputt = [
  {
    val: 1,
    str: "a",
  },
  {
    val: 2,
    str: "b",
  },
  {
    val: 3,
    str: "c",
  },
];
let arre = [];
inputt.map((item) => {
  arre.push(item.str);
});
console.log(arre);
