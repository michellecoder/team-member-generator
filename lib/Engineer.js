const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        // this.role = "Engineer";

    };
    getRole() {
        return 'Engineer';
    };


    getGitHub() {
        return this.github;
    };
};

module.exports = Engineer;