// creating the function into memory:
// function ourFirstFunction() {
//     console.log("Hello everyone from our first function")
// } // also known as function definition

// // function calls are the way to tell the program you are ready to use the function
// ourFirstFunction();

// // -----------------

// // our second function definition

// function ourSecondFunction( studentName ) { // parameter = studentName
//     console.log("Hello, " + studentName + ", from our second function.");
// }

// // our second function call
// ourSecondFunction("Jerrica"); // "Jerrica" is an argument that is passed into the function
// ourSecondFunction("Martin");
// ourSecondFunction("Jamecia");

function shoppingCart( cartContents, customerInfo ) {
    // console.log(cartContents, customerInfo);
    let cartSubTotal = 0;
    for ( const item of cartContents ) {
        cartSubTotal += (item.itemPrice * item.itemQuanity);
    }
    return `${customerInfo}'s total is ${cartSubTotal}`;
}


// create objects
const item1 = { // use the curly braces 
    // key value pairs (property name: property value)
    itemName: "toothbrush",
    itemPrice: 6.99,
    itemQuanity: 2
}

const item2 = {
    itemName: "shampoo",
    itemPrice: 12.99,
    itemQuanity: 1
}

const item3 = {
    itemName: "conditioner",
    itemPrice: 13.99,
    itemQuanity: 1
}



// call shoppingCart
let customerMessage = shoppingCart([item1, item2, item3], "Lindsay Haupt");
console.log(customerMessage);


// console.log(item1); // tell us all about item1
// console.log(item2);
// console.log(item3);