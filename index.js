const inquirer = require("inquirer");
const path = require("path");


const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

const team = [];

const managerQuestion = [{
        type: "input",
        message: "Name of Manager?",
        name: "managerName",
    },

    {
        type: "input",
        message: "What is the manager id?",
        name: "managerId",
    },

    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
    },

    {
        type: "input",
        message: "What is the office number?",
        name: "officeNumber",
    },




];


const internQuestion = [{
        type: "input",
        message: "Waht is the intern's name?",
        name: "internName",
    },

    {
        type: "input",
        message: "What is the intern's id?",
        name: "managerId",
    },

    {
        type: "input",
        message: "What is the intern's email?",
        name: "managerEmail",
    },

    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
    },




];

const managerQuestion = [{
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
    },

    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId",
    },

    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
    },

    {
        type: "input",
        message: "What is the engineer's Github?",
        name: "engineerGithub",
    },




];

const nextQuestions = [{
    type: "list",
    message: "what is the engineer's name?",
    name: "engineerName",
    choices: ['Engineer', 'Intern'],
}];

const generator = () => {

    function askManager() {
        inquirer.prompt(managerQuestions)
            .then(managerInformation => {
                let managerInformation = { managerName, managerId, managerEmail, officeNumber }
                employee = new Manager(managerName, managerId, managerEmail, officeNumber)
            })
    }

    function followingQustions() {
        inquirer.prompt(nextQuestions)
            .then()
    }
}

generator();
inquirer
    .prompt(managerQuestions)
    .then((answers) => {

        const manager = new Manager(managerAnswers);

        return nextQuestion();
    })
    .then(() => {

    })
    .catch((error) => {
        if (error.Error) {

        } else {

        }
    });