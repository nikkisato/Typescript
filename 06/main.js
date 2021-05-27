//function doSomething() {
//  for (let i = 0; i < 5; i++) {
//    console.log(i);
//  }
//  console.log('Finally ' + i);
//}
//doSomething();
//Types
var count = 5;
//count = 'A'; Example this cannot be reassigned
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'A', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
//Type assertions
var message;
message = 'abc';
//let endsWithC = (<string>message).endsWith('c');
//let alternativeWay = (message as string).endsWith('c'); //Compiler giving me warning
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ' , Y:' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
//point.x = 1;
//point.y = 2;
point.draw();
