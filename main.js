console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000 + 0); // 100000
console.log(100001 - 1); // 100000
console.log(100000 / 1); // 100000
console.log(10000 * 10); // 100000
console.log(100000 ** 1); // 100000
console.log(100000 * 1); // 100000
console.log(1000000 / 10); // 100000
console.log(100000 % 10000000); // 100000
console.log(10 * 10 * 10 * 10 * 10);

console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER - 9007199254740975); // 16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2)));; // 100.57

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(parseFloat(flt.toFixed(0))); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
