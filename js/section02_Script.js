'use strict';
// ====================== 032 Use Strict

// For picking up errors
// Helps in reserving keyword. ex const testWord = 'hmmm';

let dUI = false;
const passTest = true;
if (passTest === true) {
    dUI = true;
}
// OR
// if (passTest) dUI = true;

// if (dUI) console.log('i am sober enough to drive home fine');

// Reserve Words
// const reservedWord = 'reserved';





// ====================== 033 Functions
// Variable: holds values
// Function: line(s) of code that can be reused multiple times.
// To use a function you run/call/involke the function.

let testColor;

function testValue() {
    console.log(`The testColor value is ${testColor}.`)
}

testValue();

testColor = 'red';
testValue();

testColor = 'blue';
testValue();

// Functions can also accept, process and return data
// Functions accept "Parameters"; variables specific to functions; Defined when the function is called.; Think of them as inputs.

function fruitProcessor(fTyp1name, fTyp1no, fTyp2name, fTyp2no, fTyp3name, fTyp3no) {

    const fruitData = `
    \nlist of fruits:
    \n${fTyp1name} juice made with ${fTyp1no} number of ${fTyp1name} fruits.
    \n${fTyp2name} juice made with ${fTyp2no} number of ${fTyp2name} fruits.
    \n${fTyp3name} juice made with ${fTyp3no} number of ${fTyp3name} fruits.`;

    return fruitData;
}

// To use the value that was returned store it in a variable.
const processedFruitData = fruitProcessor('apple', 10, 'orange', 8, 'grape', 17);
console.log(processedFruitData);

// You can logged the returned value directly to the console without capture.
console.log(fruitProcessor('Lemon', 7, 'Pear', 13, 'Mango', 11));

// Note: Console.log() is a built-in function.




// ====================== 034 Function Declarations vs. Expressions

// Function Declarations are like the previous examples because we use the "function" keyword to declare them.
// Main practical difference is the "Declared ones" can be "called" first before being defined later.

// #Function Declaration

const ageAns = calcAge(1998);

function calcAge(birthYear) {
    return 2024 - birthYear;
}

const ageAns2 = calcAge(1988);
console.log(`My age is ${ageAns}.`)
console.log(`My age is ${ageAns2}.`)

// Note: in a function the "Argument" is the (actual) value used to fill the parameter which is actually a placeholder.


// #Function Expression
// You write the function without a name and store it in a variable.
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

// Note: This is also called an "anonymous function" and remeber exper. produce values and here we store in in the calcAge2 variable.

const ageAns3 = calcAge2(1988);
console.log(ageAns3);


// ====================== 035 Arrow Functions
// A special (form/way) of writing functions expression faster. 
// Examples
// #Function Expression
// You write the function without a name, stored in a variable.
// Function Expression
const calcAge3 = function (birthYear) {
    return 2024 - birthYear;
}

// Arrow Function
const calcAge4 = birthYear => 2024 - birthYear;
console.log(calcAge4(1997));

// More than one line of code
const retirementYears = birthYear => {
    const age = 2024 - birthYear;
    const rYrsLeft = 65 - age;
    return rYrsLeft;
}
console.log(retirementYears(1990));

// More than one parameter
const retAgeLeft = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const rYrsLeft = 65 - age;
    return `${firstName} has ${rYrsLeft} years left in the workforce.`;
}
console.log(retAgeLeft(1998, 'Armstrong'));
console.log(retAgeLeft(1990, 'John'));

// ====================== 036 Functions Calling Other Functions

function chipCutter(product) {
    return product * 12;
}

function chipPackager(chips) {
    return chips * 0.1;
}


function chipProcessor(plantainNum, potatoNum) {
    const plantainSlices = 0.5 * chipCutter(plantainNum);
    const potatoSlices = 0.7 * chipCutter(potatoNum);

    const plantainBox = Math.ceil(chipPackager(plantainSlices));
    const potatoBox = Math.ceil(chipPackager(potatoSlices));

    console.log(`The number of  Plantain boxes are ${plantainBox} and the number of potato boxes are ${potatoBox}`);
}

chipProcessor(50, 100);



// ============== 038 Coding Challenge

// function calcAvg(data1, data2, data3) {
//     return ((data1 + data2 + data3) / 3)
// }

const calcAvg = (a, b, c) => (a + b + c) / 3;

