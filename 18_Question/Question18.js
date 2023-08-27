/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// store favorite places to visit in arry (not in alphabetical order)
var favoritePlacesToVisit = ["Mauritius", "Rome", "Istanbul", "Paris", "Zurich", "Cairo", "Machu Picchu", "Barcelona"];
// print original order
console.log("Original Order:", favoritePlacesToVisit);
// print alphabetical order without modifying
var alphabeticalOrder = favoritePlacesToVisit.slice().sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// show original order still intact
console.log("Original Order:", favoritePlacesToVisit);
// print reverse alphabetical order (without modifying original)
var reverseAlphabeticalOrder = favoritePlacesToVisit.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// show original order still intact
console.log("Original Order:", favoritePlacesToVisit);
// reverse order of the list
favoritePlacesToVisit.reverse();
console.log("Reversed Order:", favoritePlacesToVisit);
// reverse the order
favoritePlacesToVisit.reverse();
console.log("Back to Original:", favoritePlacesToVisit);
// sort in alphabetical order
favoritePlacesToVisit.sort();
console.log("Sorted in Alphabetical Order:", favoritePlacesToVisit);
// sort in reverse alphabetical order
favoritePlacesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reversed Alphabetical Order", favoritePlacesToVisit);
