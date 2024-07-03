//Increment ++
//Decrement --
let a = 10;
let b = a++;
let c = 10;
let d = ++c;
console.log(a, "a"); //11
console.log(b, "b"); //10
console.log(d, "c"); //11

console.log(0 == '', 0 === "", "zero with empty string");
console.log(9 == [9], 9 === [9][0], "number with array"); // 9 === [9] is false


console.log(9 === [8, 9][1], "hello"); //index one in before array [arrayName][index]),

const arrayFalsy = [null, NaN, undefined, "", false]
const filters = arrayFalsy.filter((item) => { !(!!(item)) })
