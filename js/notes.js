
// ================ Mine: For In Loops
// loops through an object and object array

// SYNTAX
// for (...'variable' in ...'object') {
// execute code here
// }


// const myObject = {
//   'objectProperty'(key): 'Object Value'(value)
// }

// for (let key in object) {
// execute code here
// }

// example of looping through an object
const posts = {
    'id': 1,
    'title': 'Post Title',
    'body': 'Post Body',
    'author': 'Johnny Depp'
};

var loopCount = 0;

for (let post in posts) {
    // post: named property/key

    loopCount = loopCount + 1;
    // console.log('Loop Count', loopCount);
    // console.log(post);
    // console.log( posts[post] );

    console.log('Loop Count:', loopCount, 'key:', post, 'value:', posts[post]);
}


// example of looping through an object array
const products = [
    { id: 101, name: "Laptop", price: 500 },
    { id: 102, name: "Headphones", price: 100 },
    { id: 103, name: "Smart Watch", price: 150 }
];

var loopCount = 0;
for (let product in products) {
    loopCount = loopCount + 1;

    console.log(`Loop Cycle: ${Number(loopCount)}. Product Id: ${products[product].id}, Product name: ${products[product].name}, Product Price${products[product].price}`);
}



// ================ Mine: For Of Loops
// Loops through an array

// SYNTAX
// for (...'element' of ...'iterable') {
// execute code here
// }

// element: Represents each value from the iterable object.
// iterable: The object being looped through (e.g., an array, string, map, or set).


// for (const element of iterable) {
// execute code here
// }

// example
const fruits = ["Apple", "Banana", "Cherry", "Coconut", "Kiwi"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Looping through a string

const nameTag = "Simpsons";

for (const letter of nameTag) {
    console.log(letter);
}






// ================ Mine: find()

// The .find() method in JavaScript is used to search for the first element in an array that meets a specified condition. It returns the first matching element or undefined if no match is found.

// Syntax: array.find(callback(element, index, array))

// ***** callback: A function that tests each element.
// ***** element: The current element being processed.
// ***** index (optional): The index of the current element.
// ***** array (optional): The original array.

const menus = [
    { id: 101, name: "Spaghetti", price: 220 },
    { id: 102, name: "Cherry buns", price: 75 },
    { id: 103, name: "Cake", price: 500 }
];

const selectedMenu = menus.find((menu) => menu.id === 101);

console.log(selectedMenu);
console.log(`The Selected dish is ${selectedMenu.name} with a price of ${selectedMenu.price}.`);