function checkWinner(dolphinData, koalaData) {
    if (dolphinData >= koalaData * 2) {
        return `The Dolphins won 🏆 by an average of ${dolphinData}. `;
    } else if (koalaData >= dolphinData * 2) {
        return `The Koalas won 🏆 by an average of ${koalaData}. `;
    } else {
        return `It was a draw ⛔.`;
    }
}


let dolphinAvg = calcAvg(44, 23, 71);
let koalaAvg = calcAvg(65, 54, 49);

function gymFunc(dolphinAvg, koalaAvg) {

    const ans = checkWinner(dolphinAvg, koalaAvg);
    return ans;
}

console.log(gymFunc(dolphinAvg, koalaAvg));

// Test 2
dolphinAvg = calcAvg(85, 54, 41);
koalaAvg = calcAvg(23, 34, 27);
console.log(gymFunc(dolphinAvg, koalaAvg));

// Test 3
dolphinAvg = calcAvg(25, 31, 30);
koalaAvg = calcAvg(60, 63, 67);
console.log(gymFunc(dolphinAvg, koalaAvg));




// ============== 039 Introduction to Arrays
// These are data structures. Think of an array as a data container.
// Types of data structures. Arrays("[]") and objects.

const item1 = 'Sardine';
const item2 = 'Bread';
const item3 = 'Butter';

// Array
const items = ['Sardine', 'Bread', 'Butter'];
console.log(items);

// Array Function
const packageIds = new Array(1081, 3092, 2659, 1209);
console.log(packageIds);

// Getting Values
console.log(packageIds[2]);
console.log(items[1]);

// No. of Elements
console.log(`The number of elements in the package array is ${packageIds.length}`);
console.log(`The number of elements in the item array is ${items.length}`);

// Get the index(value) of the last element in the array.
console.log(`The value of elements in the item array is ${items[items.length - 1]} with an id of ${items.length - 1}`);

// Update (Add) element to the array
items[0] = 'Mackerel';
console.log(items)
console.log(items[0])

// Note: Only primitive values are immutable and arrays are not primitive thus we can mutate/update their value in the "const" variable. But we cannot replace the entire array.

const firstName = 'Kelvin';
const lastName = 'Claude';
const favColors = new Array('red', 'blue', 'yellow');
const age = 2024 - 1997;
const favFood = ['Fried Riced', 'Pancakes', 'Ogbono Soup & Eba'];

// Note: arrays can accept other arrays

const personData = [firstName, lastName, age, favColors, favFood];
console.log(personData);
console.log(personData.length);

// Targeting specific data within arrays within arrays
console.log(personData[4]);
console.log(personData[4][1]);
console.log(personData[4].length);

// Exercise
// Function to calculate retirement age
const calcRet = function (birthYear) {
    return 65 - (2024 - birthYear);
}

const birthYears = [1998, 1991, 1983, 2001, 1987];

// Calculate retirement ages
const person1 = calcRet(birthYears[0]);
const person2 = calcRet(birthYears[1]);
const person3 = calcRet(birthYears[2]);
const person4 = calcRet(birthYears[3]);
const person5 = calcRet(birthYears[4]);

console.log(person1, person2, person3, person4, person5);

// Note: We can place function calls into an array because they are expressions that would produce values.
const retirementAges = [calcRet(birthYears[0]), calcRet(birthYears[1]), calcRet(birthYears[2]), calcRet(birthYears[3]), calcRet(birthYears[4])]

console.log(retirementAges);
console.log(`The retirement ages for the privided individuals are ${retirementAges}`);


// ====================== 040 Basic Array Operations (Methods)

// Adding things to the end an array
const storeItems = ['Sugar', 'Bread', 'Veg. Oil', 'Salt'];
console.log(storeItems);
storeItems.push('Pepper', 'Spoons');
console.log(storeItems);

// To view the new array length stored in a variable
const itemsLength = storeItems.push('Knives');
console.log(itemsLength);

// Adding things to the start of an array
storeItems.unshift('Dry Onion', 'Tumeric');
console.log(storeItems);

// Removing things from the end of an array & storing 
const poppedItem = storeItems.pop();
console.log(storeItems);

// To view stored popped items
console.log(poppedItem);

// Removing things from the start of an array & storing items
const shiftedItem = storeItems.shift();
console.log(storeItems);

