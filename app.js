"use strict";
console.log("Laba, cia app.js failas");

const { subtract, subtractTwo } = require("./pirmas");
const { divide, multiply } = require("./antras");

console.log(subtract(5, 1));
console.log(subtractTwo(5, 1, 2));
console.log(divide(5, 5));
console.log(multiply(5, 5));
