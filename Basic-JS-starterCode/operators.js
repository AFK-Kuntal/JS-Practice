// Arithmatic Operatos (+,-,*,/)
const firstName = "Kuntal";  
const $secondName = "Kumar";
const _lastName = 'Panda';
console.log(firstName + " " + $secondName + " " + _lastName); 
console.log(2 ** 3) //2 to the power of 3 2^3

// Assignment Operators
let x = 10;
x += 10;
console.log(x++);
console.log(x);

// Comparison Operators(>, <, >=, <=)
console.log(5 === '5') //output false
//=== is strict equal.only True if values and types are identical. !== strict not equal
console.log(5 == '5') //output true
//== loose equal. only True if values are equal after type conversion. != loose not equal


x = y = 10 + 10 - 10; 
// assignment right to left x = y = 10, y= 10, x = 10
