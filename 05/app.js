var calcSum = function (first, second, third) {
    return first + second;
};
calcSum(2, 2);
//String Type
//let aString: string = 'hi'; I
var aString = 'hi';
//Number Type
var aNum;
aNum = 10;
//Boolean Type
//let aBool: boolean = true;
var aBool = true;
//Any Type
var anyVar = ' a string '; // can be anything DO NOT USE
anyVar = 5;
//Union
var year;
year = 2021;
year = '2021';
//This changes the value from a string to a number
var parsedYear = parseInt(year);
//String Array Type
var arrString = ['a', 'b', 'c'];
arrString.push('e');
//Number Array Type
var arrNumber = [1, 2, 3];
arrNumber.push(4);
//Boolean Array Type
var arrBool = [true, false];
arrBool[0] = false;
arrBool.push(true);
//Mixed Array Type
var arrMixed = [1, 'A', true];
arrMixed[0] = 'b';
arrMixed.push('hi');
//Tuples
var arrTup = ['a string', 3];
arrTup = ['2', 4];
//Object Type
var person = {
    name: 'Jesse',
    age: 23
};
person.name = 'John';
person.age = 4;
var year2;
year = 2021;
year = '2021';
//Function Type
//function calcSum2(a: number, b: number): number {
//  return a + b;
//}
//calcSum2(2, 2);
var calcSum2;
calcSum2 = function (first, second) {
    return first + second;
};
calcSum(2, 2, 2);
//Void Type
//void return nothing
var sayHi = function () {
    console.log('HI');
};
var mike = {
    name: 'mike',
    age: 23
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age;
    };
    return Person;
}());
var john = new Person('john', 3);
console.log(john.greet());
//DOM Manipulation & Type Casting
var inputName = document.querySelector('#name');
var inputAge = document.querySelector('#age');
// as HTMLInputElement is called Type Casting
var inputForm = document.querySelector('form');
var greeting = document.querySelector('.greeting');
inputForm === null || inputForm === void 0 ? void 0 : inputForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
//Generics
function doSomething(arg) {
    //T is a placeholder
    return arg;
}
doSomething('string');
doSomething(5);
doSomething(true);
doSomething('2');
var aBook = {
    id: 1,
    name: 'Title1',
    data: 'more data here'
};
var bBook = {
    id: 2,
    name: 'Title2',
    data: ['Review', 'Review2']
};
//Enums
var ManufactureMake;
(function (ManufactureMake) {
    ManufactureMake[ManufactureMake["TESLA"] = 0] = "TESLA";
    ManufactureMake[ManufactureMake["AUDI"] = 1] = "AUDI";
    ManufactureMake[ManufactureMake["MERCEDES"] = 2] = "MERCEDES";
    ManufactureMake[ManufactureMake["VOLVO"] = 3] = "VOLVO";
    ManufactureMake[ManufactureMake["BMW"] = 4] = "BMW";
})(ManufactureMake || (ManufactureMake = {}));
var myCar = {
    year: 2021,
    make: ManufactureMake.VOLVO
};
console.log(myCar.make);
