function value(x) {
    return x;
}
function value2(x) {
    return x;
}
var number = value(10);
console.log(number);
var city = value2("Ankara");
console.log(city);
function value3(x) {
    return x;
}
var variable = value3(20);
var variable2 = value3("Bursa");
console.log(variable);
console.log(variable2);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.map = function (parameter) {
        return parameter;
    };
    return GenericClass;
}());
var variable4 = new GenericClass();
variable4.map(10);
