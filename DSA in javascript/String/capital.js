let sentence =
  "erat kasd sed eirmod et lorem no, tempor diam accusam dolor magna ipsum rebum ipsum, dolor ea eirmod sit lorem";

let capital = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

let word = (str) => str.split(" ").map(capital).join(" ");

console.log(word(sentence));
