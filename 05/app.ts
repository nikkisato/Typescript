let calcSum = (first: number, second: number, third?: number) => {
  return first + second;
};
calcSum(2, 2);

//String Type
//let aString: string = 'hi'; I
let aString = 'hi';

//Number Type
let aNum: number;
aNum = 10;

//Boolean Type
//let aBool: boolean = true;
let aBool = true;

//Any Type
let anyVar: any = ' a string '; // can be anything DO NOT USE
anyVar = 5;

//Union
let year: string | number;
year = 2021;
year = '2021';

//This changes the value from a string to a number
const parsedYear = parseInt(year);

//String Array Type
let arrString: string[] = ['a', 'b', 'c'];
arrString.push('e');

//Number Array Type
let arrNumber: number[] = [1, 2, 3];
arrNumber.push(4);

//Boolean Array Type
let arrBool: boolean[] = [true, false];
arrBool[0] = false;
arrBool.push(true);

//Mixed Array Type
let arrMixed: (string | number | boolean)[] = [1, 'A', true];
arrMixed[0] = 'b';
arrMixed.push('hi');

//Tuples
let arrTup: [string, number] = ['a string', 3];
arrTup = ['2', 4];

//Object Type
let person = {
  name: 'Jesse',
  age: 23,
};

person.name = 'John';
person.age = 4;

//Custom Types
type stringOrNum = string | number;
let year2: stringOrNum;
year = 2021;
year = '2021';

//Function Type
//function calcSum2(a: number, b: number): number {
//  return a + b;
//}
//calcSum2(2, 2);

let calcSum2: (a: number, b: number, third?: number) => number;
calcSum2 = (first: number, second: number) => {
  return first + second;
};
calcSum(2, 2, 2);
//Void Type
//void return nothing
const sayHi = (): void => {
  console.log('HI');
};

//Interfaces
interface PersonInterface {
  name: string;
  age: number;
}
let mike: PersonInterface = {
  name: 'mike',
  age: 23,
};

//Classes
//class Person implements PersonInterface {
//  name: string;
//  age: number;

//  constructor(n: string, a: number) {
//    this.name = n;
//    this.age = a;
//  }
//  greet() {
//    return `Hi, my name is ${this.name} and I am ${this.age}`;
//  }
//}

class Person implements PersonInterface {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age}`;
  }
}
let john = new Person('john', 3);

console.log(john.greet());

//DOM Manipulation & Type Casting
const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
// as HTMLInputElement is called Type Casting
const inputForm = document.querySelector('form')!;
const greeting = document.querySelector('.greeting') as HTMLDivElement;

inputForm?.addEventListener('submit', event => {
  event.preventDefault();
  const person = new Person(inputName.value, inputAge.valueAsNumber);
  greeting.innerText = person.greet();
  inputForm.reset();
});

//Generics
function doSomething<T>(arg: T): T {
  //T is a placeholder
  return arg;
}
doSomething('string');
doSomething(5);
doSomething(true);
doSomething<string>('2');

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: book<string> = {
  id: 1,
  name: 'Title1',
  data: 'more data here',
};
const bBook: book<string[]> = {
  id: 2,
  name: 'Title2',
  data: ['Review', 'Review2'],
};

//Enums

enum ManufactureMake {
  TESLA,
  AUDI,
  MERCEDES,
  VOLVO,
  BMW,
}
const myCar = {
  year: 2021,
  make: ManufactureMake.VOLVO, //3
  //Think of this number as the index of the location in the ManufactureMke
};
console.log(myCar.make);
