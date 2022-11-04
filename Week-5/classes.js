// Classes are nothing more than a blueprint for an object

class StudentInfo { // class keyword
    constructor() { // constructor keyword
        this.studentFirstName = ""; // 'this' 
        this.studentLastName = "";
        this.studentHomeState = "";
    }
    getFullName() {
        return `${this.studentFirstName} ${this.studentLastName}`;
    }
}

const student1 = new StudentInfo();
student1.studentFirstName = "Hannah";
student1.studentLastName = "Hall";
student1.studentFirstName = "Hanna"
// console.log(student1);
// console.log(student1.getFullName());

const student2 = new StudentInfo();
student2.studentFirstName = "Kayla";
student2.studentLastName = "Barkley";
// console.log(student2.getFullName());

const student3 = {
    studentFirstName: "Thomas",
    studentLastName: "OConnor"
}

// console.log(student3);

// using the constructor to set values upon object instance creation
class Cars {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = "";
    }
}

const car1 = new Cars(2017, "Kia", "Optima");
const car2 = new Cars(2003, "Honda", "Civic");
const car3 = new Cars(1974, "Chevy", "Nova");
let carsArray = [];
carsArray.push(car1);
carsArray.push(car2);
carsArray.push(car3);
// console.log(carsArray);

// example with a deck of cards
class Card {
    constructor(value, description) {
        this.value = value;
        this.description = description;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    getHand (card) {
        this.hand.push(card);
    }
}

let deck = [];
const suits = ["spades", "hearts", "diamonds", "clubs"];

suits.forEach( ( suit )=> {
    for ( let i = 2; i <= 14; i++ ) {
        deck.push(new Card(i, `${i} of ${suit}`)); // this is creating a new instance of Card each time through the loop
    }
});

console.log(deck);

const p1 = new Player("Jeff");
p1.getHand(deck[10]); // this is grabbing a card object that we created above
p1.getHand(deck[50]); // same
p1.getHand(deck[4]); // same
p1.getHand(deck[27]);
p1.getHand(deck[41]);

console.log(p1);

// Get the name of the p1 - Player class instance : p1.hand[3] <-- grabbing the fourth card in my hand I built above
// the 4th card is nothing but an instance of the Card Class -> I have access to the Card.value and the Card.description
console.log(`${p1.name} is playing the ${p1.hand[3].description}`);




