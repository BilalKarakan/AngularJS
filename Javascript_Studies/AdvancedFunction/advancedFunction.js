function greeting() {
    console.log("Hello World!")
}
greeting();

var greeting = function greeting() {
    console.log("Hello World!")
}
greeting();

const greeting2 = () => console.log("Hello Javascript");
greeting2();

const greeting3 = () => {
    console.log("Hello There");
    console.log("Hello Programming");
}
greeting3();

const greeting4 = (message) => {
    console.log(message);
}
greeting4("Hello Functions");

var sum = (number1, number2) => {
    return number1 + number2;
}
var result = sum(14, 29)
console.log(result)