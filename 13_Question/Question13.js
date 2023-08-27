// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myFavoriteModeOfTransportation = ["Electric Bike", "Hoverboard", "Electric Unicycle", "Electric Skateboard", "Electric Scooter", "Onewheel"];
for (var i = 0; i < myFavoriteModeOfTransportation.length; i++) {
    var message = "I would like to own ".concat(myFavoriteModeOfTransportation[i], ".");
    console.log(message);
}
