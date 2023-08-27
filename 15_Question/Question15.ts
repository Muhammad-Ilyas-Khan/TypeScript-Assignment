/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

// initial list of guests
let guestList = ["William Shakespeare", "Jane Austen", "Charles Dickens", "George Orwell", "Emily Bronte"];

// print the guest who can't make it
console.log(`${guestList[1]} can't make it to the dinner.`);

// replace the unavailable guest with a new guest
guestList[1] = 'J.K. Rowling';

// print new invitations
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]}, you are invited to a dinner. Please join us.`);
        
    }