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

//Math
console.log(Math.sqrt(25));
console.log(9 ** (1 / 2));
console.log(27 * (1 / 3));
console.log(Math.max(10, 23, 0, 4));
console.log(Math.min(10, 23, 0, 4));
const arr = [2, 4, 6, 7,2,5];
console.log(Math.max(...arr));
console.log(Math.max(...arr) * Math.PI);
//trunc --> cuts decimal part
//round --> nearest integer
//ceil --> higher integer
//floor --> lower integer
console.log(Math.floor("23")); //rounding methods supports type coercion
console.log(Math.trunc(Math.max(...arr) * Math.PI));
console.log(Math.round(Math.max(...arr) * Math.PI));
console.log(Math.ceil(Math.max(...arr) * Math.PI));
console.log(Math.floor(Math.max(...arr) * Math.PI));
console.log(Number((Math.max(...arr) * Math.PI).toFixed(2))); //toFixed generates string


//bigInt --> Primitive Datatype
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //after this js suffers to store 
console.log(3412345823457892345763284569827356729385); //can't represent
console.log(3412345823457892345763284569827356729385n);
console.log(typeof 3412345823457892345763284569827356729385n);
// console.log(10n * 12) //not possible
console.log(BigInt(23687364)); //Bigint works well with comperatively smaller number than 'n'
