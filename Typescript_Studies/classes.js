var House = /** @class */ (function () {
    function House(numberRoom, numberWindow, numberFloor) {
        this._numberRoom = numberRoom;
        this._numberWindow = numberWindow;
        this._numberFloor = numberFloor;
    }
    House.prototype.eat = function () {
        console.log("Dinner was eaten on the " + this._numberFloor + " floor.");
    };
    return House;
}());
var house = new House(3, 4, 5);
house.eat();
console.log(house._numberWindow);
