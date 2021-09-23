const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, phoneNumber) {
        super(name, id, email, phoneNumber);

        this.officeNumber = officeNumber;
        // this.role = "Manager";
    };

    getRole() {
        return 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

    // getPhoneNumber() {
    //     return this.phoneNumber;
    // }
};


module.exports = Manager;