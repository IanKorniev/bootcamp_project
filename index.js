"use strict";

let crslRoot = document.querySelector(".ant-carousel");
console.log(crslRoot);

let crslList = document.querySelector(".ant-carousel_list");
console.log(crslList);

let crslElements = document.querySelectorAll(".ant-carousel-element");
console.log(crslElements);

let crslElemFirst = document.querySelector(".ant-carousel-element");
console.log(crslElemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector(".ant-carousel-dots");
console.log(indicatorDots);

//hhhhhhhhhhhhhhhhhhhhhhhhhhhh

let elm;
console.log(elm); // undefined

elm = crslList.lastElementChild; // <li...
console.log(elm);

let buf;
console.log(buf); // undefined

buf = elm.cloneNode(true);
console.log(buf); // <li...

crslList.insertBefore(buf, crslList.firstElementChild);
crslList.removeChild(elm);

console.log(crslList);

// // dddddddddddddddddddddddddddddd

// 1
leftArrow.addEventListener("click", leftArrowClick);

function leftArrowClick() {
  alert("СРАБОТАЛ КЛИК НА ЛЕВОЙ СТРЕЛКЕ");
}

rightArrow.addEventListener("click", rightArrowClick);

function rightArrowClick() {
  alert("СРАБОТАЛ КЛИК НА ПРАВОЙ СТРЕЛКЕ");
}
