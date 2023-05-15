const {prompt} = require('inquirer');

//Starting Prompt
questionOne = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    },
];

async function init() {
    try {
        const firstAnswer = await prompt(questionOne);
        console.log(`${JSON.stringify(firstAnswer)} stored!`);
        console.log(firstAnswer);

    } catch (err) {
        console.log(err);
    }
}



init();