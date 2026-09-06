"use strict";

//There are no external class keyword in js this just a paradigm, prototype inheritance
const Employee = function(id, firstName, lastName) {  //constructor function (Employee =>starts with capital)
    //we should not use arrow function here as we need to implement this keyword here
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
};

Employee.status = function() { //static method
    console.log("constructor class created");
    console.log(this);
}
const john = new Employee(102, 'John', 'Doe');
// john.status(); //throws error
Employee.status();
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
/* 
Prototypal Inheritance -->
Constructor function "Employee" has a prototype property(Employee.prototype) which is a object inside this object we have defined the "showDetails" method now this object also has the referance of "Employee" which is the constructor function(Employee.protype.constructor will point to "Employee itself").now Employee.prototype is not the prototype of "Employee" but the prototype of all the object created through the "Employee" function

*/
const arr = [1, 2, 4, 5, 6, 1, 2, 3, 4, 5, 6];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);
//so we can add methods to the Array prototype which will then can be inherited by all the other arrays,but it is not recommended to change the default methods of a built-in prototype
Array.prototype.unique = function() {
    return [...new Set(this)];
}
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.log(h1);
console.dir(h1); //prototype chain in the console



//ES6 Classes
// const Person = class{} //class expression
//class declaration
class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    //methods will be added to .prototype property
    //instance method-->available to all instances
    personInfo() {
        console.log(`${this.firstName} ${this.lastName} is of ${2026 - this.birthYear} years`);
    }
    //static method-->only available to the class not to the instances
    static classStatus() {
        console.log("Class Created");
        console.log(this);
    }
}
          
const p1 = new Person("john", "Doe", 2000);
p1.job = true;
console.log(p1);
console.log(p1.job);
console.log(p1.__proto__);
p1.personInfo(); 
// p1.classStatus(); //O/P-->classStatus is not a function error
Person.classStatus(); //this points to Person itself

//object.create
// 1. Define a prototype "blueprint" object
const animal = {
  isAlive: true,
  eat() {
    console.log("Nom nom nom");
  }
};
const dog = Object.create(animal);
dog.breed = "Golden Retriever";
console.log(dog.breed);   // "Golden Retriever" (Its own property)
console.log(dog.isAlive); // true (Inherited from animal!)
dog.eat();                // "Nom nom nom" (Inherited method)
animal.status = function() {
    console.log(`Class created with object.create`);
}
dog.status();
console.log(dog.__proto__);


//Inheritance

const Department = function(id, first, last, dep) {
    Employee.call(this, id, first, last);
    this.dep = dep;
}
Department.prototype = Object.create(Employee.prototype); //linking the prototypes
const em1 = new Department(100, "walter", "white", "SDE");
em1.showDetails();
//ES6 Inheritance
class Student extends Person {
    constructor(firstName, lastName, birthYear, course) {
        super(firstName, lastName, birthYear); //super have to be the first here
        this.course = course;
    }
    //as we are declaring a new parameter thats why we have to set the constructor method and call super method(which call the parent class) o/w we don't have to create the constructor method if the parameters are same in both parent and child class and also don't need to call super as it will be executed automatically then
    personInfo() {
        console.log(`${this.firstName} ${this.lastName} is of ${2026 - this.birthYear} years studing ${this.course}`);
    }
}
const jay = new Student("Jay", "Davis", "2002", "CSE");
jay.personInfo(); //this method was both present in parent and child class but due to inheritance chain the child class method will execute

//Public,Private,Protected
class Account {
    locale = navigator.language; //public
    movements = [];
    #pin; //private
    constructor(owner, pin) {
        this.owner = owner;
        this.#pin = pin;
        // this.locale = navigator.language;
        // this.movements = [];
        this.currency = "USD";
        this._origin = "IN"; //protected->it's a syntax that symbolizes that this should not be accessed outside the class(developers are used to this practice) though it is accessible outside the class
    }
    deposite(val) {
        this.movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposite(-val);
        return this;
    }

    #approveLoan(val) {
        if(val > 0) return true;
    }

    requestLoan(val) {
        this.#approveLoan(val) ? console.log("will be credited") : console.log("can't process");
    }
}
const acc = new Account("acc", 1111);
console.log(acc);
// console.log(acc.#pin); //can't access outside the class
// console.log(acc.#approveLoan(100)); //can't access outside the class
acc.requestLoan(100);
console.log(acc._origin);
acc.deposite(100).deposite(200).withdraw(100).requestLoan(100); //not possible as these methods dont' return anything,for the chaining to work we need to return this