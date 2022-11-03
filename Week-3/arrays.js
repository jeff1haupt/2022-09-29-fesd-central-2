let box = [5, 10, 15, 20, 25, 30, -1, 0, true, "Hi There"]; // declaring an empty array
    // box [ 0 slot , 1 slot, 2 slot]
let box1; // this also perfectly fine

// console.log(box[0]); // the first value in box
// console.log(box.length) // length tells us how many items are in the array
// console.log(box[6]); // always start at 0
// console.log(box[box.length - 1]); // tells the last value stored in the array

let boxLength = box.length; // equals the number of items in the array
// for ( let i = 0; i < boxLength; i++ ) {
//     console.log(`${i}: ${box[i]}`);
// }

let studentNames1 = ['Natalie', 'Arif', 'Lars'];
let studentNames2 = ['Kayla', 'Hannah', 'Brandon'];

// for (let i = 0; i < 3; i++) {
//     studentNames1.push(prompt("Enter student name: ")); // push enters them in at the last slot
// }

// for (let i = 0; i < 3; i++) {
//     studentNames2.unshift(prompt("Enter student name: ")); // unshift enters the new item at slot 0
// }



// console.log(studentNames1);


// let lastItem = studentNames1.pop();
// console.log(lastItem);
// console.log(studentNames1);


// console.log(studentNames2);
// let firstItem = studentNames2.shift();
// console.log(studentNames2);

// --------------------- Array Intermediate Funcitons ------------------------------

let cartPrices = [4.99, 5.99, 6.99];

// reduce method - doesn't change the original array

// let subTotal = cartPrices.reduce( function (previousValue, currentValue) {
//     console.log(`PreviousValue is ${previousValue} and CurrentValue is ${currentValue}`);
//     return previousValue + currentValue;
// },0) // 0 is the starting value - you don't have to have this for 0

// console.log(subTotal);

// map method - creates a new array

// let pricesWithTax = cartPrices.map( function ( price ) {
//     return `$${(price * 1.07).toFixed(2)}`;
// })

// console.log(cartPrices);
// console.log(pricesWithTax);

// filter method 

let studentNames = ["James", "Shakira", "Serenity", "Martin", "Kayla"];

let longerNames = studentNames.filter( function ( studentName ) {
    return studentName.length > 6;
});
console.log(longerNames);


