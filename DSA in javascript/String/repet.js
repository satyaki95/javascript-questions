const str = "adsjfdsfsfjsdjfhacabcsbajda";
let map = new Map();
for (let i = 0; i < str.length; i++) {
  if (map.has(str[i])) {
    map.set(str[i], map.get(str[i]) + 1);
  } else {
    map.set(str[i], 1);
  }
}
let obj = {};
map.forEach((value, key) => {
  obj[key] = value;
});

console.log(obj);
