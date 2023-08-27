// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// large shirt with default message
make_shirt();
// medium shirt with default message
make_shirt("medium");
// small shirt with default message
make_shirt("small", "TypeScript is awesome!");
