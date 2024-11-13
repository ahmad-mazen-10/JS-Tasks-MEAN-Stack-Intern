// Write a function named reverseParams that takes any number of parameters, converts them into an array, reverses the array, and then returns the reversed array. Use try...catch to catch and handle any exceptions when calling the function

function reverseParams() {
  let arr = [];
  try {
    for (let i = 0; i < arguments.length; i++) {
      arr.push(arguments[i]);
    }
  } catch (error) {
    console.error("Error --> ", error.message);
  }
  return (reversedArr = arr.reverse());
}

console.log(reverseParams(123, 24, "dfsa"));
