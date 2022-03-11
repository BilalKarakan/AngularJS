function addition(x, y) {
    return x + y;
}
function addition2(x, y) {
    return x + y;
}
var addition3 = function (x, y) {
    return x + y;
};
console.log(addition(4, 5));
console.log(addition(2, "Ankara"));
//console.log(addition2(5,"Bursa"))
console.log(addition3(6, 7));
function addition4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(addition4(3, 8)); // x = 3 , y = 8
console.log(addition4(3)); // x = 3 , y = 4
function addition5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(addition5(3));
console.log(addition5(3, 5));
function invite(firstGuest) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstGuest + " " + others.join(" ");
}
console.log(invite("Bilal", "Elif", "Ahmet", "Mehmet"));
function invite2() {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return others.join(" ");
}
console.log(invite2("Bilal", "Elif", "Ahmet", "Mehmet"));
function invite3() {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return others.join(" ");
}
console.log(invite3());
