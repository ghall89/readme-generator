// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'name',
		message: "What's your first and last name? (required)",
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log('Please enter your name!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'github',
		message: "What's your GitHub username? (required)",
		validate: githubInput => {
			if (githubInput) {
				return true;
			} else {
				console.log('Please enter your GitHub username!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'email',
		message: "What's your email address? (required)",
		validate: emailInput => {
			if (emailInput) {
				return true;
			} else {
				console.log('Please enter your email address!');
				return false;
			}
		}
	},
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
	},
	{
		type: 'input',
		name: 'installation',
		message: "Provide installation steps seperated by a commas. (required)",
		validate: installInput => {
			if (installInput) {
				return true;
			} else {
				console.log('Please enter installation instructions!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'usage',
		message: "Provide usage steps seperated by a commas. (required)",
		validate: usageInput => {
			if (usageInput) {
				return true;
			} else {
				console.log('Please enter usage instructions!');
				return false;
			}
		}
	},
	{
		type: 'list',
		name: 'license',
		message: 'Choose a license.',
		choices: ['GNU General Public License', 'MIT License', 'Apache License', 'No License']
	}
	
];

// TODO: Create a function to write README file
const writeToFile = data => {
	fs.writeFile('./output/README.md', data, (err) => {
		if (err) {
			return err;
		}
		console.log('Readme successfully created!');
	});
};

const copyLicense = data => {	
	let filePath = ''
	
	switch (data.license) {
		case 'GNU General Public License':
			filePath = './assets/licenses/gnu.md';
			break;
		case 'MIT License':
			filePath = './assets/licenses/mit.md';
			break;
		case 'Apache License':
			filePath = './assets/licenses/apache.md';
			break;
		default:
			return;
	}
	fs.copyFile(filePath, './output/LICENSE.md', (err) => {
		if (err) throw err;
	});
};

// TODO: Create a function to initialize app
const init = () => {
	inquirer.prompt(questions)
		.then(answers => {
			let readMeContent = generateMarkdown(answers);
			writeToFile(readMeContent);
			copyLicense(answers);
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
