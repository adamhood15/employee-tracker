const {prompt} = require('inquirer');

//Starting Prompt
firstQuestion = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    }
];

questionAddRole = [
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
    }
];

questionAddEmployee = [
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
    }
];

questionAddDepartment = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the departments name.'
    }
]


//Function that takes the user response and passes it through conditional logic depending on the users choice
async function init() {
    try {
        const firstAnswer = await prompt(firstQuestion);
        const response = firstAnswer.options;

        if (response === 'View All Employees') {
            console.log(response);

        } else if (response === 'View All Departments') {
            console.log(response);

        } else if (response === 'View All Roles') {
            console.log(response);

        } else if (response === 'Add Department') {
            console.log(response);

        } else if (response === 'Add Role') {
            console.log(response);

        } else if (response === 'Add Employee') {
            console.log(response);

        } else if (response === 'Update Employee Role') {
            console.log(response);

        }

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    init,
    firstQuestion,
    questionAddDepartment,
    questionAddEmployee,
    questionAddRole
}