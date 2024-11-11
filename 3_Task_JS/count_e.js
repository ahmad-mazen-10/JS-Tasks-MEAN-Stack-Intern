//     String Object

let count = 0
let arr = []
let input_e = prompt("Enter any text contain ' e | E ' ")

let convert = input_e.toLowerCase().trim()
arr.push(convert)

console.log(arr);

for (i = 0; i < convert.length; i++){
    if(convert[i] === 'e') {  count++  }
}

console.log(count);