const kelvin = 300; // tody forecast
const celsius = kelvin - 273; // Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) + 32 // allows to change its value
fahrenheit = Math.floor(fahrenheit); // to avoid get a decimal number

console.log(`The temperate is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperate is ${kelvin} degrees Kelvin.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperate is ${newton} degrees Newton.`);