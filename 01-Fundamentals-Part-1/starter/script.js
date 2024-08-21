/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Matheus");
console.log(23);

let firstName = "Matthew";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let matheus_matthew = "MATT";
let $function = 30;

let person = "Matheus";
let PI = 3.1415;

//This is better...
let myFirstJob = 'Server';
let myCurrentJob = 'Programmer';

//Than this
let job1 = 'Server';
let job2 = 'Programmer';

console.log(myCurrentJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Matheus');

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);
*/

// Math operators
const now = 2037;
const ageMatheus = now - 1993;
const ageLilliana = now - 2020;
console.log(ageMatheus, ageLilliana);

console.log(ageMatheus * 2, ageMatheus / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Matheus';
const lastName = 'Reynaud';
console.log(firstName + ' ' + lastName);

// Assignments operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators
console.log(ageMatheus > ageLilliana); // >, <, >=, <=
console.log(ageLilliana >= 18);

const isFullAge = ageLilliana >= 18;

console.log(now - 1993 > now - 2020);
