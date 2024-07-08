// قسمت‌هایی از برنامه گفته میشه که یک متغیر، تابع، آبجکت و ... قابل دسترسی هست =  scope 

//Prototype
const person = {
    name: "Mario"
}
console.log(person.toString());

//زنجیره‌ی پروتوتایپ 
const parent = {
    name: "Mario"
}

const child = Object.create(parent);

console.log(child); // {}
console.log(child.name); // Mario
parent.name = 'Becker';
console.log(child.name); // Becker

console.log(parent.hasOwnProperty('lastname')); // true
console.log(child.hasOwnProperty('lastname')); // false
console.log(parent.hasOwnProperty('toString'), " toString hasOwnProperty parent"); // false
console.log('toString' in parent, "toString in parent"); //true



//Closure
// کلوژر تابعی هست که توی یک تابع دیگه تعریف و return میشه
function makeCounter() {
    let counter = 0;
    return function () {
        return ++counter;
    }
}

const clicked = makeCounter();
console.log(clicked()); // 1
console.log(clicked()); // 2

const dblClicked = makeCounter();
console.log(dblClicked()); // 1
console.log(dblClicked()); // 2


function greeting(type) {
    return function (user) {
        console.log(`${type} ${user}! This is our application.`);
    }
}

const welcome = greeting('Welcome');
welcome('Mario'); // Welcome Mario! This is our application.
welcome('Emily'); // Welcome Emily! This is our application.

const hello = greeting('Hello');
hello('Mario'); // Hello Mario! This is our application.
hello('Emily'); // Hello Emily! This is our application.


//   Strict Mode  کدهای بهینه‌تر و سریع‌تری
function f() {
    // "use strict"; WHEN ACTIVE THIS 
    NaN = 8; // TypeError: "NaN" is read-only
    x = 8
    return (NaN)
}
console.log(f(), "f");

eval("let x = 10; console.log(x)");

function f() {
    "use strict";
    function liskov() {
        return this;
    }
    console.log(liskov()); // undefined but without use strict is window
}
f();

//Constructor Functions is old version create class
//کلاس، یک طرح و نقشه از پیش تعریف‌شده هست برای آبجکت‌هایی که می‌خوایم بسازیم.
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.talk = function () {
        return `${this.name} is talking`;
    };

    this.sleep = function () {
        return `${this.name} is trying to sleep`;
    }
}

const mario = new Person('Mario', 4);
console.log(mario.talk());  // Mario is talking
console.log(mario.sleep()); // Mario is trying to sleep

const emily = new Person('Emily', 6);
console.log(emily.talk());  // Emily is talking
console.log(emily.sleep()); // Emily is trying to sleep

//this  =>type of this is object
//در تابع معمولی به آبجکتی اشاره میکنه که داره اون تابع رو اجرا میکنه
//در ارو فانکشن به صاحب یا اسکوپی اشاره میکنه که که ارو فانکشن توش تعریف شده بدون در نظر گرفتن اینکه تابع به چه صورت استفاده و یا فراخوانی میشه



//Getter and Setter

//dont use const => full_name = person.first_name + ' ' + person.last_name;
// dont use  => person.first_name = "Jakub";

const personData = {
    first_name: 'John',
    last_name: 'Doe',
    get full_name() {
        return this.first_name + ' ' + this.last_name;
    },

    set full_name(value) {
        if (value) {
            [this.first_name, this.last_name] = value.split(' ');
        } else {
            alert("Fullname can't be empty");
        }
    },
};
personData.full_name = "mahsa malmir"

console.log(personData.full_name); // Jakub Blaszczykowski

const person2 = {}

Object.defineProperty(person2, 'full_name', {
    set(value) {
        [this.first_name, this.last_name] = value.split(' ');
    },
    get() {
        return `${this.first_name} ${this.last_name}`;
    }
});

person.full_name = "John Doe";
