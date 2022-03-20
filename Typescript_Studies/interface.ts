interface Product{
    id:number;
    name:string;
    unitPrice:number;
}

class Product2{
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product){
    console.log(product.name + " kaydedildi.")
}

function save2(product2:Product2){
    console.log(product2.name + " kaydedildi.")
}

save({id:1, name:"Laptop", unitPrice:1000})

let mouse = new Product2()
console.log(mouse.name)

save2(mouse)

interface PersonalServices{
    save();
}

class CustomerServices implements PersonalServices{
    save() {
        
    }
}