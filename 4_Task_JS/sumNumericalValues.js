// Create a function named addNumbers that takes any number of parameters and returns their sum. Ensure that all passing parameters are numerical values. If any parameter is not a number, throw an exception using throw new Error("Custom error message") . Use try...catch to catch and handle the exception when calling the function.

function addNumbers() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    try {
      //  if (!typeof arguments[i] === "number") {    ❌
      if (typeof arguments[i] !== "number") {
        throw new Error("All parameters must be numbers.");
      }

        sum += arguments[i];
        
    } catch (error) {
      console.error("Error ==> " + error.message);
    }
  }

  return sum;
}

try {
  console.log(addNumbers(1, 2, 3, 4, "sa"));
} catch (error) {
  console.error("Caught an error: " + error.message);
}

// console.log(addNumbers(1, 2, 3, 4, "sa"));
// console.log(addNumbers(1, 2, 3, 4));
