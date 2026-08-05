// Type Conversion is when we manually convert the type of a value in js and Type Coercion is when JS automatically converts the value
const dig = '1234';
console.log(dig);
console.log(typeof dig)
console.log('1000' + dig) //10001234 concatenation
console.log(1000 + dig) //again concatentaion only '+' with a string always signifies concatenatoion and convert all to string(type coercion)
console.log(dig - 1000) //234.JS converts dig to a int(type coercion)
console.log('100' > '10') //true 100 > 10
console.log('10' + '12' - 10) //'1012' - 10 ->1002
console.log(10 + 12 + '10')//22 + '10 ->2210
console.log(Number('kuntal')) //NaN->not a number
console.log(typeof NaN) //output

console.log(Number(dig)); //type conversion.it doesn't change the original value of dig
console.log(typeof dig, dig);
console.log(`the value of dig is ${dig}`) //Template Literals->similar to python fstring
const multiLine1 = `This is line one.
This is line two.
This is line three.`;

console.log(multiLine1);
const multiLine2 = "This is line one.\n\
This is line two.\n\
This is line three.";

console.log(multiLine2);

