"use strict";

//There are no external class keyword in js this just a paradigm, prototype inheritance
const Employee = function(id, firstName, lastName) {  //constructor function (Employee =>starts with capital)
    //we should not use arrow function here as we need to implement this keyword here
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
};
const john = new Employee(102, 'John', 'Doe');
/*
1. New {} is created
2. function is called, this = {}
3. {} linked to prototype
4. function automatically return the object
*/
console.log(john); //this refers to this object
console.log(john instanceof Employee);
//Prototype
console.log(typeof Employee);
console.log(Employee.prototype);
Employee.prototype.showDetails = function() {
    console.log(`id-${this.id} of ${this.firstName} ${this.lastName}`);
}
john.showDetails();
console.log(Employee.prototype);
console.log(john.prototype); //undefined
console.log(john.__proto__);
console.log(john.__proto__ === Employee.prototype);
console.log(Employee.prototype.isPrototypeOf(john));
console.log(Employee.prototype.isPrototypeOf(Employee)); //O/P-false

Employee.prototype.division = 'SDE';
console.log(john.division);
console.log(john.__proto__);
console.log(Employee.prototype);
console.log(john.hasOwnProperty('id'));
console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('division')); //O/P-false
console.log(Employee.hasOwnProperty("division"));
console.log(Employee.hasOwnProperty("firstName"));
console.log(Employee.hasOwnProperty("id"));