// To view stored shifted items
console.log(shiftedItem);

// To view index no. of elements
console.log(storeItems.indexOf('Tumeric'));
console.log(storeItems.indexOf('Veg. Oil'));
console.log(storeItems.indexOf('Bread'));
console.log(storeItems.indexOf('Breads'));

// To check if an element is in an array ("===")
console.log(storeItems.includes('Bread'));
console.log(storeItems.includes('Breads'));

// Using this in a statement

// const storeItem = 'Bread';
const storeItem = 'Sardine';

if (storeItems.includes(storeItem)) {
    console.log(`The store has ${storeItem}.`);
} else {
    console.log(`The store has no ${storeItem}.`);
}

// Documentation
// Other method for removing elements from your array.

// Array Methods
// 1. Basic Operations:

// push(): Adds elements to the end of an array.
// pop(): Removes the last element from an array and returns it.
// shift(): Removes the first element from an array and returns it.
// unshift(): Adds elements to the beginning of an array.   
// concat(): Creates a new array by concatenating existing arrays.
// join(): Joins elements of an array into a string, separated by a specified separator.
// slice(): Creates a new array by extracting a portion of an existing array.
// splice(): Adds/removes elements from an array at a specified index.
// reverse(): Reverses the order of elements in an array.
// 2. Iteration and Manipulation:

// forEach(): Executes a function for each element in an array.
// map(): Creates a new array by applying a function to each element.
// filter(): Creates a new array containing elements that pass a test.
// reduce(): Applies a function to an accumulator and each element to reduce it to a single value.
// find(): Returns the first element that passes a test.
// findIndex(): Returns the index of the first element that passes a test.
// some(): Checks if at least one element in an array passes a test.
// every(): Checks if all elements in an array pass a test.

// sort(): Sorts elements in an array in place.
// indexOf(): Returns the index of the first occurrence of an element.
// lastIndexOf(): Returns the index of the last occurrence of an element.
// includes(): Checks if an array includes a certain element.
// 4. Other Methods:

// toString(): Converts an array to a string.
// toLocaleString(): Converts an array to a string, using locale-specific formatting.
// entries(): Returns an iterator for key-value pairs of the array.
// keys(): Returns an iterator for the keys of the array.
// values(): Returns an iterator for the values of the array.
// Array Properties
// length: The number of elements in the array.


// ======== 041 Coding Challenge #2
// Tip Calculator

const bills = [125, 555, 44];
console.log(bills);

const tipCalc = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
console.log(tips);

const totalBills = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totalBills);

console.log(`The first bill is ${bills[0]}, the tip is ${tips[0]} and the total value is ${totalBills[0]}.`);
console.log(`The second bill is ${bills[1]}, the tip is ${tips[1]} and the total value is ${totalBills[1]}.`);
console.log(`The third bill is ${bills[2]}, the tip is ${tips[2]} and the total value is ${totalBills[2]}.`);
console.log(`The total bill is ${bills[0] + bills[1] + bills[2]}, the total tip is ${tips[0] + tips[1] + tips[2]} and the sum total value is ${totalBills[0] + totalBills[1] + totalBills[2]}.`);

// Note: you cannot do operations on arrays.

// ======== 042 Introduction to Objects
// This is a data structure defined with key value pairs.
// It uses curly braces{} instead of parenthesis[] like the array.

// kitchenItems

// array
const kitchenItemsArray = [
    'Gino',
    'Master Chef',
    'Knorr',
    'Power Oil',
    ['spoons', 'knives', 'forks', 'pot']
];

console.log(kitchenItemsArray);

//  Object
const kitchenItems = {
    tomatoPaste: 'Gino',
    salt: 'Master Chef',
    maggi: 'Knorr',
    oil: 'Power Oil',
    cutleries: ['spoons', 'knives', 'forks', 'pot']
};

console.log(kitchenItems);

// ======== 043 Dot vs. Bracket Notation

// Notes: Each key is called a property. Like an array, objects is used to group together value/variables that belong together.
// Notes: When trying to retrieve element in objects, the order doesn't matter like it does in an array.
// Therefore use array for more structured/ordered data.

// To retrieve properties
// Dot Notation
console.log(kitchenItems.cutleries);
console.log(kitchenItems.maggi);

