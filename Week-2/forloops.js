// For loops

// for ( initializer ; conditional ; incrementor ) {
//     ...do something while the loop is true
// }

// for ( let i = 1; i < 10; i++ ) { // i++ is the same as i = i + 1
//     // let i = 1 -- only runs once
//     // i < 10 is checked until it is false 
//     // after we execute the loop -- what's inside the curly braces runs we then run i++
//     console.log("The loop has run " + i + " time(s)");
// }


let randomWord = "Serenity";
for ( let i = 0; i < randomWord.length; i++ ) {
    if ( randomWord[i] == 'e' || randomWord[i] == 'i') {
        console.log(randomWord[i]);
    }
}

