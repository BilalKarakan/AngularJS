var myName = document.getElementById("myName").addEventListener("click", changeColor);

function changeColor() {
    document.getElementById("div1").style.backgroundColor = "lightblue";
}
//-----------------------------------------------------------------------------

var myName2 = document.getElementsById("p1").addEventListener("mouseover", changeValue);

function changeValue() {
    var changeName = document.getElementsByName("customerName");
    changeName[0].value = "Hello World!";
}