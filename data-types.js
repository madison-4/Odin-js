#!/usr/bin/node
// a script to practoce data types

const string = "The revolution will not be televised";
console.log(string);
console.log(string.charCodeAt(0))
let text = "Hello World \uD800";
let result = text.toWellFormed();
console.log(result);
let strInt = "42";
let strFloat = "3.14";

console.log(+strInt);   // Output: 42 (Number)
console.log(+strFloat); // Output: 3.14 (Number)
console.log(typeof +strInt); // Output: "number"
console.log(typeof(strInt));
