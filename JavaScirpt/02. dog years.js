const myAge = 25;
let earlyYears = 2; // the first two eyars of a dogs's life count as 10.5 dog years each
earlyYears *= 10.5;
let laterYears = myAge - 2; // subtract 2, cause already accounted for the first two years
laterYears *= 4; // multiply 4 to calculate the number of dog years accounted for by my later years

let myAgeInDogYears = (earlyYears, laterYears);
myName = 'MJ'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);