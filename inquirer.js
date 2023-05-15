const {prompt} = require('inquirer');

//Starting Prompt
questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the departments name.'
    },
    {
        type: 'input',
        name: 'roleName',
        message: "Enter the name of the role you'd like to add"
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: "Enter the salary of the role you'd like to add"
    },
    {
        type: 'input',
        name: 'roleDepartment',
        message: "Enter the department of the role you'd like to add"
    },
    {
        type: 'input',
        name: 'employeeFirstName',
        message: "Enter the first name of the employee you'd like to add"
    },
    {
        type: 'input',
        name: 'employeeLastName',
        message: "Enter the last name of the employee you'd like to add"
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: "Enter the role of the employee you'd like to add"
    },
    {
        type: 'input',
        name: 'employeeManager',
        message: "Enter the manager of the employee you'd like to add"
    },
  
];



async function init() {
    try {
        const firstAnswer = await prompt(questions);
        console.log(firstAnswer.options);

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    init,
    questions
}