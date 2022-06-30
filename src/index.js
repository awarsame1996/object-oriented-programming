const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//generate the card for manager

const generateHtml = (manager, interns, engineers, team) => {
	const engineerCard = engineers
		.map((engineer) => {
			return `<div class="col s12 m6 l3">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${engineer.name}</span>
                <p>Engineer ID: ${engineer.id}</p>
            </div>
            <div class="card-action">
                <a href="https://github.com/${engineer.github}">github</a>
                <a href="mailto:">email: ${engineer.email}</a>
            </div>
        </div>
    </div>`;
		})
		.join('');
	const internCard = interns
		.map((intern) => {
			return `<div class="col s12 m6 l3">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${intern.name}</span>
                <p>Intern ID: ${intern.id}</p>
            </div>
            <div class="card-action">
                <p>school: ${intern.school}</p>
                <a href="mailto:">email: ${intern.email}</a>
            </div>
        </div>
    </div>`;
		})
		.join('');
	return `<!DOCTYPE html>
    <html>
        <head>
            <!--Import Google Icon Font-->
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <!--Import materialize.css-->
            <!-- Compiled and minified CSS -->
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            />
    
            <!--Let browser know website is optimized for mobile-->
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </head>
    
        <body>
            <nav>
                <div class="nav-wrapper">
                    <a href="" class="brand-logo center-align">${team}</a>
                </div>
            </nav>
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        <i class="material-icons">person</i>Manager
                    </div>
                    <div class="collapsible-body">
                        <div class="row">
                        <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Name: ${manager.name}</span>
                <p>Manager ID: ${manager.id}</p>
            </div>
            <div class="card-action">
                <a href="mailto:">${manager.email}</a>
                <p>Office Number: ${manager.number}</p>
            </div>
        </div>
    </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header">
                        <i class="material-icons">build</i>Engineers
                    </div>
                    <div class="collapsible-body">
                        <div class="row">
                        ${engineerCard}
                        </div>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header">
                        <i class="material-icons">assignment_ind</i>Interns
                    </div>
                    <div class="collapsible-body">
                        <div class="row">
                        ${internCard}
                        </div>
                    </div>
                </li>
            </ul>
    
            <!--JavaScript at end of body for optimized loading-->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
            <script src="./assets/js/index.js"></script>
        </body>
    </html>
    `;
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
const internQuestions = [
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

	const team = teamName;
	if (!confirmTeamName) {
		const team = 'team';
		return team;
	}

	// // manager's questions
	const managerAnswer = await inquirer.prompt(managerQuestions);
	const managers = new Manager(managerAnswer);
	const manager = managerAnswer;
	let inProgress = true;
	while (inProgress) {
		const { proceed } = await inquirer.prompt(confirmQuestion);
		if (proceed === 'add an engineer') {
			const engineerAnswers = await inquirer.prompt(engineerQuestions);
			const engineer = new Engineer(engineerAnswers);
			engineers.push(engineerAnswers);
		}
		if (proceed === 'add an intern') {
			const internAnswers = await inquirer.prompt(internQuestions);
			const intern = new Intern(internAnswers);
			interns.push(internAnswers);
		}
		if (proceed === 'quit application') {
			inProgress = false;
		}
	}
	const generatedHtml = generateHtml(manager, interns, engineers, team);
	fs.writeFileSync('./dist/teams.html', generatedHtml);
};

init();
