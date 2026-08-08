const obj = {
    firstName : "kuntal",
    lastName : "Panda",
    age : 23,
    degree : "cseAIML",
    greet: function(fullName) {    
        console.log("Hello!" + fullName);
    },
    hasDriverLiscense : true,
    // greet: function() {    
    //     console.log(`Hello! ${this.firstName}`);
    // },
    birthYear : function(currYear){
        this.year = currYear - this.age;
        return this.year;
    },

    getSummary : function() {
        console.log(`I am ${this.firstName} ${this.lastName} born on ${this.birthYear(2026)} has ${this.hasDriverLiscense ? 'a' : 'no'} driver liscense at the age of ${this.age} with a ${this.degree} degree`)
    }

};

console.log(obj);
console.log(obj.firstName);
console.log(obj["lastName"]);

const value = 'firstName';
console.log(obj.value); //o/p-undefined -> problem of dot
console.log(obj[value]);

obj.greet("Kkp");
obj['greet']("Kkp");
// obj.greet();

console.log(obj.birthYear(2026));
console.log(obj);
console.log(`birthyear ${obj.year}`);

obj.getSummary();

//object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat', 'sun'];
const openingHours = {
    [weekdays[0]]: {
        open: 12,
        close: 22,
    },
    [weekdays[1]]: {
        open: 11,
        close: 23,
    },
    [`${2 + 3}th day`]: {
        open: 0, 
        close: 24,
        },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italjan', 'Pizzeria', 'Vegetarian',
    'Organic'],
    openingHours, // openingHours = openingHours
    starterMenu: ['Focaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(starterIndex, mainIndex) {
        console.log(`starter-${this.starterMenu[starterIndex]} mainCourse-${this.mainMenu[mainIndex]}`);
    }

};
restaurant.order(0, 2);
console.log(restaurant);
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if(restaurant.order ?.(0, 1) ?? "no order");