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
// function welcome() {
//     // ...
//   }

//arrow function dont have arguments replace on use Rest


while (true) {
  if (true) {
    break; //customize stop our loop
  }
}
let counter = 0;

// while (counter <= 100) {
//   counter++;
//   if (counter % 2 === 1) {
//     continue;  //ignore this condition
//   }
//   console.log(counter);
// }

do {
  counter++;
  console.log(counter, "do while counter****");
}
while (counter < 0);


while (counter < 0) {
  counter++;
  console.log(counter, "while counter****");
}

const user = {
  "first name": "Emily",
  name: "hello",
};

user["first name"];
user.name = "bye"
console.log(user.name, "name after assign");
delete user.name;
console.log(user.name, "name after delete");

//user.first name;  syntax error
//user.first-name;  error: name is not defined
//user.first.name;  error: user.first is undefined

// const input = prompt("Enter a property name:");
// alert(user[input]);

const x = { name: "John" }
const y = { name: "John" }

console.log(x === y, "check condition"); // false
//because of refrence in memory


const q = { name: "John" }
const z = q;
z.name = "Emily";
console.log(x.name); // Emily
console.log(z === q, "check condition"); //same refrnce

//property be a function = method
const userObj = {
  sayHello() {
    console.log("Hello");
  },
}
userObj.sayHello()

//this => access to property name outside of method
const user = {
  name: "Mario",
  getName() {
    return this.name;
  },
  welcome() {
    return this.getName();
  },
}

console.log(user.welcome()); 