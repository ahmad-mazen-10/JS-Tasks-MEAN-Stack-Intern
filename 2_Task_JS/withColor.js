//  --- task 2

alert("welcome welcome");

var name = prompt("Enter your name");
var color = prompt("Enter your color");

if (color) {

  var nameHT = document.createElement("h1");
  nameHT.textContent = "Hello, " + name + "!";
  nameHT.style.color = color;

    document.body.appendChild(nameHT);
    
} else {
  alert("You didn't enter a valid color.");
}
