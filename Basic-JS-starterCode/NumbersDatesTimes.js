"use strict";

//converting into number
console.log(Number('10'));
console.log(+"10");
console.log(Number.parseInt("23px"));
console.log(Number.parseFloat("23px"));
console.log(Number.parseFloat("23.005px"));
console.log(Number.parseInt("23.005px"));
console.log(parseInt("  45dafj   "));  //doesn't get affected by leading or trailing spaces
console.log(parseFloat("sejfio34"));  //should start by number o/w will not work O/P ->NAN

//checking
console.log(23 == 23.0);
console.log(Number.isNaN(20));  //checks only if Not a Number
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20px"));
console.log(Number.isNaN(parseFloat("sejfio34")));
console.log(isNaN(23 / 0)); //23 / 0 -> infinite

console.log(Number.isFinite(23 / 0)); //should use this to check if a valid number or not
console.log(Number.isFinite(parseFloat("sejfio34")));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.005546));