[] === []; //false => Arrays are reference type.
[1, 2] === [1, 2]; //false => Arrays are reference type.

var object1 = { value: 1 };
var object2 = { value: 1 };
object1 === object2; //false => Dictionaries are reference type.

console.log(this); // window object

window === this; //true 

this.alert("Hello World!"); // The object this always works.
alert("Hello There!");
window.alert("Hello Javascript");

const object3 = {
    add: function() {
        console.log(this)
    }
}
object3.add();