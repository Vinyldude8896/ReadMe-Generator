// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileModilfier = require('fs');
const generatePage = require('./utils/generateMarkdown');
// const writeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the Title of your project?', 'Please provide a description of your project?', 'Please provide the installation instructions for your project:','Please provide the contribution guidelines:', 'Please provide the test instructions for your application:', 'Please provide your GitHub username:', 'Please provide your email adddress:', 'Please provide any addition contact instructions:'];
const labels = ['title', 'description', 'installation', 'Contribution', 'Testing', 'GitHub', 'email', 'Contact']


const promptUser = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: labels[0],
            message: questions[0],
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: labels[1],
            message: questions[1],
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        // {
        //     type: 'input',
        //     name: labels[2],
        //     message: questions[2],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: labels[3],
        //     message: questions[3],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: labels[4],
        //     message: questions[4],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: labels[5],
        //     message: questions[5],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: labels[6],
        //     message: questions[6],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: labels[7],
        //     message: questions[7],
        //     validate:  inputUserData = () => {
        //         if (inputUserData) {
        //             return true;
        //         } else {
        //         console.log("You need to enter a valid response.");
        //             return false;
        //         }
        //     }
        // },
    ])
}



// let questionCycle = 0;
// let questionslength = questions.length;
// const cycleQuestions = () =>{
//     for (questionCycle; questionCycle <= questionslength; questionCycle++){
//     const userInputQuestions = () => {
//         console.log(questionCycle);
//             return Myinquirer.prompt ([
//                 {
//                     type: 'input',
//                     name: labels[questionCycle],
//                     message: questions[questionCycle] + " (required)",
//                     
//                         }
//                 }
//             ])   
//         } 
//         userInputQuestions();
//     }
    
// }

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./generatedfiles/readme.md', fileContent, err =>{
        if (err) {
            reject(err);
            return;
        }

        resolve ({
            ok: true,
            message: 'Written to file'
        });
    });
});
}

// Function call to initialize app
promptUser()
    .then(inputUserData =>{
        console.log(inputUserData);
        return generatePage(inputUserData);
    })
    .then(pageReadMe => {
        return writeToFile(pageReadMe);
    })
    
