/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guesList = ["Albert Einstein", "William Shakespeare", "J.K.Rowling", "Pythagoras", "Charles Dickens", "George Orwell", " Emily Bronte", "Aristotle"];
    console.log("Oops! The new dinner table won't arrive in time, and we can only invite two guests now.");

    while (guesList.length > 2) {
        let removedGuests = guesList.pop();
        console.log(`Sorry ${removedGuests}, we can't invite you to dinner.`);
         
    }
// print invitation letter to the reamining 2 guests
    for ( let i = 0; i < guesList.length; i++) {
        console.log(`Hello ${guesList[i]}, you are still invited to the dinner.`);
        
    }
// remove the last two guests to make list empty
    guesList.pop();
    guesList.pop();

// print the empty list
        console.log("Guest list:", guesList);
        
    
    
    
      
         
   