// Bracket Notation
console.log(kitchenItems['cutleries']);
console.log(kitchenItems['oil']);

// Note: the bracket notation can accept expressions values and operator

const thomas = {
    firstName: 'Thomas',
    lastName: 'Timothy',
    middleName: 'Terry',
    job: 'Consultant',
    age: 2024 - 1996,
    friends: ['James', 'Joy', 'Jacob']
};

const nameKey = 'Name';
console.log(thomas['first' + nameKey]);
console.log(thomas['last' + nameKey]);
console.log(thomas['middle' + nameKey]);

// const interestedIn = prompt('What do you want to know more about Thomas ? firstName, lastName, middleName, job, age or friends');


// if (thomas[interestedIn]) {
//     alert(`Here is the answer: ${thomas[interestedIn]}`);
// } else {
//     alert(`There is no information on : ${interestedIn}.`);
// }

// To add properties
// Dot Notation
thomas.address = 'Ondo,  Nigeria';

// Bracket Notation
thomas['favColor'] = 'Red';

console.log(thomas);

// Dot Notation
thomas.favMeals = ['Rice', 'Beans', 'Yam'];

// Bracket Notation
thomas['favMovies'] = ['Shrek', 'Lion King', 'Ben 10'];
console.log(thomas);

// Challenge
console.log(`"${thomas.firstName}" has "${thomas.friends.length}" friends, their names are "${thomas.friends}". His bestfriend is called "${thomas.friends[0]}".`);


// ======== 044 Object Methods
// A function can be classified as another value and since objects can hold values, functions can be added to objects.

