// toString() 
// Convert to string of array values

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const frt = fruits.toString();
// console.log(frt);

// -----------------------  ****  ------------------------

// join()
// method also joins all array elements into a string.
// It behaves just like toString()
// but in addition you can specify the separator


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const frt1 = fruits.join(" * ");
// console.log(frt1);

// -----------------------  ****  ------------------------

// pop()
// removes the last element from an array

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// console.log(fruits2);

// -----------------------  ****  ------------------------

// push()
// adds a new element to an array at the end
// returns the new array length

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
let length = fruits.push("Kiwi");
// console.log(fruits3 +" "+ length);

// -----------------------  ****  ------------------------

// shift()
// removes the first array element and "shifts"
// all other elements to a lower index.
//  returns the value that was "shifted out"

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const frt4 = fruits4.shift();
// console.log(frt4);
// console.log(fruits4);

// -----------------------  ****  ------------------------

// unshift()
// adds a new element to an array at the beginning
// returns the new array length

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const frt5 = fruits5.unshift("Lemon");
// console.log(fruits5);
// console.log(frt5);

// -----------------------  ****  ------------------------

// Changing Elements
// Array elements are accessed using their index number

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6[0] = "Kiwi";
// console.log(fruits6);

// -----------------------  ****  ------------------------

// Array.length
// provides an easy way to append a new element to an array

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7[fruits.length] = "Kiwi";
// console.log(fruits7);

// -----------------------  ****  ------------------------

// delete
// Array elements can be deleted and
// leaves undefined holes in the array

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits8[0];
// console.log(fruits8);

// -----------------------  ****  ------------------------

// concat()
// creates a new array by merging concatenating existing arrays

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myBoys.concat(myGirls);
// console.log(myChildren);

// concat() method can take any number of array arguments

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);

// console.log(myChildren1);


// -----------------------  ****  ------------------------

// splice
// adds new items to an array
// to remove elements without leaving "holes" in the array

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
// fruits9.splice(2, 1, "Lemon", "Kiwi");
fruits9.splice(0, 1);
// console.log(fruits9);

// -----------------------  ****  ------------------------

// slice()
// slices out a piece of an array into a new array.
// method creates a new array and not remove any elements from the source array

const fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits10.slice(1,3);
console.log(citrus);
console.log(fruits10);