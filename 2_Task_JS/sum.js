// --- task 1

// function code() {
//   var number = prompt("Enter your number");
//   +number;
// }

var sum = 0;

do {
  var input = prompt("Enter your number");
  //   +number;

  if (input === null || input.trim() === "") {
    alert(" دخل الرقم بقولك");
    continue;
    }
    
  var number = parseFloat(input);

  if (!number) {
    alert(" دخل الرقم بقولك");
  }

  if (number === 0) {
    alert("Input is ZERO ");
    break;
  }

  if (sum + number > 100) {
    alert("Adding this number would exceed the sum limit of 100. Exiting.");
    break;
  } else {
      sum += number;
  }

  sum += number;
  console.log(sum);
} while (true);

alert("Final sum: " + sum);
console.log("Final sum: " + sum);
