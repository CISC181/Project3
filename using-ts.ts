//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output

let myValue: number = 4;
let pi:number = 3.1415927;
let r: number =2;
let answer:number = pi*r;
var total: number;

console.log(myValue);
console.log(answer);

function areaOfCircle(radius: number): number   {
  return pi * radius * radius;
  
}

//  Expression (myValue===5) is evaluated first.. as false... isEqual is set to false
let isEqual: boolean = (myValue===5);

//  Concatinating the string message and the result 
console.log('isEqual value: ' + isEqual);

//  Call the function with value, then concatinate the result with a literal... and write it to the console
console.log('Area of circle: ' + areaOfCircle(4.2));


let myStr1: string = "Hello";
let myStr2: string = "World";


//  .concat is overloaded
//  Will print HelloWorld
console.log(myStr1.concat(myStr2));
//  Will print Hello World
console.log(myStr1.concat(" ",myStr2));


let myStr:string="Hello World";

//  Will print llo World   Everything after the second position
console.log(myStr.slice(2));

//  Will print llo          Everything after the second position up to and including the fifth position
console.log(myStr.slice(2,5));

//  Will print llo          Everything after the second position up to and including the 500th position.  There is no 500th position, but this still works
console.log(myStr.slice(2,500));

//  Will print hello world
console.log(myStr.toLowerCase());

//  Will print HELLO WORLD
console.log(myStr.toUpperCase());

let myNumStr:string="42";

//  Convert string to number
let myNum:number=parseInt(myNumStr); //this function does the trick
//  Convert string to number 
myNum = +myNumStr;

//  Convert number to string
myNumStr = myNum.toString();