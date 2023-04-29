function maximizeProduct(arr) {
  let n = arr.length;

  let result = 0;

  for (let i = 0; i < n; i++) {
    let s1 = arr[i];
    let len1 = arr[i].length;

    let unmap = new Map();
    for (let c of s1) {
      if (unmap.has(c)) {
        unmap.set(c, unmap.get(c) + 1);
      } else {
        unmap.set(c, 1);
      }
    }

    for (let j = i + 1; j < n; j++) {
      let s2 = arr[j];
      let len2 = arr[j].length;

      let flag = false;

      for (let k = 0; k < s2.length; k++) {
        if (unmap.has(s2[k])) {
          flag = true;
          break;
        }
      }

      if (flag == false) {
        result = Math.max(result, len1 * len2);
      }
    }
  }

  console.log(result);
}

let arr = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
let result = maximizeProduct(arr);
