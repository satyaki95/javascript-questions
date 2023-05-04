const arr = [1, 1, 1, 2, 2, 2, 2];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
var count = 0;
map.forEach((key, value) => {
  count = Math.max(count, key);
});
function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue) {
      return key;
    }
  }
}

const key = getKeyByValue(map, count);
console.log(key);
