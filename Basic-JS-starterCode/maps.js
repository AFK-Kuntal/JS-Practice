"use strict";

const arr = [2, 3, 4];
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italjan', 'Pizzeria', 'Vegetarian',
    'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(starterIndex, mainIndex) {
        console.log(`starter-${this.starterMenu[starterIndex]} mainCourse-${this.mainMenu[mainIndex]}`);
    }

};

const mp = new Map([
    ["firstname", "Kuntal"],
    ["age", 20],
    [true, "eligible"],
    [false, "not eligible"],
    [arr, "array detected"],
    [document.querySelector("h1"), "successfull"]
]);
console.log(mp.get(arr));
console.log(mp.size);
for(const [key, value] of mp) console.log(`${key} : ${value}`);
const mapFromObject = new Map(Object.entries(restaurant))  //as entries return an array of array which also the expected structure for map
const arr1 = [...mp];
console.log(arr1);
console.log([...mp.keys()]);
console.log([...mp.values()]);