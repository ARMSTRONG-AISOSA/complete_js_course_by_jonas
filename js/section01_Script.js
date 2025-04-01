
// ======= 007 Hello World!
// ======= 010 Values and Variables

// console.log("test");

// let js = "boring";

// if (js === "boring") {
//     alert("This is not true");
// }

// let calc = 3+7;

// console.log(calc);




// ======== 008 A Brief Introduction to JavaScript

// PROGRAMMING LANGUAGE: A programming language is a tool (formal system of communication) used by humans to instruct computers to perform specific tasks.

// Types of Programming Languages:

// 1. Low-Level Languages:
// Machine Language: The most basic type of programming language, consisting of binary code that the computer's CPU can execute directly.
// Assembly Language: A step above machine language, using symbolic names for operations and memory addresses, making it more readable than binary.

// 2. High-Level Languages:
// These languages are closer to human languages and further from machine language. They are designed to be easy to read and write. Examples include Python, Java, C++, and JavaScript.

// WHAT IS JAVASCRIPT
// JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on the web.
// High level - Object Oriented  - Multiparadigm

// Key Features of JavaScript

// 1. Interpreted Language: JavaScript code is executed by web browsers directly without the need for prior compilation. This makes it a lightweight and efficient scripting language.

// 2. Event-Driven: JavaScript is often used to respond to user interactions such as clicks, form submissions, and mouse movements, enabling dynamic web page behaviors.

// 3. Object-Oriented: JavaScript supports object-oriented programming principles, allowing developers to create reusable and modular code using objects, classes (introduced in ES6), and inheritance.

// 4. Functional Programming: JavaScript supports first-class functions, meaning functions can be assigned to variables, passed as arguments, and returned from other functions. This enables functional programming techniques.

// 5. Prototype-Based Inheritance: Instead of classical inheritance (like in Java or C++), JavaScript uses prototypes. Objects can inherit properties and methods from other objects, promoting code reuse and flexibility.

// 6. Cross-Platform: JavaScript runs in virtually all modern web browsers, making it a cross-platform language. It can also be used on the server side with environments like Node.js.

// Common Uses of JavaScript

// 1. Web Development: Client-Side Scripting: JavaScript is widely used to create interactive web pages, handle user inputs, manipulate the DOM (Document Object Model), and control multimedia.

// 2. Server-Side Scripting: With Node.js, JavaScript can be used on the server to handle backend logic, manage databases, and handle HTTP requests and responses.

// 3. Mobile App Development: Frameworks like React Native allow developers to build cross-platform mobile applications using JavaScript.

//  4. Desktop Application Development: Tools like Electron enable the development of desktop applications using web technologies, including JavaScript.

// 5. Game Development: JavaScript, along with HTML5, is used to create browser-based games and interactive graphics using libraries like Phaser and Three.js.

// 6. APIs and Services: JavaScript is commonly used to interact with web APIs, fetch data from servers using AJAX or the Fetch API, and handle asynchronous operations with promises and async/await.

// Evolution of JavaScript

// ES5 (ECMAScript 5): Introduced in 2009, brought features like strict mode, JSON support, and new array methods.

// ES6 (ECMAScript 2015): Introduced major enhancements like classes, modules, arrow functions, template literals, promises, and more. This version greatly improved JavaScript’s capabilities and readability.

// Subsequent Versions (ES7, ES8, etc.): Continued to add new features and improvements, such as async/await, new array methods, and more.


// ======= 010 Values and Variables
// Value: a piece of data
// ex. 'Ben'

// Variable: store value
// ex. firstName

// let firstName = 'Ben';
// let luckyNumber = 4;

// console.log(firstName);
// console.log(luckyNumber);
// console.log(firstName+ ' '+luckyNumber);
// console.log('My name is '+firstName+'  and my lucky number is '+luckyNumber);

// Variables Naming Rules

// Allowed: underscore, dollar sign, letters and numbers
// Do not start with an uppercase letter.
// Uppercase is used for OOP
// Reserved js Keyword such as new and functions are not to be used
// Use full uppper case for constants that will never change like PI

// let new = 67;
// console.log(new);

// let $new = 67;
// console.log($new);

// let PI = 3.1415;
// console.log(PI);

// Assignment
// let continent = 'Africa';
// let country = 'Nigeria';
// let population = '220';

// console.log('My country '+country+' is on the continent of '+continent+' with a population of '+population+' million people.')


// ======== 026 The Switch Statement
// An alt. to "if else statement" for comparing 0ne value to multiple different options

// const weekDay = 'thursday';

// switch (weekDay) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid weekday!');
// }

// if (weekDay === "monday") {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (weekDay === "tuesday") {
//     console.log('Prepare theory videos');
// } else if (weekDay === "wednesday" || weekDay === "thursday") {
//     console.log('Write code examples');
// } else if (weekDay === "friday") {
//     console.log('Record videos');
// } else if (weekDay === "saturday" || weekDay === "sunday") {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid weekday!');
// }


// ======== 028 Ternary Operator
// age = 16;
// age = 18;
// age = 21;
// const voter = age >= 18 ? console.log('Old enough to vote 👍') : console.log('Too young to vote 👎');
// const drinker = age >= 21 ? console.log('Old enough to drink 🍺') : console.log('Too young to drink 🚫');

// const drinker1 = age >= 21 ? 'This Person is old enough to drink 🍺' : 'This Person is too young to drink 🚫';

// const voter1 = age >= 18 ? 'This Person is old enough to vote 👍' : 'This Person is too young to vote 👎';

// console.log(drinker1);
// console.log(voter1);

// const driver1 = age >= 18 ? 'old enough' : 'too young';

// console.log(`This Person is ${driver1} to drive.`);




// ======== 029 Coding Challenge 4
// Tip Calculator

// let bill = 275;
// let bill = 10;
// let bill = 430;
// const billFirst = bill; 
// const tip = bill > 50 && bill < 300 ? bill*0.15 : bill*0.2;

// const totalBill = billFirst + tip;

// console.log(`The bill is ${billFirst}, the tip is ${tip} and the total value is ${totalBill}.`);

