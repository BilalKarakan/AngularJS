class Home{
    private numberRoom:number;   // can be used in the class in which it is defined.
    numberWindow:number;
    numberFloor:number;
    constructor(numberRoom:number, numberWindow:number, numberFloor:number){
        this.numberRoom = numberRoom
        this.numberWindow = numberWindow
        this.numberFloor = numberFloor
    }
    eat(){
        console.log("Dinner was eaten on the " + this.numberFloor + " floor." )
    }
}

let home = new Home(3,4,5)
console.log(home.numberFloor)
console.log(home.numberWindow)   // No access to numberRoom