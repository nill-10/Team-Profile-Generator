// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, mail,school) {
    super(name, id, mail,"Intern");
    this.school = school;
}
 getSchool() {
    console.log(this.school);

 }
 getRole() {
    return Intern;

 }
}
// console.log(Intern);

module.exports = Intern;