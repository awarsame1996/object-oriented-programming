const inquirer = require('inquirer');
// manager questions
const managerQuestions = [
	{
		type: 'input',
		message: 'please enter team name',
		name: 'teamName',
	},
	{
		type: 'input',
		message: 'please enter manager name',
		name: 'managerName',
	},
	{
		type: 'input',
		message: 'please enter manager ID',
		name: 'managerID',
	},
	{
		type: 'input',
		message: 'please enter manager email',
		name: 'managerEmail',
	},
	{
		type: 'input',
		message: 'please enter manager office number',
		name: 'managerNumber',
	},
];
const confirmQuestion = [
	{
		type: 'list',
		message: 'what would you like to do next?',
		name: 'proceed',
		choices: ['add an engineer', 'add an intern', 'quit application'],
	},
];

// engineer questions
const engineerQuestions = [
	{
		type: 'input',
		message: 'please enter engineer name',
		name: 'engineerName',
	},
	{
		type: 'input',
		message: 'please enter engineer ID',
		name: 'engineerID',
	},
	{
		type: 'input',
		message: 'please enter engineer email',
		name: 'engineerEmail',
	},
	{
		type: 'input',
		message: 'please enter engineer github username',
		name: 'engineerGithub',
	},
];

// intern questions
const internQuestion = [
	{
		type: 'input',
		message: 'please enter intern name',
		name: 'internName',
	},
	{
		type: 'input',
		message: 'please enter intern ID',
		name: 'internID',
	},
	{
		type: 'input',
		message: 'please enter intern email',
		name: 'internEmail',
	},
	{
		type: 'input',
		message: 'please enter intern school',
		name: 'internSchool',
	},
];