const james = {
    firstName: 'James',
    lastName: 'Tony',
    middleName: 'Tom',
    job: 'Teacher',
    birthYear: 1993,
    friends: ['Jenny', 'Tiffany', 'Micheal'],
    hasDriversLicense: true,
    jamesFeatures: {
        height: '5,5 ft',
        complexion: 'Dark Skinned',
        gender: 'Male'
    },

    // #1
    // The function exp. is being held in a property instead of a variable. A declared function would not work. 
    // You call it a "method", this is any function attached to an object.
    // age: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // #2
    // solveAge: function () {
    //     // The "this" keyword/variable is equal to the object(james) calling the method(age).
    //     // "this === james"
    //     console.log(this);
    //     return 2024 - this.birthYear;
    // }

    // #3
    // Instead of having to compute for age each time its called, you can do it once and store this as a property
    solveAge: function () {
        // "Equivalent": james.age = 2024 - this.birthYear;
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // Drivers License
    // Make sure to call/access it as a function
    licenseCheck: function () {
        if (this.hasDriversLicense) {
            return 'a';
        } else {
            return 'no';
        }
    },
    getSummary: function () {
        return `${james.firstName} is a ${james.age}-year old ${james.job.toLowerCase()}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

// console.log(james.age(1993));
// console.log(james['age'](1993));

console.log(james['solveAge']());

// Accessing Objects within Objects
console.log(james.jamesFeatures.complexion);
console.log(james['jamesFeatures']['gender']);

// This fubnction call makes it compute each time it's called.
// console.log(james['solveAge']());
// console.log(james['solveAge']());

// This oly request the age property; after the first computation that can then be referenced going forward
console.log(james.age);
console.log(james.age);

// Challenge
console.log(`${james.firstName} is a ${james.age}-year old ${james.job.toLowerCase()}, and he has ${james.licenseCheck()} driver's license`);

console.log(james.getSummary());



// ======== 045 Coding Challenge #3

// Your tasks:
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.


// Solution

const mark1 = {
    fulName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = parseFloat((this.mass / this.height ** 2).toFixed(2));
        return this.bmi;
    }
};

const john1 = {
    fulName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = parseFloat((this.mass / this.height ** 2).toFixed(2));
        return this.bmi;
    }
};

const mark2 = {
    fulName: 'Mark Miller',
    mass: 95,
    height: 1.88,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john2 = {
    fulName: 'John Smith',
    mass: 85,
    height: 1.76,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


console.log(john1.calcBMI());
console.log(mark1.calcBMI());

const bmiComparison1 = function () {
    if (john1.bmi > mark1.bmi) {
        return `${john1.fulName}'s BMI (${john1.bmi}) is higher than ${mark1.fulName} (${mark1.bmi}) BMI`;
    } else {
        return `${mark1.fulName}'s BMI (${mark1.bmi}) is higher than ${john1.fulName}'s (${john1.bmi})BMI`;
    }
}

console.log(bmiComparison1());



// ======== 046 Iteration_ The for Loop

// The loops is a control structure similar to the if else statement. It is used to automate repetitive tasks.
// A for loop has 3 parts; A counter - A Condition - A Counter Increser

// The counter has an initial value, the coundtion executes/run the code/loop if the condition is true but stops when condition becomes false and the Counter gets incremented.

for (let rep = 1; rep <= 6; rep++) {
    console.log(`25kg Barbell Squats repitition ${rep} 🏋️`);
};




// ======== 047 Looping Arrays, Breaking and Continuing

const shopInventory = [
    'Bread',
    'Sugar',
    'Milk',
    'Cooking Oil',
    'Spices',
    ['Wheat Flour', 'SoyaBean Flour', 'Rice Flour'],
    'Beans'
];

const itemIndex = [];
const itemIndex2 = [];
const itemObj = {};
console.log(itemIndex);
console.log(itemIndex2);

console.log(shopInventory);
console.log(shopInventory.length);

for (let i = 0; i < shopInventory.length; i++) {
    console.log(`The item at index ${i} is ${shopInventory[i]}.`);

    // To fill a new array with this data
    itemIndex[i] = shopInventory[i];

    // Another way to fill a new array with this data
    // itemIndex.push(shopInventory[i]);

    // To fill a new sub-arrays with indexes
    itemIndex2[i] = [i, shopInventory[i]];

    // To fill a new objects with indexex
    itemObj[i] = shopInventory[i];
};

console.log(itemIndex);
console.log(itemIndex2);
console.log(itemObj);

const yearsData = [1991, 1987, 1994, 1998, 2001, 1996];
const agesData = [];

for (let i = 0; i < yearsData.length; i++) {
    agesData.push(2024 - yearsData[i]);
};

console.log(agesData);

// Continue and Break
// Continue: to skip/exit a (current) loop iteration
// Break: to end a loop program

const mockArray = [
    true,               // Boolean
    false,              // Boolean
    "Hello",            // String
    100,                // Number
    "World",            // String
    42,                 // Number
    "JavaScript",       // String
    true,               // Boolean
    false,              // Boolean
    3.14,               // Number (float)
    "Coding",           // String
    999,                // Number
    "Front-end",        // String
    false,              // Boolean
    250,                // Number
    true,               // Boolean
    "Backend",          // String
    8.5,                // Number
    "Boolean",          // String
    2001,               // Number
    false,              // Boolean
    128,                // Number
    "Array",            // String
    "Numbers",          // String
    true,               // Boolean
    512,                // Number
    "Strings",          // String
    false,              // Boolean
    "Mix",              // String
    7                   // Number
];

console.log(mockArray);

// Continue 
const mockArrayNum = [];
const mockArrayStr = [];
const mockArrayBoo = [];

for (let i = 0; i < mockArray.length; i++) {
    if (typeof mockArray[i] !== 'number') continue;
    mockArrayNum.push(mockArray[i]);
};


for (let i = 0; i < mockArray.length; i++) {
    if (typeof mockArray[i] !== 'string') continue;
    mockArrayStr.push(mockArray[i]);
};


for (let i = 0; i < mockArray.length; i++) {
    if (typeof mockArray[i] !== 'boolean') continue;
    mockArrayBoo.push(mockArray[i]);
};

// ============ OR ============== 
// for (let i = 0; i < mockArray.length; i++) {
//     if (typeof mockArray[i] == 'number') {
//         mockArrayNum.push(mockArray[i]);
//     } else if (typeof mockArray[i] == 'string') {
//         mockArrayStr.push(mockArray[i]);
//     } else if (typeof mockArray[i] == 'boolean') {
//         mockArrayBoo.push(mockArray[i]);
//     }

// };


// Logs
console.log(mockArrayNum);
console.log(mockArrayStr);
console.log(mockArrayBoo);

// Break
const mockArrBreak = [];

for (let i = 0; i < mockArray.length; i++) {
    // It will stop the loop as soon as it encounters a number.
    if (typeof mockArray[i] === 'number') break;
    mockArrBreak.push(mockArray[i]);
};
console.log(mockArrBreak);




// ======== 048 Looping Backwards and Loops in Loops
// Looping Backwards
const bckWrdLoop = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth'
];

for (let i = bckWrdLoop.length - 1; i >= 0; i--) {
    console.log(i, bckWrdLoop[i]);
}

const wed = [
    'Bride',
    'Groom',
    'Guest'
];

// #1 Loops in Loops + array
for (let takePhoto = 1; takePhoto <= 3; takePhoto++) {
    console.log(`---Taking Photo ${takePhoto}: ${wed[takePhoto - 1]}---`);

    for (let photoTaken = 1; photoTaken <= 2; photoTaken++) {
        console.log(`number photos ${photoTaken}`);
    };

}

// #2 Loops in Loops
for (let exercise = 1; exercise < 5; exercise++) {
    console.log(`---Starting Set ${exercise}---`);

    for (let squatReps = 1; squatReps < 3; squatReps++) {

        if (exercise === 2) {
            console.log('A continue Statement skips this set of squats');
        }

        if (exercise === 2) continue;
        console.log(`Squat Rep ${squatReps}`);
    };

    for (let pushUpsReps = 1; pushUpsReps < 5; pushUpsReps++) {
        if (exercise === 4) {
            console.log('A Break Statement end this set of push ups.');
        }

        if (exercise === 4) break;
        console.log(`Push Ups Rep ${pushUpsReps}`);
    };

}




// ============== 049 The while Loop
// While Loop: has only a condition; It only runs while said condition is true. 
// The other two component {Repition & Counter} are defined explicitly outside the while loop.

let orange = 1;
while (orange <= 5) {
    console.log(`Peel Orange number ${orange}.`);
    orange++;
};

// While loops are more versatile in use cases depending on what you want. The important thing is the condition stays true for it to keep reading so a counter isn't always needed.

let numOfDiceRolls = 1;
let dice = Math.random() * 6;
let roundedDice = Math.round(dice);
if (roundedDice === 0) {
    // To get a dice roll btw 1 and 6
    roundedDice = 1;
};

console.log("Random decimal value: ", dice);
console.log("Rounded dice roll: ", roundedDice);


if (roundedDice === 6) {
    console.log(`You rolled a Lucky 6 at the beginning 👍`)
}

while (roundedDice !== 6) {
    console.log('roll again!');

    // simulate another roll
    dice = Math.random() * 6;
    roundedDice = Math.round(dice);

    if (roundedDice === 0) {
        // To get a dice roll btw 1 and 6
        roundedDice = 1;
    };

    // Counter for number of dice rolls
    numOfDiceRolls++

    console.log("Rolled dice: ", roundedDice);
};

console.log("You have a total dice rolls of ", numOfDiceRolls);




// ============== 050 Coding Challenge #4

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

// Bills Array
const nBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const nTips = [];
const nTotals = [];


for (let i = 1; i <= nBills.length; i++) {

    // Function to calculate tips from Bills array
    const nTipCalc = function (bill) {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    };


    // The bill is passed to a called function and the returned tip value stored
    const tip = nTipCalc(nBills[i - 1]);
    // The calculated tips are pushed into a Tips array
    nTips.push(tip);

    // The tip & bill is calc. and stored to the total variable
    const total = (nBills[i - 1] + tip);
    // The total value is pushed to the Total array
    nTotals.push(total);
}

console.log("Tips Array", nTips);
console.log("Totals Array", nTotals);

// Calculating the averages

let billTotal = 0;
let billAvg = 0;

let tipTotal = 0;
let tipAvg = 0;

let balTotal = 0;
let totalAvg = 0;

for (let i = 1; i <= nBills.length; i++) {

    // adds up the array value
    const calcAvgNum = function (bill, tip, total) {
        billTotal = billTotal + bill;
        tipTotal = tipTotal + tip;
        balTotal = balTotal + total;
    };

    // Passes each array value of Bills, Tips & Totals to the function
    calcAvgNum(nBills[i - 1], nTips[i - 1], nTotals[i - 1]);

    if (i === nBills.length) {

        // Calc bill avg
        billAvg = (billTotal / i);
        console.log("Bill Average = " + billAvg);

        // Calc tip avg
        tipAvg = (tipTotal / i);
        console.log("Tip Average = " + tipAvg);

        // Calc total avg
        totalAvg = (balTotal / i);
        console.log("Total Average = " + totalAvg);
    };

};

// ============= OR

const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip2 = [];
const total2 = [];

for (let i = 0; i < bill2.length; i++) {
    // "i" is already zero indexedx.
    const tip = calcTip2(bill2[i]);
    tip2.push(tip);
    total2.push(tip + bill2[i]);
};

console.log("Bill Array", bill2);
console.log("Tip Array", tip2);
console.log("Total Array", total2);

const calcAvg2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i]
    }
    return sum / arr.length;
};

