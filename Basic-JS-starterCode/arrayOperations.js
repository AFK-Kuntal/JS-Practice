
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italjan', 'Pizzeria', 'Vegetarian',
    'Organic'], 
    starterMenu: ['Focaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

};
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log("after swapping", main, secondary);
let arr = [3, 5, [8, 9]];
let [x, , [y, z]] = arr;
console.log(x, y, z);
//setting default values
const [a = 1, b = 1, c = 1] = [10, 20];
console.log(a, b, c); //although there isn't a third value in the array c will have a default value of 1

//Spread Operator
/*
You can use the JavaScript spread operator (...) to unpack elements from an iterable (like an array or object,maps, sets etc) into situations where multiple arguments, elements, or variables are expected.
*/
 arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; //[1, 2, arr[0], arr[1], arr[2]] appends the values;
console.log(newArr); //prints the entire array
console.log(...newArr) // prints individual values
anotherArr = [1, 2, newArr];
console.log(anotherArr); //inserts the entire array as an element
joinedArr = [...newArr, ...anotherArr];
console.log(joinedArr);

const str = 'Jonas';
const letters = [...str, ' ', 'S. '];
console.log(letters);
const newRestaurent = {
    founded : 2000,
    ...restaurant.categories,
    founder : 'XYZ',
    ...restaurant,
};
console.log(newRestaurent);

//Rest Operator
/*
The rest operator (...) in JavaScript is used to gather multiple elements or arguments and bundle them into a single array or object
*/ 
const [m, ...others] = restaurant.starterMenu;
console.log(m, others);

