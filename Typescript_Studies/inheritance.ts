class Personal{
    paySalary(){
        console.log("Salary paid.")
    }
}

class Customer extends Personal{
    register(){
        console.log("Customer registered.")
    }
}

class Product extends Customer{
    addProduct(){
        console.log("Product added")
    }
}

let customer = new Customer()
customer.paySalary()
customer.register()

let product = new Product()
product.addProduct()
product.paySalary()
product.register()