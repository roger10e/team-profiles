//GIVEN a command-line application that accepts user input
//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//WHEN I click on an email address in the HTML
//THEN my default email program opens and populates the TO field of the email with the address
//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab
//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
//WHEN I enter the team manager’s name, employee ID, email address, and office number
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated

//Application should use Jest for running unit tests
//Aplication should use Inquirer for collecting input from the user

//Application must have these classes: Employee, Manager, Engineer, and Intern
    //The first class is the Employee parent class with the following properties and methods
        // name, id, email, getName(), getId(), getEmail(), getRole() (returns 'Employee')
    //The other 3 classes should extend Employee
        //Manager will also include: officeNumber, getRole() (overridden to 'manager')
        //Engineer will also include: github (username), getGithub(), getRole() (overridden to 'engineer')
        //Intern will also include: school, getSchool(), getRole() (overridden to 'intern')

//HELP WITH:
    //Doing this with OOP?    

    //File Structure - what goes where?
    
    //'Inquirer' - connecting it, calling it, and ensuring it is properly ignored (+ 'dist' ?)
    //'Jest' - connecting it, calling it, and any helpful tips

    // Generating HTML file from user input
        //From ReadMe generator? Lesson Activity?
        //Having a difficult time envisioning this done with OOP

//Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//jest?

//separation of objects / functions into other files to import here? Suggested?

//Creating an array of questions for user input, using Readme Generator as guide
const questions = [
    {
        type: 'input',
        name: 'mgr-name',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'mgr-num',
        message: 'What is the employee ID number of the team manager?'
    },
    {
        type: 'input',
        name: 'mgr-email',
        message: 'What is the email address of the team manager?'
    },
    {
        type: 'input',
        name: 'mgr-office-num',
        message: "What is  team manager's office number?"
    },
    // {
    //     type: 'confirm',
    //     name: 'add-egr',
    //     message: 'Would you like to add information for an engineer?'
    // },
    {
        type: 'input',
        name: 'egr-name',
        message: 'What is the name of the team engineer?'
    },
    {
        type: 'input',
        name: 'egr-email',
        message: 'What is the email address of the team manager?'
    },
    {
        type: 'input',
        name: 'egr-num',
        message: "What is the engineer's employee ID number?"
    },
    {
        type: 'input',
        name: 'egr-github',
        message: "What is the engineer's Github username?"
    },
    // {
    //     type: 'confirm',
    //     name: 'add-egr',
    //     message: 'Would you like to add information for an engineer?'
    // },
    {
        type: 'input',
        name: 'int-name',
        message: "What is the team intern's name?"
    },
    {
        type: 'input',
        name: 'int-email',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: 'int-num',
        message: "What is the intern's employee ID number?"
    },
    {
        type: 'input',
        name: 'int-name',
        message: 'What school does the intern attend?'
    }
]

//function copied from ReadMe Generator
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//        
//             console.log(answers)
//        
//             fs.writeFile('./readme.md', generateMarkdown(answers), err => {
//                 if (err) throw new Error(err);
//                 console.log('Page created! Check out index.html in this directory to see it!');
//               });
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//        
//             } else {
//        
//             }
//         });
// }

// // Function call to initialize app
// init();