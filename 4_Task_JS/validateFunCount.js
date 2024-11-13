//  Create a function named checkTwoParams that accepts exactly two parameters. If the function is called with fewer or more than two parameters, it should throw an exception. Use throw new Error("Custom error message") to handle the error. Use try...catch to catch and handle the exception when calling the function.

function checkTwoParams(param_1, param_2) {
  if (arguments.length !== 2) {
    throw new Error("Custom error message");
  }
}

try {
  checkTwoParams(1, 4);
} catch (error) {
  console.log("Error ==> " + error);
}

try {
  checkTwoParams(ML, DL,drf);
} catch (error) {
  console.log("Error ==> " + error);
}
