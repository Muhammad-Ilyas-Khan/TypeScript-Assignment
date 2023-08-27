/* 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
// less than 2 years, baby
var age = 1;
if (age < 2) {
    console.log("This person is a baby", age);
}
else {
    console.log("This person is not a baby", age);
}
// less than 4 years, toddler
var age2 = 3;
if (age2 >= 2 && age2 < 4) {
    console.log("This person is a toddler", age2);
}
else {
    console.log("This person is not a toddler", age2);
}
// less than 13 years, kid
var age3 = 12;
if (age3 >= 4 && age3 < 13) {
    console.log("This person is a kid", age3);
}
else {
    console.log("This person is not a kid", age3);
}
// less than 20 years, teenager
var age4 = 19;
if (age4 >= 13 && age4 < 20) {
    console.log("This person is a teenager", age4);
}
else {
    console.log("This person is not a teenager", age4);
}
// less than 65 years, adult
var age5 = 64;
if (age5 >= 20 && age5 < 65) {
    console.log("This person is an adult", age5);
}
else {
    console.log("This person is not an adult", age5);
}
// 65 years or older
var age6 = 65;
if (age6 >= 65) {
    console.log("This person is elder", age6);
}
else {
    console.log("This person is 'deceased'");
}
