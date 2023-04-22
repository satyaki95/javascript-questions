let arr = [6, 9, 15, 6, 13, 9, 11, 15];

let index = 0;
let newArr = [];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       newArr[index++] = arr[i];
//     }
//   }
// }

arr.forEach((element) => {
  if (!newArr.includes(element)) {
    newArr.push(element);
  }
});

// newArr = [...new Set(arr)];

console.log(newArr);
