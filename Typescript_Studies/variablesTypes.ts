let score:number;
score = 10
score = 10.4
//score = "Bursa" Type of score is number.

let city: string
// let city : string = "Istanbul"  (Alternative Use)
city = "Istanbul"
city = "Ankara"
//city = 10;  Type of city is string.

let isThere : boolean = true
isThere = false

let scores:number[] = [10,20,30]
//let scores:number[] = [10,20,30,"Ankara"] (Type of "Ankara" is string)

let scores2 : Array<number> = [10,20,30]

let list1:[number,string] = [2,"Ankara",]

enum Renk {Red=1, Yellow, Blue}
let renk:Renk = Renk.Red

let value : any = "Ankara"
value = 2.6
value = {}

let value2 : void = undefined

function sayHi ():void{
    console.log("Hello There!")
    //return 4
}

// Undefined - Null

let age : number  // It is undefined
age = 10  // It is not undefined anymore

class Customer{
    // Referansı oluşturulmayan(newlenmeyen) obje nulldır.
}

