var People = /** @class */ (function () {
    function People() {
    }
    Object.defineProperty(People.prototype, "isim", {
        get: function () {
            return "Sayın " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    return People;
}());
var people = new People();
people.isim = "Bilal";
console.log(people.isim);
