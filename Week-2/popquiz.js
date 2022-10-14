let isTrue = false;

while ( !isTrue ) {
    for ( let i = 1; i < 100; i+=2 ) {
        if ( i % 3 == 0 && i % 15 == 0 ) {
            console.log("We are out of the loop and i is equal to: " + i);
            break;
        } else if ( i % 2 || i % 5 ) {
            console.log(i + " is divisible evenly by either 2 or 5");
        } else {
            console.log("Nothing to see to see here...")
        }
    }
    isTrue = true;
}