console.log("Bill Average = " + calcAvg2(bill2));
console.log("Tip Average = " + calcAvg2(tip2));
console.log("Total Average = " + calcAvg2(total2));

console.log();



//  ============= 059 Using Google, StackOverflow and MDN

const tempArray = [-1, 3, 4, 0, -6, 'code'];
const tempArray2 = [-8, 3, 4, 0, 16, 'code', 9, -3];

const calcTempAmp = function (tempArr) {
    let max = tempArr[0];
    let min = tempArr[0];

    for (let i = 0; i < tempArr.length; i++) {
        const curTemp = tempArr[i];
        if (typeof curTemp !== 'number') continue;

        // Find Max
        if (curTemp > max) {
            max = curTemp;
        };

        // Find Min
        if (curTemp < min) {
            min = curTemp;
        }
    };
    console.log('The max value is', max);
    console.log('The min value is', min);

    return max - min;
};

calcTempAmp(tempArray);

const amp = calcTempAmp(tempArray);
const amp2 = calcTempAmp(tempArray2);
const amp3 = calcTempAmp([-4, 3, -8, 11, 10, 'error', 3, -7]);

console.log('The temperature amplitude1 is', amp);
console.log('The temperature amplitude2 is', amp2);
console.log('The temperature amplitude3 is', amp3);


