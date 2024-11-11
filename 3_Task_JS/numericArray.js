//    Array Object

let tree = [];

for (i = 1; i <= 5; i++) {
  let numTree = prompt(`Enter the ${i} value `);

  if (!numTree) {
    alert("Please enter number");
  }
  tree.push(numTree);
}

console.log(tree);

let AscOrder = [...tree].sort((a, b) => b - a);
let DescOrder = [...tree].sort((a, b) => a - b);

console.log("Original input: " + tree);
console.log("Sorted in ascending order: " + AscOrder);
console.log("Sorted in descending order: " + DescOrder);

