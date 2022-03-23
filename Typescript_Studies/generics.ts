function value(x:number):number{
    return x;
}

function value2(x:string):string{
    return x;
}

let number = value(10)
console.log(number)

let city = value2("Ankara")
console.log(city)

function value3<T>(x:T):T{
    return x;
}

let variable = value3<number>(20)
let variable2 = value3<string>("Bursa")
console.log(variable)
console.log(variable2)

class GenericClass<T>{
    variable3: T;
    map(parameter:T):T{
        return parameter
    }
}

let variable4 = new GenericClass<string>()
variable4.map("Adana")