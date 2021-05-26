export {};
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Nikki';

let sentence: string = `My name is ${name}, I'm learning Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Nikki', 23];

//Enum Type
enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

//Any Type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Nikki';

//let myVariable: any = 10;
//console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();

//Unknown Type
let myVariable: unknown = 10;
//console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

//Don't do this
//let anyType: any;
//anyType = 20;
//anyType = true;

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(5, 2);
add(5);

//function fullName(person: { firstName: string; lastName: string }) {
//    console.log(`${person.firstName} ${person.lastName}`);
//  }

interface Person {
  firstName: string;
  lastName: string;
}

//? = optional
//lastName? : string

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

fullName(p);

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Nikki');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
