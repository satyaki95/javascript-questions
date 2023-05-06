var twoSum = function (nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    if (map.has(complement)) {
      return [map.get(complement), index];
    }

    map.set(nums[index], index);
  }
};
let arr = [4, 5, 6, 7, 8];
let t = 13;

console.log(twoSum(arr, t));
