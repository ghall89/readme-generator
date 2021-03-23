// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

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
	let readMeContent = `
# This is just a test
	`;
	writeToFile(readMeContent);
};

// Function call to initialize app
init();
