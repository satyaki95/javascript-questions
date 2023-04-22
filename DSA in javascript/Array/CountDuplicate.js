let arr = [6, 9, 15, 6, 13, 9, 11, 15];

const count = {};

arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);

// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else {
//     map.set(arr[i], 1);
//   }
// }

// console.log(map);
