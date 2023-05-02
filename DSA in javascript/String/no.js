const str = "abc12abc123ab34";
const regex = /\d+/g;
const matches = str.match(regex);
console.log(matches.toString());