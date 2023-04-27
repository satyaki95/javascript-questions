let str  = "I evol uoy os !hcum";

let str2 = str.split(" ");
str2 = str2.map((item)=> item.split('').reverse().join().toString().replace(/,/g,'')).toString().replace(/,/g," ");
console.log(str2);