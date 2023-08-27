// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < options.length; i += 2) {
        var optionName = options[i];
        var optionValue = options[i + 1];
        carInfo[optionName] = optionValue;
    }
    return carInfo;
}
var car = storeCarInfo("Toyota", "Camry", "color", "blue", "year", 2002, "features", ["GPS", "Sunroof"]);
console.log(car);
