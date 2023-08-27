// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var favoritePlacesToVisit = ["Mauritius", "Rome", "Istanbul", "Paris", "Zurich", "Cairo", "Machu Picchu", "Barcelona"];
// try accessing an index that does not exist (out of bound)
var index = favoritePlacesToVisit.length;
console.log(favoritePlacesToVisit[index]);
// try index with in bounds
var index = 2;
console.log(favoritePlacesToVisit[index]);
