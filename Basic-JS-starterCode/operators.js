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

//short circuiting
/*
Short-circuiting in JavaScript is a behavior where logical operators evaluate an expression from left to right and stop evaluation as soon as the outcome is determinedShort-circuiting in JavaScript is a behavior where logical operators evaluate an expression from left to right and stop evaluation as soon as the outcome is determined

*/
// Logical OR (||)
/*
The || operator returns the first truthy value it encounters. If the left side is truthy, the entire expression is guaranteed to be true, so JavaScript short-circuits and completely ignores the right side.
Rule: If the first operand is truthy, it returns that operand. If it is falsy, it evaluates and returns the second operand.
*/
console.log('Apple' || 'Banana');
console.log('' || 'Orange');

//Logical AND (&&)
/* 
The && operator returns the first falsy value it encounters. If the left side is falsy, the entire expression is already guaranteed to be false, so JavaScript short-circuits and ignores the right side.
Rule: If the first operand is falsy, it returns that operand. If it is truthy, it evaluates and returns the second operand.
*/
console.log(false && "Hello") // Short-circuits immediately because false is falsy
console.log(5 && "Hello"); //Moves to the second value because 5 is truthy

//Nullish coalescing operators
const restaurant = {
name: 'Classico Italiano',
};
const guests = restaurant.numGuests || 10;
console. log(guests) ;

// Nullish: null and undefined (Not 0 or '')
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;  //Short-circuits because 0 is not null or undefinedvalue
console. log(guestCorrect) ;