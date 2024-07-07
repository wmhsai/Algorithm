const user = {
    name: 'Emily',
    lastname: 'Emilyee',
    age: 4,
}

for (const prop in user) { //for of is better
    console.log(prop + ":" + user[prop]);
}

const alpha = ["a", "b", "c"];

alpha.forEach((item, index) => {
    console.log(item, index);
});
alpha.push('d'); //use d in index n-1 
alpha.unshift('d'); //use d in index 0

console.log(typeof alpha); // object

console.log(Array.isArray(alpha), "isArray Alpha?"); // true
console.log(Array.isArray({}), "Is Array {} ?")     // false

//2D Array 

const binaries = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let i = 0; i < binaries.length; i++) {
    for (let j = 0; j < binaries[i].length; j++) {
        console.log(i,j ,"IJ");
        console.log(binaries[i][j] ,"Value IJ");
    }
}

//error handling =>
    // 1) Syntax Error is the first level =>  Parse-time
    // 2)  Runtime or Exception =>  Runtime

//use try...catch

try {
    const user = null;
    user.getName();
  } catch (error) {
    console.log(error.name ,"name");    // TypeError
    console.log(error.message ,"message"); // user is null
  }
  finally {
    console.log("I'm executed anyway!");
  }