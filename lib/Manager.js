// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, mail,officeNumber) {
    super(name, id, mail,"Manager");
    this.officeNumber = officeNumber;
}
 getRole() {
return Manager;
 }
}
console.log(Manager);