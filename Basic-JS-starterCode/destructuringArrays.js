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
const arr = [3, 5, [8, 9]];
let [x, , [y, z]] = arr;
console.log(x, y, z);
//setting default values
const [a = 1, b = 1, c = 1] = [10, 20];
console.log(a, b, c); //although there isn't a third value in the array c will have a default value of 1