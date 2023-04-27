const str = "cbcbdde";

let map = new Map();

for (let i = 0; i < str.length; i++) {
  if (map.has(str[i])) {
    map.set(str[i], map.get(str[i]) + 1);
  } else {
    map.set(str[i], 1);
  }
}
let count = 1;

map.forEach((key, value) => {
  if (key == count) {
    console.log(value);
  }
});
