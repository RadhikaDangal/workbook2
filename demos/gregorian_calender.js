"use strict";
var year = 1904;

function isLeapYear(year) {
  var yaerIsDivisibleBy4 = year % 4 == 0;
  var yearIsAcentury = year % 100 != 0;
  var yaerIsDivisibleBy400 = year % 400 == 0;
  return yaerIsDivisibleBy4 && (yearIsAcentury || yaerIsDivisibleBy400);
}

if (isLeapYear(1904)) {
  console.log("You beautiful man! " + year + " is a leap year!");
} else {
  console.log("YOU LOSER!!! I can't believe you didn't know that " + year + " is NOT a leap year!");
}
