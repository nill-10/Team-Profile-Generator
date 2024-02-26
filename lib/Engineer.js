// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, mail,github) {
    super(name, id, mail,'Engineer');
    this.github = github;
}
 getGithub() {
    console.log(this.github);

 }
 getRole() {

 }
}
console.log(Engineer);
