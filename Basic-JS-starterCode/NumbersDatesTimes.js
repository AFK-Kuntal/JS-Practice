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


//Dates and Times

const date = new Date();
console.log(date);
const anotherDate = new Date("Aug 30 2026 11:24:43");
console.log(anotherDate);
//month and days(sunday,monday...) are 0 based so jan -> 0
console.log(new Date(2026, 10, 19, 0, 30, 10));
console.log(new Date(2026, 10, 33, 0, 30, 10)); //nov is 30 days but if we mention 33 as date it will automatically fix it
console.log(new Date(0)); // 1 jan 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)) //3 days from 1 jan 1970(converted into ms)
const future = new Date(2026, 10, 19, 0, 30, 10);
console.log(future);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.toDateString());
console.log(future.getTime());
console.log(Date.now());
console.log(future.setFullYear(2000)); //set also works on the above methods as well setMinutes.....
console.log(future);

//internationalizing

//Internationalizing dates
const now = new Date();
const options = {
    day : "2-digit",
    month : "long",
    year : "numeric",
    hour : "numeric",
    minute : "2-digit",
    weekday : "long",
}
// const inter = new Intl.DateTimeFormat('en-US').format(now); //only shows the current date
const locale = navigator.language;
console.log(locale);
const inter = new Intl.DateTimeFormat(locale, options).format(now);
console.log(inter);
//Internationalizing numbers
const num = 123456789.34;
console.log(new Intl.NumberFormat(locale, {
    // style : 'unit',
    // style : 'percent',  //when style is set to percent unit will be completelty ignored
    style : "currency",
    unit : 'celsius',
    currency : 'INR',
    // useGrouping : false //doesn't show the number in comma or dot seperated which is set by locale(like in IND 12,34,56,789 while in US 123,456,789)
}).format(num));

//Timers
const ingredients = ['olives', 'spinach'];
//setTimeout -> runs only once
const timer = setTimeout(
    (ing1, ing2) => console. log(`Here is your pizza
    with ${ing1} and ${ing2}`),
    3000,     //3000ms - 3sec have to pass in ms
    // 'olives', //anything after the time will work as a argument to the function
    // 'spinach'
    ...ingredients
);
// if(ingredients.includes('spinach')) clearTimeout(timer);
//setInterval ->runs in a loop
const interval = setInterval(() => console.log(new Date()), 30000);