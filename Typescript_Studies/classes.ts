class House{
    _numberRoom:number;
    _numberWindow:number;
    _numberFloor:number;
    constructor(numberRoom:number, numberWindow:number, numberFloor:number){
        this._numberRoom = numberRoom
        this._numberWindow = numberWindow
        this._numberFloor = numberFloor
    }
    eat(){
        console.log("Dinner was eaten on the " + this._numberFloor + " floor." )
    }
}

let house = new House(3,4,5)
house.eat();
console.log(house._numberWindow);