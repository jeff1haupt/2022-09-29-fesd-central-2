try {
    const addition = 10;
    addition += 20;
    console.log(addition);
} catch (error) {
    console.log(`Something went wrong, check out the error: ${error}`);
} finally {
    console.log('The try-catch is finished.')
}

console.log("Hey, I am still being seen by the program.")

