class Personal {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    save() {
        console.log("Personal saved" + this.firstName);
        // console.log(`Personal saved ${this.firstName}`);
    }
}
const personal = new Personal("Bilal", "Karakan");
personal.save();
// personal.name = "Bilal";
// console.log(personal.name)  => Before this in Constructor

console.log(personal.firstName);
console.log(personal.lastName);