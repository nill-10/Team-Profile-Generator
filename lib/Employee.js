// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, mail) {
        this.name = name;
        this.id = id;
        this.mail = mail;
    }
    getName() {
        console.log(this.name);
    }
    getId() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.mail);
    }
    getRole() {

    }

}

module.exports = Employee;