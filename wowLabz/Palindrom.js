function checkPalindrom(n) {
  let str = "" + n;
  let len = str.length;

  for (let i = 0; i < parseInt(len / 2); i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
function isPalindrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    let check = checkPalindrom(arr[i]);
    if (check == false) {
      return false;
    }
  }
  return true;
}

let arr = [121, 131, 202];

let res = isPalindrom(arr);

if (res == true) {
  console.log("Palindrom");
} else {
  console.log("Not Palindrom");
}
