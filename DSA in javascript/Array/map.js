let arr = [1, 1, 1, 1, 2, 2, 23, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9];

// let arr2 = [...new Set(arr)];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.get(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1); // 1 2
  }
  map.set(arr[i], 1);
}

map.forEach((value, key) => {
  if (value == 1) {
    console.log(value + ":" + key);
  }
});

function findTwoRepeatedElements(n, arr) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      result.push(arr[i]);
    } else {
      map.set(arr[i], true);
    }
  }

  return result;
}

let n = 4;
let arr2 = [1, 2, 1, 3, 4, 3];
console.log(findTwoRepeatedElements(n, arr));
