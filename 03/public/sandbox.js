"use strict";
//Lesson 2 Compiling Typescript
//const character = 'Mario';
//console.log(character);
//const inputs = document.querySelectorAll('input');
//console.log(input);
//inputs.forEach(input => {
//  console.log(input);
//});
//Lesson 3 Type Basics
let character = 'Mario';
let age = 30;
let isBlackBelt = false;
//character = 20; cannot change it to a number value
character = 'luigi'; //can change it to another string value
//age = "yoshi" same for others cannot change the value from number to string
age = 40;
//isBlackBelt = "yes" isBlackBelt value is a boolean cannot change it to a string
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//Lesson 4 Object & Arrays
//Arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(3); we initially defined the names array to be strings
let numbers = [10, 20, 30, 40];
numbers.push(25);
//numbers.push('shaun');
//numbers[1] = 'shaun';
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.age = '30';
//ninja.skills = ['fighting', 'sneaking'];
//ninja {
//    name: "yoshi",
//    belt: "orange",
//    age: 40
//}
//Lesson 5 Explicit Types
//Explicit types
let character2;
let age2;
let isLoggedIn;
//Array
let ninjas = [];
ninjas.push('shaun');
//Union types one of two types
let mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);
let uid;
uid = '213';
uid = 213;
//Object
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];
let ninjaTwo;
ninjaTwo = {
    name: 'Mario',
    age: 20,
    beltColour: 'Black',
};
//Lesson 6 Dynamic (any) types
//Any Type
let age4 = 25;
age4 = true;
console.log(age4);
age4 = 'hello';
console.log(age4);
age4 = { name: 'luigi' };
console.log(age4);
let mixed3 = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
let ninja2;
//ninja2: {
//    name: "yoshi",
//    age: 25;
//}
//ninja2: {
//    name: 25,
//    age: "yoshi";
//}
//Lesson 7 Better workflow & TSconfig
//Modified the tsconfig.json file to compile
//Lesson 8 Function Basics
//let greet = () => {
//  console.log('hello world');
//};
let greet;
greet = () => {
    console.log('Hello again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 5);
//? = optional
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} says Hello`);
};
//Lesson 10 Function Signatures
//Example 1
let greet3;
greet3 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
//Lesson 11 The DOM & type casting
//Lesson 18 Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'hi' },
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'coco'],
};
//Lesson 19 Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docOne11 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
};
const docTwo2 = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' },
};
console.log(docOne11);
console.log(docTwo2);
//Lesson 20 Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
