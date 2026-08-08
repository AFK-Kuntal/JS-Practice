"use strict";

const firstSet = new Set([1, 2, 1, 2, 3, 2, 4]);
console.log(firstSet);
const strSet = new Set("Kuntal");
console.log(strSet);
console.log(firstSet.has(1));
console.log(firstSet.size);
firstSet.add(10);
console.log(firstSet);
strSet.add(new Set ("Panda"));
console.log(strSet);
console.log(firstSet.delete(10));
console.log(firstSet);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef', 'Waiter'];
const staffUnique = [new Set(staff)];
console.log(staffUnique);

const arrUnique = [...new Set(staff)]; //turns the set into array directly
console.log(arrUnique);