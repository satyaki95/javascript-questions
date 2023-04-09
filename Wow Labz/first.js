// Incrementing Streams
// You are given a stream of integers represented by an array arr[] of size N.
// Whenever you encounter an element arr[i], you need to increment its first occurrence(on the left side)
// if present in the stream by 1 and append this element in the array.
// You don''t have to do this when you encounter arr[i] for the first time as it is the only occurrence till then.
// Finally, you need to print the updated array.

// Input Format
// The input line contains T, denoting the number of testcases.
// Each testcase contains two lines.
// First line contains N, size of array. Second line contains elements of array separated by space.

// Output Format
// For each testcase you need to print the updated array in a new line.

// Example 1
// Input

//  1
//  10
//  1 2 3 2 3 1 4 2 1 3

// Output

//  4 5 3 2 3 2 4 2 1 3

// Explanation

// Testcase 1:
// We encounter 1, 2, 3. We encounter 2 again so we increment its leftmost occurrence by 1.
// The updated array becomes 1 3 3 2. We encounter 3 next.
// So we increment its left most occurrence by 1. So updated array is 1 4 3 2 3.
// Next we encounter 1, so we increment the leftmost occurrence of 1 by 1.
// New updated array is 2 4 3 2 3 1. Next we encounter 4, so we do the same and increase its first occurrence by 1.
// New updated array is. 2 5 3 2 3 1 4. Next we encounter 2, so we do the same and increase its first occurrence by 1.
// New updated array is. 3 5 3 2 3 1 4 2. Next we encounter 1, so we do the same and increase its first occurrence by 1.
// New updated array is 3 5 3 2 3 2 4 2 1. Next we encounter 3, so we do the same and increase its first occurrence by 1.
// New updated array is 4 5 3 2 3 2 4 2 1 3.

// Constraints:

// 1 <= T <= 100

// 1 <= N <= 10^4

// 1 <= arr[i] <= 10^5

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
let arr = [1, 2, 3, 2, 3, 1, 4, 2, 1, 3, 5, 6];

let updatedArr = updateArray(arr);
console.log(updatedArr);
