// document.getElementById("intro1").innerHTML = "Bilal Karakan 2"

var intro1 = document.getElementById("intro1");

var message = document.getElementById("message");

message.innerHTML = intro1.innerHTML

//--------------------------------------------------------------------

var tumListeler = document.getElementsByTagName("ul");
var elemanlar = tumListeler[0];
var tumElemanlar = elemanlar.getElementsByTagName("li")

for (i = 0; i < tumElemanlar.length; i++) {
    alert(tumElemanlar[i].innerHTML)
}