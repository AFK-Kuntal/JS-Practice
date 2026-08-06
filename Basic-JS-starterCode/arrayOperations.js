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