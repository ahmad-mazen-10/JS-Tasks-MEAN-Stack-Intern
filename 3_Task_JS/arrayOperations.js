let arr = [];
for (i = 1; i <= 3; i++) {
  let nums = prompt(`Enter ${i} value `);
  let validate_num = +nums;
  arr.push(validate_num);
}

let operation = prompt("Which operation U want [ + , - , / , * ]");

// console.log(arr);

switch (operation) {
  case "+":
    result = arr[0] + arr[1] + arr[2];
    break;
  case "-":
    result = arr[0] - arr[1] - arr[2];
    break;
  case "/":
    result = arr[0] / arr[1] / arr[2];
    break;
  case "*":
    result = arr[0] * arr[1] * arr[2];
    break;

  default:
    result = "Invalid operation!";
}
alert("Result : " + result);
