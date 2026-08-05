'use strict';


const arr = ['Kuntal', 'Panda', 23, true]; //can contain different data types
console.log(arr, `type of arr is ${typeof arr}`);
const arr2 = new Array(10, 20, 30, "JS", arr);
console.log(arr2, `type of arr2 is ${typeof arr2}
    the length of arr2 is ${arr2.length}`);

arr.push(100); //push element at back
arr.unshift(999); //push element at front
console.log(`after making changes 
    ${arr}`);
arr.pop() // pop element at back
arr.shift() // pop element at front
console.log(`after making changes 
    ${arr}`);
// const newLength = arr.push(200); //push,pop,unshit and shift all returns new length after the operation but it is not recommended use that


console.log(arr.includes('23')); //strict comparison
console.log(arr.indexOf('23'));  //also strict comparison