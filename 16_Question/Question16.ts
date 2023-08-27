/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

// existing guest list
let guestList = ["William Shakespeare", "J.K.Rowling", "Charles Dickens", "George Orwell", "Emily Bronte"];
console.log("Good News! We found a bigger dinner table. ");

// add a new guest to the beginning of array
guestList.unshift("Albert Einstein");

// add a new guest to the middle of array
guestList.splice(3,0, "Pythagoras");

// add a new guest to the end of array
guestList.push("Aristotle");

// print a new set of invitation
    for (let i = 0; i < guestList.length; i++) {

        console.log(guestList[i]);
        
    }

