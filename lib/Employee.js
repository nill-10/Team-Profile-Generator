// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, mail,role) {
        this.name = name;
        this.id = id;
        this.mail = mail;
        this.role = role;
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
        if (this.role === Manager) {
            return 'Manager';
          } else if (this.role === Engineer) {
            return 'Engineer';
          } else if (this.role === Intern) {
            return 'Intern';
          } else {
            return 'Employee';
          }

    }

}

module.exports = Employee;