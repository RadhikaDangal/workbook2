"use strict"
// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

var a = " 101.1";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";


var aAsInteger = parseInt(a);
console.log("parseInt on a: " + aAsInteger);

var floatA = parseFloat(a);
console.log(floatA);

var numberA = Number(a);
console.log(numberA);

var unaryA = +a;
console.log(unaryA);

// b section

var aBsInteger = parseInt(b);
console.log("parseInt on b: " + aBsInteger);

var floatB = parseFloat(b);
console.log(floatB);

var numberB = Number(b);
console.log(numberB);

var unaryB = +b;
console.log(unaryB);







