// ---  task 3   ✅

var user_msg = prompt("enter your massage");

function code() {
  for (var i = 1; i <= 6; i++) {
    var tag = document.createElement(`h${i}`);
    var msg = document.createTextNode(user_msg);
    tag.appendChild(msg);
    document.body.appendChild(tag); // **
    // document.writeln(tag)
    // console.log(tag);
  }
}

if (user_msg) {
  code();
} else {
  while (!user_msg) {
    alert("please enter your massage");
    var user_msg = prompt("enter your massage");
    code();
  }
}
