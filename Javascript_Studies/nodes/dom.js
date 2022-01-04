// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);


var heading = document.createElement("h2");
var node2 = document.createTextNode("Hello JavaScript!");
heading.appendChild(node2);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(heading, p2);

alert("p2 uninstall...");
div1.removeChild(p2);