// Merge two arrays
// Spread Operator (...): it allows you to merge arrays concisely and immutably by spreading their elements into a new array.

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

const alph1 = ['A', 'B', 'C', 'D'];
const alph2 = ['E', 'F', 'G', 'H'];

let alphMerge = [...alph1, ...alph2];
console.log(alphMerge);


// Exercise
let tempData = [-6, 3, 4, -10, 6, 'code'];
let tempData2 = [-8, 3, 4, 0, 19, 'code', 9, -3];

const calcTempAmp2 = function (arr1, arr2) {
    // Merge both inputed arrayData
    let tempDataMerged = [...arr1, ...arr2];

    // Declare Variables
    let max = tempDataMerged[0];
    let min = tempDataMerged[0];

    for (let i = 0; i < tempDataMerged.length; i++) {
        if (typeof tempDataMerged[i] !== 'number') continue;

        const currentTemp = tempDataMerged[i];

        // finding max
        if (currentTemp > max) {
            max = currentTemp;
        }

        // finding min
        if (currentTemp < min) {
            min = currentTemp;
        }

    };
    console.log('The max & min temp is', max, min);

    // Return Amplitude Data
    return max - min;

};

// calcTempAmp2(tempData, tempData2);


console.log('Next Test');
console.log('The temp. amp. is', calcTempAmp2(tempData, tempData2));


console.log('Next Test2');
const ampArrTest = calcTempAmp2([-8, 3, 4, 0, 14, 'code', 9, -13], [-11, 3, 4, 0, 24, 'error', 9, -8]);
console.log(ampArrTest);


// ============= 061 Debugging with the Console and Breakpoints
const celsiusValue = '10';

const measKevTemp = function () {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        // value: Number(prompt('Degree Celsius:')),
        value: Number(celsiusValue),
    };
    // debugger;
    // console.log(measurement);
    console.table(measurement);

    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measKevTemp());



// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// create a loop
// put the console log in it
// use i to control number arrays/days

const printForecast = function (arr) {
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        let temp = "";

        if (arr[i] <= 4) {
            temp = "cold";
        } else {
            temp = "hot";
        };
        console.log(`Its was ${arr[i]}ºC ${temp} in ${i + 1} days`);

        // "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
        str = str + `${arr[i]}ºC in ${i + 1} days ... `;
    }

    console.log('...', str);

};
console.log("--------Data 1--------");
printForecast([17, 21, 23]);

console.log("--------Data 2--------");
printForecast([12, 5, -5, 0, 4]);


