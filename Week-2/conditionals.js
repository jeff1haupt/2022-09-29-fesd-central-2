// What are conditionals?

// Should I mow the lawn? Yes or no 
// subconditions - is it raining? is it hot out? Do I have better things to do?
// Do I pack my lunch today? Yes or no

let gpa = 3.45;
let creditHours = 110;

let honorsGrad = gpa > 3.5;
let cumLaude = gpa > 3.5 && gpa < 3.7; // Because of the '&&' and both have to be TRUE for the whole thing to be true.
let graduate = gpa > 3.5 || creditHours >= 120; // Because of the '||' or only one has to be TRUE

// console.log(cumLaude);
// console.log(graduate);

// the 'if statement' 

// What is the if statement? evaluate whether a condition is true or false

// if ( condition ) {
//     ...what we do if it is TRUE
// }

// if ( true ) {
//     console.log('This was true');
// }

// let firstName = prompt("Enter your name: ");
// console.log(firstName);

// if ( firstName.length > 5 ) {
//     console.log('Hi, ' + firstName);
// }

// username example to check length and includes an exclamation point
// let username = prompt("Please enter a new username");

// if ( username.length >= 8 && username.includes('!') ) { // if this doesn't evaluate to TRUE then the else runs 
//     console.log(username + " is acceptable.");
// } else {
//     console.log("Username must be at least 8 characters and include '!");
// }

// if ( username.length >= 8 && username.includes('!') ) {
//     console.log(username + " is acceptable.");
// } else if ( !username.includes('!') && username.length >= 8 ) { //  ! -- false equals true and true equals false 
//     console.log("Your username must include '!'");
// } else {
//     console.log("Username must be at least 8 characters and include '!");
// }

// let grade = parseInt(prompt("Enter your number grade: ")); //parseInt will turn a string into an integer

// console.log(typeof grade);

// if ( grade >= 90 ) { // 87 evaluates to false
//     console.log('A');
// } else if ( grade >= 80 ) { //87 here evaluates to true
//     console.log('B');
// } else if ( grade >= 70 ) { //None of these and below run
//     console.log('C');
// } else if ( grade >= 60 ) {
//     console.log('D');
// } else {
//     console.log('F');
// }

// letterGrade = 'asdfjaskodf';

// switch (letterGrade) {
//   case "A":
//     console.log("grade is between 90 - 100");
//     break;
//   case "B":
//     console.log("grade is between 80 - 89");
//     break;
//   case "C":
//     console.log("grade is between 70 - 79");
//     break;
//   case "D":
//     console.log("grade is between 60 - 69");
//     break;
//   default: 
//     console.log("grade is below a 60%")
// }

salesTax = "NE";

switch ( salesTax ) {
    case "IN":
    case "KY": // if any are true, this will run
    case "OH":
        console.log("Sales tax is 7%");
        break;
    case "NE":
        console.log("Sales tax is 7.5%");
        break;
    default:
        console.log("Sales tax is 8%");
}