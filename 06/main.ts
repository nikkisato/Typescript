//function doSomething() {
//  for (let i = 0; i < 5; i++) {
//    console.log(i);
//  }
//  console.log('Finally ' + i);
//}

//doSomething();

//Types
let count = 5;
//count = 'A'; Example this cannot be reassigned

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'A', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//enum
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Blue;

//Type assertions
let message;
message = 'abc';
//let endsWithC = (<string>message).endsWith('c');
//let alternativeWay = (message as string).endsWith('c'); //Compiler giving me warning

let log = function (message) {
  console.log(message);
};

let doLog = message => console.log(message);

//inline annotations

//interface Point {
//  x: number;
//  y: number;
//  draw: () => void;
//}

//let drawPoint = (point: Point) => {
//  //....
//};

//let getDistance = (pointA: Point, pointB: Point) => {
//  //
//};
//drawPoint({
//  x: 1,
//  y: 2,
//  draw: ,
//});

//class Point {
//  x: number;
//  y: number;

//  constructor(x: number, y: number) {
//    this.x = x;
//    this.y = y;
//  }
//  draw() {
//    console.log('x: ' + this.x + ' , Y:' + this.y);
//  }
//}

class Point {
  constructor(public x?: number, private y?: number) {}
  draw() {
    console.log('x: ' + this.x + ' , Y:' + this.y);
  }
}

let point = new Point(1, 2);
//point.x = 1;
//point.y = 2;
point.draw();
