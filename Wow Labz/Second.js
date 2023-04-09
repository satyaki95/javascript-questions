function largestNumber(arr) {
  const sortedArr = arr.map(String).sort((a, b) => b + a - (a + b));
  const largestNum = sortedArr.join("");
  return largestNum;
}
const arr = [8, 9, 10, 11, 12];
const largestNum = largestNumber(arr);
console.log(largestNum);

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(BiggestNumber(N, Arr));
}

function comparator(x, y) {
  let xy = x.toString() + y.toString();
  let yx = y.toString() + x.toString();

  return yx - xy;
}
function BiggestNumber(n, Arr) {
  Arr.sort(comparator);

  let ans = "";
  for (let i = 0; i < n; i = i + 1) {
    ans = ans + Arr[i];
  }
  return ans;
}
