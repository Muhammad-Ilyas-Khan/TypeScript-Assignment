// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo (manufacturer: string, model: string, ...options: any): any {
    const carInfo: any = {
        manufacturer: manufacturer,
        model: model,
    };
    for ( let i = 0; i < options.length; i += 2) {
        const optionName = options[i];
        const optionValue = options[i + 1];
        carInfo[optionName] = optionValue;
    }
    return carInfo;
}

const car = storeCarInfo("Toyota", "Camry", "color", "blue", "year", 2002, "features", ["GPS", "Sunroof"]);
console.log(car);

