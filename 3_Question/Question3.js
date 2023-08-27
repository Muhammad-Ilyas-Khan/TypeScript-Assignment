// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// convert the name to uppercase and print it
var personName = "Muhammad ilyas khan";
console.log("Uppercase:", personName.toUpperCase());
// convert the name to lowercase and print it
console.log("Lowercase:", personName.toLowerCase());
// covert the name to titlecase and print it
function toTitleCase(input) {
    var words = input.split(' ');
    var titleCaseWords = words.map(function (currentWord) {
        return currentWord.charAt(0).toUpperCase() + currentWord.slice(1).toLowerCase();
    });
    return titleCaseWords.join(' ');
}
console.log("Titlecase:", toTitleCase(personName));
