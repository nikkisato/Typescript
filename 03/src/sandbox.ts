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

const circ = (diameter: number) => {
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
let character2: string;
let age2: number;
let isLoggedIn: boolean;
//Array

let ninjas: string[] = [];
ninjas.push('shaun');
//Union types one of two types
let mixed2: (string | number | boolean)[] = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);

let uid: string | number;
uid = '213';
uid = 213;

//Object
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: 'Mario',
  age: 20,
  beltColour: 'Black',
};

//Lesson 6 Dynamic (any) types
//Any Type
let age4: any = 25;
age4 = true;
console.log(age4);
age4 = 'hello';
console.log(age4);
age4 = { name: 'luigi' };
console.log(age4);

let mixed3: any[] = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);

let ninja2: {
  name: any;
  age: any;
};
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

let greet: Function;
greet = () => {
  console.log('Hello again');
};
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
};
add(5, 5);

//? = optional

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);

//Lesson 9 Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };
const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says Hello`);
};

//Lesson 10 Function Signatures
//Example 1
let greet3: (a: string, b: string) => void;
greet3 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//example 3
let logDetails2: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails2 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
//Lesson 11 The DOM & type casting

//Lesson 18 Generics

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);

interface Resources<T> {
  uid: number;
  resourceName: string;
  data: object;
}

const docThree: Resources<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'hi' },
};

const docFour: Resources<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'coco'],
};
//Lesson 19 Enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne11: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' },
};
const docTwo2: Resource<object> = {
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

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