const add = function ( ... numbers) { //rest-->packing the values
    let sum = 0;
    for(let i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

add(2,3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
add(...newArr) //spread->unpacking the values

const [p, q, ...rem] = [1, 3, ...arr];  //right side of the operator-->spread, left side of the operator-->rest
console.log(p, q, rem);
const newarr = [...newArr];
console.log(newarr);

const menu = [...restaurant.starterMenu, ... restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [fristItem, secondItem] of menu.entries()) {
    // console.log(menu.entries());
    // console.log(item);
    // console.log(`${item[0] +1}: ${item[1]}`)
    console.log(fristItem + " : " + secondItem );
}

const user = [
    {name : "ABC", email : "abc@gmail.com"}
];
console.log(user[0] ?.name ?? "no name set");

const newArr2 = [2, 3, 4, 5, 6];
console.log(newArr2.slice(1));
console.log(newArr2.slice(1, -1));
console.log(newArr2.slice(-1));
console.log("ater slicing" , newArr);

console.log(newArr2.splice(2,3)) //mutates the array-start,count
console.log("after splice", newArr);
console.log(newArr2.join('-'));
const l = newArr2.concat([2,3,4]);
console.log(l);
console.log("before reverse", newArr2);
console.log(newArr2.reverse()); //mutates the array
console.log("after the reverse", newArr2)

//For Each loop(element, index, array);
newArr.forEach((ele, i, arr)=> {
    console.log(`iterating at ${i + 1} -> ${ele} of ${arr} array`);
    //we can't stop the loop in a mid way using any other condition like the other loops
})
//Map Method(element, index, array)
//unlike Foreach method map return a new array.
const newArrMap = newArr.map(function(ele, i, arr) {
    return `iterating at ${i + 1} -> ${ele} of ${arr} array`;  //can't just simply write console.log here as map return new array
})
console.log(newArrMap);

const mapArr = newArr.map(ele => ele * 2);
console.log(mapArr);

// Filter Method(element, index, array) also returns a new array
const filterArr = newArr.filter((ele, i, arr) => ele > 5); //i and arr is optional here
console.log(filterArr);

//Find Method -> returns the first element which satisfies the condition -> returns a value unlike filter which returns all the values when condition is met
const findInArr = newArr.find(ele => ele > 5);
console.log(findInArr);

//Reduce Method(Accumulator, element, index, array)
//doesn't return an array returns a value
const reduceArr = newArr.reduce((acc, ele) => acc + ele , 0); //0 -> is the value of accumulator set
console.log(`total value of the array is ${reduceArr}`);
const reduceArr2 = newarr.reduce((acc, ele) => {
    if(ele > acc) return ele;
    else return acc;
}, newArr[0]);
console.log(`largest element ${reduceArr2}`);

//find and findindex method
const users = [
  { id: 1, name: 'Alice', active: false },
  { id: 2, name: 'Bob', active: true },
  { id: 3, name: 'Charlie', active: true }
];

const activeUser = users.find(user => user.active === true);
console.log(activeUser); 

const activeUserIndex = users.findIndex(user => user.active === true);
console.log(activeUserIndex); 

//some and every method
console.log(newArr.some(ele => ele >= 5)); //if only one element satisfies the condition
console.log(newArr.every(ele => ele >= 5)); //if only all element satisfies the condition

//flat and flatmap method
//flat->flattens the array flat(depth)
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); //default depth is 1

const arr2 = [1, [2, [3, [4]]]];
console.log(arr2.flat())
console.log(arr2.flat(2)); 

const arr3 = [1, , 2, [3, [4, 5]]];
console.log(arr3.flat(Infinity)); 
//flatmap->The flatMap() method combines the functionality of map() and flat() into a single, high-performance operation. It first runs a mapping function over each element, and then flattens the result by exactly 1 level.we can't select the depth level explicitely.
const sentences = ["Hello world", "JavaScript is fun"];

// const words = sentences
//     .map(str => str.split(" "))
//     .flat()
//     .join(" and "); //output->[['Hello', 'world'], ['JavaScript', 'is', 'fun']]
// console.log(words); 

const words = sentences
    .flatMap(str => str.split(" "))
    .join(" and ");
console.log(words);

//sorting -> mutates the array

/*
sorting → mutates the original array
Negative value (< 0): a should be placed BEFORE b 
Positive value (> 0): b should be placed BEFORE a
Zero (0): a and b are considered equal for sorting

The return value does NOT literally mean "swap" or "don't swap".It tells sort() which element should come first.
*/

const numbers = [40, 100, 1, 5, 25];

// console.log(numbers.sort());
// Without a comparison function, sort() converts elements to strings and sorts them according to their string/Unicode order.
// output: [1, 100, 25, 40, 5]

console.log(numbers);
// ASCENDING ORDER
// Smaller → Larger

numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);
// [1, 5, 25, 40, 100]

// DESCENDING ORDER
// Larger → Smaller

numbers.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(numbers);
// [100, 40, 25, 5, 1]
// SHORTCUT FOR ASCENDING ORDER

numbers.sort((a, b) => a - b);
/*
a > b → a - b is POSITIVE
       → b should come before a

a < b → a - b is NEGATIVE
       → a should come before b

Therefore:
smaller → larger
*/
console.log(numbers);
// [1, 5, 25, 40, 100]

// SHORTCUT FOR DESCENDING ORDER

numbers.sort((a, b) => b - a);
/*
a > b → b - a is NEGATIVE
       → a should come before b

a < b → b - a is POSITIVE
       → b should come before a

Therefore:
larger → smaller
*/
console.log(numbers);
// [100, 40, 25, 5, 1]

// ASCENDING  → a - b → smaller → larger
// DESCENDING → b - a → larger → smaller


//ways to create arrays
// const nArr = new Array();//creates empty array
const aa = new Array(1, 3, 4, 5, 6, 7);
console.log(aa);
const nArr = new Array(5); //creates an empty array of size 5
// console.log(nArr.map(() => 5)); //can't use map to fill this
console.log(nArr); 
console.log(nArr.fill(0)); //fill(value, start, end) mutates the array
console.log(nArr.fill(10, 1, 3));

const bb = Array.from("hello");
console.log(bb);
const uniqueNumbers = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
const range = Array.from({ length: 5 }, (_, index) => index); //(value, index) => index 
console.log(range);