const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");


const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const myTeam = [];

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


    {
        type: "input",
        message: "What is the phone number?",
        name: "phoneNumber",
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
        name: "internId",
    },

    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
    },

    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
    },




];

const engineerQuestion = [{
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



let outputString = "";
//page header 
const pageHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
<main>
`;

//end of webpage
const pageFooter = `
</main>
</body>
</html>
`;

//generate stylesheet
const styles = `
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: white;
}

header {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
    background-color: rgb(226, 43, 186);
    color: white;
}

h2 {
    margin-left: 10px;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 0px;
}

main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 25px;
}

li {
    list-style: none;
    padding: 5px;
    border-style: dotted;
    border-color: rgb(88, 73, 86);
    margin: 5px 0px 5px -35px;
}

.card {
    background-color: rgb(19, 9, 17);
    border-radius: 5px;
    border-width: 1px;
    margin-bottom: 25px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
    color: white;
    width: 400px;
    padding: 10px;
}
.card-header {
    background-color: rgb(226, 43, 211);
    width: 100%;
    margin-top: -20px;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
}

.card-body {
    color: rgb(212, 228, 226);
}

        
`



function addManager(name, id, email, phoneNumber) {
    const manager = new Manager(name, id, email, phoneNumber);
    myTeam.push(manager);
};

function addEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github);
    myTeam.push(engineer);
};

function addIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school);
    myTeam.push(intern);
};
const controlQuestion = [{
        type: 'list',
        name: 'addanother',
        message: 'What do you want to do next?',
        choices: ['Engineer', 'Intern', 'Done']
    }]
    //ASK USER IF THEY WANT TO CONTINUE ADDING TEAM MEMBERS
function askQuestion() {
    return inquirer
        .prompt(controlQuestion)
        .then((data) => {
            const reply = `${data.addanother}`;
            if (reply === 'Engineer') {
                return inquirer
                    .prompt(engineerQuestion)
                    .then((data) => {
                        addEngineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
                        return askQuestion();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (reply === 'Intern') {
                return inquirer
                    .prompt(internQuestion)
                    .then((data) => {
                        addIntern(data.internName, data.internId, data.internEmail, data.internSchool);
                        return askQuestion();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                return;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

// WRITENTO WEBPAGE
inquirer
    .prompt(managerQuestion)
    .then((data) => {

        addManager(data.managerName, data.managerId, data.managerEmail, data.phoneNumber);
        //ask for more team members 
        return askQuestion();
    })
    .then(() => {
        generateWebpage(myTeam);
    })
    .catch((error) => {
        console.log(error);
    });

//CREATE NEW DATA CARD HTML BASED ON TEAM MEMBER DATA
function generateTeamCard(role, employee, id, email, special) {
    let pageCardOutput = `
    <div class='card'>
    <div class='card-header'>
        <h2>${employee}</h2>
        <h2>${role}</h2>
    </div>
    <div class='card-body'>
        <ul>
            <li>ID: ${id}</li>
            <li>EMAIL: ${email}</li>
            <li>${special}</li>
        </ul>
    </div>
    </div>
    `;
    return pageCardOutput;
}

//WRITES GENERATED HTML STRING TO HTML FILE 
function generateWebpage(team) {
    //add page header to output string
    outputString = pageHeader;
    const filepath = `./assets/`;
    const outputHTML = `output.html`;
    const outputCSS = `styles.css`;

    //add each team member from team array 
    team.forEach(element => {
        const role = element.getRole();
        const employee = element.getName();
        const id = element.getId();
        const email = element.getEmail();
        let special = "";
        //adjust last variable based on employee type
        // console.log(role, employee, email, id);
        if (role === 'Manager') {
            special = `PHONE: ${element.getOfficeNumber()}`;
        } else if (role === 'Engineer') {
            // special = `GITHUB NAME: https://github.com/${element.getGitHub()}`;
            special = `<a href="https://github.com/${element.getGitHub()}" target="_blank">GITHUB NAME: https://github.com/${element.getGitHub()}</a>`;
        } else {
            special = `SCHOOL: ${element.getSchool()}`;
        }
        newCardOutput = generateTeamCard(role, employee, id, email, special);
        outputString = outputString + newCardOutput;
    });
    //add page footer to output string
    outputString = outputString + pageFooter;
    //write webpage from output string content
    fs.writeFile(`${filepath}${outputHTML}`, `
        ${outputString}
        `, (err) =>
        err ? console.error(err) : console.log('output.html written'))

    fs.writeFile(`${filepath}${outputCSS}`, `
        ${styles}
        `, (err) =>
        err ? console.error(err) : console.log('styles.css written'))
}