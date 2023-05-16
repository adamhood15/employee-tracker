const {prompt} = require('inquirer');
const mysql = require('mysql2');

//Connects to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ratita101418!',
        database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
);

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
            viewEmployees();
        } else if (response === 'View All Departments') {
            viewDepartments();
        } else if (response === 'View All Roles') {
            viewRoles();
        } else if (response === 'Add Department') {
            addDepartment();
        } else if (response === 'Add Role') {
            addRole();
        } else if (response === 'Add Employee') {
            addEmployee();
        } else if (response === 'Update Employee Role') {
            updateEmployeeRole();
        }

    } catch (err) {
        console.log(err);
    }
};

function viewEmployees() {
    db.query(`SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, e.manager_id 
                FROM employee as e
                INNER JOIN role as r ON e.role_id = r.id
                INNER JOIN  department as d ON r.department_id = d.id;`, function (err, results) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.table(results);
                    init();
                })
};

function viewDepartments() {
    db.query(`SELECT id, department_name AS Department FROM department`, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        init();
    });
};

function viewRoles() {
    db.query(`SELECT role.id, role.title, role.salary, department.department_name
             FROM role
            INNER JOIN department ON role.department_id = department.id`, function (err, results) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.table(results);
                init();
            })

};

async function addDepartment() {
        try {
            const addDept = await prompt(questionAddDepartment);
            const deptName = addDept.departmentName;

            db.query(`INSERT INTO department (department_name) VALUES (?)`, [deptName], function (err, results) {
                if (err) {
                    console.log(err);
                    return;
                } 
                init();
            })
        } catch (err) {
            console.log(err);
        }
};

async function addRole() {
    try {
        const addRole = await prompt(questionAddRole);
        const title = addRole.roleName;
        const salary = addRole.salary;
        const department_id = addRole.department_id;

        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, department_id], function (err, results) {
            if (err) {
                console.log(err);
                return;
            } 
            init();
        })
    } catch (err) {
        console.log(err);
    }
};

async function addEmployee() {
    try {
        const addEmployee = await prompt(questionAddEmployee);
        const firstName = addEmployee.employeeFirstName;
        const lastName = addEmployee.employeeLastName;
        const role = addEmployee.employeeRole;
        const manager = addEmployee.employeeManager;

        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, role, manager], function (err, results) {
            if (err) {
                console.log(err);
                return;
            } 
            init();
        })
    } catch (err) {
        console.log(err);
    }

};

 async function updateEmployeeRole() {

};


module.exports = {
    init,
    firstQuestion,
    questionAddDepartment,
    questionAddEmployee,
    questionAddRole
};