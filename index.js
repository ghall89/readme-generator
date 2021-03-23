// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: "What's the project name? (required)",
		validate: titleInput => {
			if (titleInput) {
				return true;
			} else {
				console.log('Please enter a project name!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'description',
		message: "Provide some information about the project. (required)",
		validate: descriptInput => {
			if (descriptInput) {
				return true;
			} else {
				console.log('Please enter a description!');
				return false;
			}
		}
	}
];

// TODO: Create a function to write README file
const writeToFile = data => {
	fs.writeFile('readme.md', data, (err) => {
		if (err) {
			return err;
		}
		console.log('Readme successfully created!');
	});
};

// TODO: Create a function to initialize app
const init = () => {
	inquirer.prompt(questions)
		.then(answers => {
			console.log(answers);
			let readMeContent = generateMarkdown(answers);
			writeToFile(readMeContent);
		})
		.catch(error => {
			if(error.isTtyError) {
				console.log(error);
			} else {
				console.log(error);
			}
		});
	};


// Function call to initialize app
init();
