var number = 10;
var city = "Ankara";

number = 11;
city = "Istanbul";

var city = "Adana";

let firstName = "Bilal";
firstName = "Elif";
//let firstName = "Mehmet"; //Error: for the let keyword


console.log(number);
console.log(city)
console.log(firstName);

function giveMessage() {
    console.log(city);
}
giveMessage();

function sendMessage() {
    var lastName = "Karakan";
    console.log(city)
}
// console.log(lastName); //Error: The var keyword have to use in defined scope.
//sendMessage();

function sendMessage() {
    var lastName = "Karakan";
    console.log(lastName)
}
sendMessage();

for (var i = 1; i < 10; i++) {

}
console.log(i);

// for (let i = 1; i < 10; i++) {

// }                       
// console.log(i)   //Error

// const book = "Middlemarch";
// book = "Jane Eyre";
// console.log(book); //Error: const can be defined once.

const books = ["Crime And Punishment", "War And Peace", "Lolita"];
books.push("Dead Souls"); //Arrays is reference type.

books = ["Anna Karenina", "The Idiot"]; //Error
console.log(books);