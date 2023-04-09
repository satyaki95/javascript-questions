/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
 **/

const chunk = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
console.log(chunk([2, 2], 3)); // [[2, 2]]

const findPath = (object, path) => {
  const keys = path.split(".");
  let current = object;
  for (const key of keys) {
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }
  return current;
};
