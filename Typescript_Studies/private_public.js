var Home = /** @class */ (function () {
    function Home(numberRoom, numberWindow, numberFloor) {
        this.numberRoom = numberRoom;
        this.numberWindow = numberWindow;
        this.numberFloor = numberFloor;
    }
    Home.prototype.eat = function () {
        console.log("Dinner was eaten on the " + this.numberFloor + " floor.");
    };
    return Home;
}());
var home = new Home(3, 4, 5);
console.log(home.numberFloor);
console.log(home.numberWindow); // No access to numberRoom
