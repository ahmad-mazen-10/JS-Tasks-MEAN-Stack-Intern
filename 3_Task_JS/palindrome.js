let inputUser = prompt("text any word balanced ");
let sure = confirm(
  "whether to consider case sensitivity in the check (i.e. whether 'Radar' should be treated as the same as 'radar' ) "
);
let arr = [];
arr.push(inputUser);

// console.log(arr);

for (i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i].toLowerCase().split().join() && sure == true) {
    console.log(arr[i] + " is a palindrome  with case sensitive");
    alert("Result: The string is a palindrome with case sensitive.");
  } else if (arr[i] === arr[i].split().join() && sure == false) {
    console.log(arr[i] + " not palindrome without case sensitive");
    alert("Result: The string is a palindrome without case sensitive.");
  } else {
    console.log(arr[i] + " is not a palindrome");
    alert("Result: The string is not a palindrome.");
  }
}
