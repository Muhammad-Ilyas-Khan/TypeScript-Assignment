// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["William Shakespeare", "Jane Austen", "Charles Dickens", "George Orwell", "Emily Bronte"];
    for (let i = 0; i < guestList.length; i++) {
        let message = `Dear ${guestList[i]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for a wonderful evening of conversation and good food.`;

        console.log(message);
        
    }

