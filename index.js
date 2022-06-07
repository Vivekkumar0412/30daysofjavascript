// var Myname = "Vivek kumar";
// console.log(typeof(Myname)); 
// program to swap two numbers
// let a = 15;
// let b = 6;
// let c;
// c = b;
// b = a;
// a = c;
// console.log(a);
// console.log(b);

// program to swap two numbers without using 3rd varriable

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a);
// console.log(b);

// console.log("Just checking");
// To check wether a year is leap year or not

// let y = 2020;
// if(y % 4 === 0 || y % 400 === 0 && y %100 != 0){
//     console.log("leap year");
// }else{
//     console.log("Not a leap year");
// };

// let age = 16;
// if(age>=18){
//     console.log("You are elegible to vote")
// }else{
//     console.log("You are not elegible to vote")
// };

// console.log("checking something");

// console.log("checking fourth time ");
// console.log("checking fifth time");


// truthy and falsy values
//  we have 5 falsy values in javascript 
// 0, "", undefined, false, null,Nan
// if(scor = 0){
//     console.log("we won the match");
// }else{
//     console.log("we lost the match");
// };


// $$$$ ternary operator in javascript $$$$
//  $$$$Ternary oeprator in javascript basically takes  operands $$$$
//  $$$$i can also say that it is the short form of if else conditions $$$$
// #### write a program to check weather someone can vote or not using if-else ###
// let age = 10;
// if(age>= 18){
//     console.log("YOU CAN VOTE")
// }else{
//     console.log("YOU CAN NOT VOTE");
// };

// #### write a program to check weather someone can vote or not using ternary operator ###

// let ag = 8;
// console.log((ag>=18)?"YOU CAN VOTE" : "YOU CAN NOT VOTE");

// $$$$ Switch statement in javascript $$$
// let area = "rectangle";
// let l = 10;
// let b = 20;
// let r = 5;
// let PI = 3.12;
// switch(area){
//     case area = "circle":
//         console.log("AREA OF CIRCLE IS : " + PI*r**2);
//         break;
//     case area = "rectangle":
//         console.log("AREA OF RECTANGLE IS : " + l*b);
//         break;
//     default:
//         console.log("INVALID DATA");
        
// };


// loops in javascript
// loop basically helps us to remove repatative code
// while loop
// print from 1 to 20
let num = 0;
while(num<=20){
    console.log(num);
    num++;
};
// do while loop

do{
    debugger;
    console.log(num);
    num++;
}while(num<20);


// for loop
for(let i = 0; i<= 20; i++){
    debugger;
    console.log(i);
}; 

// Print table using for loop

let tb = 17;
for(let i = 1; i<=10; i++){
    console.log(tb + " X "+ i + " = " + tb*i);
}
