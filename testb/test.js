// let list:Array<number> = [1,2,5,4,8]
// for (let i in list){
//     console.log(i)
// }
// for(let i of list){
//     console.log(i)
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let list:Array<string> = ['n','age','na']
//     for (let i of list){
//     console.log(i)
//     }
// let nan:string = 'andrea';
// let sentence:string = `my name is ${nan}`;
// console.log(sentence);
// function myAdd(firstname:string,lastname?:string){
//     return`${firstname} ${lastname}`
// }
//
// let resulta = myAdd("andrea","yang");
// // console.log(resulta);
// let resultb = myAdd("andrea");
// console.log(resultb);
//
// interface myInterface{
//     name:string;
// }
// let x:myInterface;
// let y ={
//     name:"alice",
//     age:18
// }
// x=y;
// function greet(n: myInterface) {
//     alert('Hello, ' + n.name);
// }
// let resulta= greet(y);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
