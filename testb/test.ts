// let list:Array<number> = [1,2,5,4,8]
// for (let i in list){
//     console.log(i)
// }
// for(let i of list){
//     console.log(i)
// }

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

class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
