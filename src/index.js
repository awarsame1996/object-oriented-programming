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

const init = async () => {
	// array to store engineers
	const engineerArray = [];
	// array to store interns
	const internArray = [];
	// manager's questions
	// const managerAnswers = await inquirer.prompt(managerQuestions);
	// console.log(managerAnswers);
	let inProgress = true;
	while (inProgress) {
		const { proceed } = await inquirer.prompt(confirmQuestion);
		if (proceed === 'add an engineer') {
			const engineerAnswers = await inquirer.prompt(engineerQuestions);
			const engineer = engineerAnswers;
			engineerArray.push(engineer);
		}
		if (proceed === 'add an intern') {
			const internAnswers = await inquirer.prompt(internQuestions);
			const intern = internAnswers;
			internArray.push(intern);
		}
		if (proceed === 'quit application') {
			inProgress = false;
			console.log(engineerArray);
			console.log(internArray);
		}
	}
};

init();
