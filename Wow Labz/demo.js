function updateArray(arr) {
  let updatedArr = arr;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.get(updatedArr[i])) {
      map.set(updatedArr[i] + 1, 1);
      let idx = updatedArr.indexOf(updatedArr[i]);
      updatedArr[idx] = updatedArr[idx] + 1;
    } else {
      map.set(updatedArr[i], 1);
    }
  }
  return updatedArr;
}
// example usage
let arr = [1, 2, 3, 2, 3, 1, 4, 2, 1, 3];
let updatedArr = updateArray(arr);
console.log(updatedArr); // [4, 5, 3, 2, 3, 2, 4, 2, 1, 3]
