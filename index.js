"use strict";

const name = "Ian";
let age = 14;

console.log(age);
age = 12;
console.log(age);

let message; //without value
message = "Hello!";
console.log(message);
console.log(typeof message); //string
console.log(typeof age); //number

console.log(typeof true); //boolean
console.log(typeof false); //boolean

console.log(typeof null); //object special problem of js//

const object = {
  name: "Ian",
  age: 14,
};
console.log(object);

const funcExp = function (a, b, c) {
  return console.log(a + b + c);
};
funcExp(3, 2, 1);

const arrowFunc = (a, b, c) => console.log(a + b + c);
arrowFunc(3, 6, 10);

const breadPrice = 40;
const milkPrice = 30;
const eggsPrice = 28;
const orangesPrice = 56;
const bananasPrice = 38;
const applesPrice = 98;

const totalPrice = function (prod1, prod2, prod3, prod4, prod5) {
  return console.log(prod1 + prod2 + prod3 + prod4 + prod5);
};
totalPrice(breadPrice + milkPrice + eggsPrice + orangesPrice + bananasPrice);

const sum = function (count = 1, price = 1) {
  return console.log(count * price);
};
sum(2, 4);
sum(2, breadPrice);

// alert();

// const answer = confirm("Do u want to learn JS?");
// console.log(answer);

// const data = prompt("Write your age");
// console.log(data);
