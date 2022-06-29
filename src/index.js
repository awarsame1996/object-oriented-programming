const inquirer = require('inquirer');
const fs = require('fs');

//generate the card for manager

const managerCard = (manager) => {
	return `<div class="col s12 m6">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">${manager.name}</span>
            <p>${manager.id}/p>
        </div>
        <div class="card-action">
            <a href="mailto:">${manager.email}</a>
            <p>${manager.number}</p>
        </div>
    </div>
</div>`;
};
const engineerCard = (engineer) => {
	if (each instanceof engineer) {
		return `<div class="col s12 m6 l3">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">${engineer.name}</span>
            <p>${engineer.id}.No</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/${engineer.github}">github</a>
            <a href="mailto:">${engineer.email}</a>
        </div>
    </div>
</div>`;
	}
};
const internCard = (intern) => {
	if (each instanceof intern) {
		return `<div class="col s12 m6 l3">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">${intern.name}</span>
            <p>${intern.id}.No</p>
        </div>
        <div class="card-action">
            <p>${intern.school}</p>
            <a href="mailto:">${intern.email}</a>
        </div>
    </div>
</div>`;
	}
};

// team name question
const teamNameQuestion = [
	{
		type: 'confirm',
		message: 'does your team have a name?',
		name: 'confirmTeamName',
	},
	{
		type: 'input',
		message: 'please enter team name',
		name: 'teamName',
		when: (answers) => answers.confirmTeamName === true,
	},
];
// manager questions
const managerQuestions = [
	{
		type: 'input',
		message: 'please enter manager name',
		name: 'name',
	},
	{
		type: 'input',
		message: 'please enter manager ID',
		name: 'id',
	},
	{
		type: 'input',
		message: 'please enter manager email',
		name: 'email',
	},
	{
		type: 'input',
		message: 'please enter manager office number',
		name: 'number',
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
		name: 'name',
	},
	{
		type: 'input',
		message: 'please enter engineer ID',
		name: 'id',
	},
	{
		type: 'input',
		message: 'please enter engineer email',
		name: 'email',
	},
	{
		type: 'input',
		message: 'please enter engineer github username',
		name: 'github',
	},
];

// intern questions
const internQuestion = [
	{
		type: 'input',
		message: 'please enter intern name',
		name: 'name',
	},
	{
		type: 'input',
		message: 'please enter intern ID',
		name: 'id',
	},
	{
		type: 'input',
		message: 'please enter intern email',
		name: 'email',
	},
	{
		type: 'input',
		message: 'please enter intern school',
		name: 'school',
	},
];

const init = async () => {
	// array to store engineers
	const engineers = [];
	// array to store interns
	const interns = [];
	// team name question
	const { teamName, confirmTeamName } = await inquirer.prompt(
		teamNameQuestion
	);
	if (!confirmTeamName) {
		const team = 'team';
		console.log(team);
	} else {
		const team = teamName;
		console.log(team);
	}

	// manager's questions
	const manager = await inquirer.prompt(managerQuestions);
	console.log(manager);
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
