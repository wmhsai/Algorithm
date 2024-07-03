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
const arrayTruthy = [{}, [], -1, { a: 2 }, 5]
const filters = arrayFalsy.filter((item) => { !(!!(item)) })


//first false back .. else last true back in && (AND)
const expr2 = "Hello" && 0;
const expr3 = true && "Hello";

console.log(expr2);
console.log(expr3);

//first true back .. else last false back in || (OR)

const ory = null || undefined || false || null
console.log("what is ", ory, "ory");

//clean code 
!true //!space
a || b; //space
b && c;

let R0 = 10
//++R0 => first
//2**3 =>second
let R = 5 + ++R0 + 5 * 2 ** 3 + 20 / 2 * 5 - (2 - 1);
console.log("OUT PUT R", R); // 5 + 11 + 5 * 8 +10 *5 -1  => 5 + 11 + 40 + 50 - 1 =>16+90 =>106 -1 = 105

function w() {
  console.log(arguments[0]); // a
  console.log(arguments[1]); // b
}
w("a", "b", "c");

//Function Expression => function without nazme to use a Variable
const welcome = function (name) {
    return `Welcome to our app, ` + name;
  };

  // Function Declaration
function welcome() {
    // ...
  }


  //arrow function dont have arguments replace on use Rest