function addition(x,y){
    return x+y;
}

function addition2(x:number, y:number):number{
    return x+y;
}

let addition3 = function(x:number, y:number):number{
    return x+y;
}

console.log(addition(4,5))
console.log(addition(2,"Ankara"))
//console.log(addition2(5,"Bursa"))
console.log(addition3(6,7))

function addition4(x:number, y:number = 4):number{
    return x+y;
}

console.log(addition4(3,8))    // x = 3 , y = 8
console.log(addition4(3))      // x = 3 , y = 4

function addition5(x:number, y?:number):number{
    if(y){
        return x+y; 
    }
    return x;
}

console.log(addition5(3))
console.log(addition5(3,5))
