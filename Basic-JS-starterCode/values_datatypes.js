// Data types and variable name conventions
//in js all the values that are not objects are called primitive values

let firstName = "Kuntal";   //variable naming style - camelCase
let $secondName = "Kumar";
let _lastName = 'Panda';    //only '$' and '_' are allowed at first of the variable name
console.log(firstName, $secondName);
let age = 23;
let year; //undefined
console.log(year) //output undefined
console.log(typeof year) //output undefined

let PI = 3.1415 //if we know that the value will always be constant(like pi) we can write the variable name all in capital
console.log(firstName);
let bool = true;
console.log(typeof bool);
bool = 69;
console.log(typeof bool);
//In js the variables doesn't have data types it is the values that have data types. bool is just a variable which can be used to store either int or string....
console.log(typeof null) //null is a primitive value whose datatype is object and value is null

const birthYear = 2003; //constant value, can't be changed
const job; //error->SyntaxError, we should always initialize const
//it's a good practice to use const as constant changing of values can create bugs

var balance = 2000;
// let is restricted to the block where it is defined. block scoped
// var ignores the block and is accessible anywhere within the surrounding function

accountNumber = 123456; //it is also valid without using let,var or const but not recommended



