// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// convert the name to uppercase and print it
let personName = "Muhammad ilyas khan";
console.log("Uppercase:", personName.toUpperCase());

// convert the name to lowercase and print it
console.log("Lowercase:", personName.toLowerCase());

// covert the name to titlecase and print it
function toTitleCase(input: string): string {
    const words = input.split(' ');
    const titleCaseWords = words.map (currentWord => {
        return currentWord.charAt(0).toUpperCase() + currentWord.slice(1).toLowerCase();
    })
        return titleCaseWords.join(' ');

    }
        console.log("Titlecase:", toTitleCase(personName));
        




