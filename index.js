const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team =[]
const choices = ['Add an engineer', 'Add an intern', 'Finish building the team'] 
function managerInformation() {
    inquirer
    .prompt([
        {
            type : 'input',
            name : 'managerName',
            message : 'enter name of the team manager:',
        },
        {
            type : 'input',
            name : 'managerId',
            message : 'enter employee id of the team manager:',
        },
        {
            type : 'input',
            name : 'managerEmail',
            message : 'enter email address of the team manager:',
        },
        {
            type : 'input',
            name : 'managerOffice',
            message : 'enter Office number of the team manager:',
        },
     
    ])
     
    .then((data) => {
        addMember();
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
         team.push(manager);
        

        // console.log(data);
    });

}; 

function addMember() {
    inquirer
    .prompt([

        {
            type : 'list',
            message : 'which member do you want to add?',
            name : 'members',
            choices: choices,
        },
    ])
    .then((answers) => {
        if (answers.members === choices[0]) {
            engineerInformation();

        }  else if (answers.members === choices[1]) {
            internInformation();

        } else {
      
            
        }
       
        // console.log(answers);
    });

    };

    function engineerInformation() {
        inquirer
        .prompt([
            {
                type : 'input',
                name : 'engineerName',
                message : 'enter name of the team engineer:',
            },
            {
                type : 'input',
                name : 'engineerId',
                message : 'enter id of the team engineer:',
            },
            {
                type : 'input',
                name : 'engineerEmail',
                message : 'enter email of the team engineer:',
            },
            {
                type : 'input',
                name : 'engineerGitHub',
                message : 'enter github username of the team engineer:',
            },
        ])
        .then((data) => {
            addMember();
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
            team.push(engineer);
            
            // console.log(answers);
        });
    };


    function internInformation() {
        inquirer
        .prompt([
            
            {
                type : 'input',
                name : 'internName',
                message : 'enter name of the intern:',
            },
            {
                type : 'input',
                name : 'internId',
                message : 'enter id of the intern:',
            },
            {
                type : 'input',
                name : 'internEmail',
                message : 'enter email of the intern:',
            },
            {
                type : 'input',
                name : 'internSchool',
                message : 'enter school of the intern:',
            },
        ])
        .then((data) => {
            addMember();
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            team.push(intern);
            // console.log(answers);
        });
    };

    managerInformation();

