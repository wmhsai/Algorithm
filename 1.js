const promise = new Promise((resolve, reject) => {
    reject(1)
})

promise.then((data) => {
    console.log("1" + data)
    throw 'error'
    // return 2
}).then((data) => {
    console.log("2", data)
}).catch(() => console.log("Error"))
    .finally(() => { console.log("finally"); })
console.log("hello");

console.log(1 / 0); // Infinity
console.log("Hello" / 2); // NaN

//strings
const message = "My name is \"Emily\".";
const message2 = "My Name Is \n\"Emily\"";
console.log(message);
console.log(message2);
console.log(message2.length);
console.log(message2.toUpperCase());
console.log(message2.toLocaleLowerCase());
console.log(message2[0]);
console.log(message2[message2.length - 1]);


console.log("booolean Status", 5 == "5");
console.log("booolean Status", 5 === "5");


const sym1 = Symbol('interest');
const sym2 = Symbol('interest');

const person = {
    [sym1]: "Walking",
    [sym2]: "Music",
}

console.log(person[sym1]); // Walking
console.log(person[sym2]); // Music

//bingInt 
const x = 1n;
// console.log("bingInt", 1n + 2); 
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
const y = 9007199254740991n + 1n;
console.log("bing int math", y);

console.log(typeof Infinity, "Infinity");

console.log(5 + "3", "\n5" - 2, "add and div");
console.log(5 + "3", 5 - "2", "add and div");


// *different null and undefiend*
console.log("falsy", !!null);
console.log("falsy", Boolean(undefined));

let und;
console.log(typeof und, "type of undefined");
let nul = null;
console.log(typeof nul, "type of null");
console.log(null == undefined, null === undefined, "conditios");
