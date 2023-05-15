SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, e.manager_id 
FROM employee as e
    INNER JOIN role as r ON e.role_id = r.id
    INNER JOIN  department as d ON r.department_id = d.id;