INSERT INTO `department` (department_name)
VALUES  ( "Sales"),
        ( "Engineering"),
        ( "Finance"),
        ( "Legal");

INSERT INTO `role` (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 110000, 2),
        ("Software Engineer", 90000, 2),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Lawyer", 190000, 4);

INSERT INTO `employee` (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Adam", "Hood", 3, NULL),
        (2, "Claire", "Alverson", 3, NULL),
        (3, "Kyle", "Curry", 4, 2),
        (4, "Phillip", "Phister", 4, 1),
        (5, "George", "Atkinson", 2, 6),
        (6, "Mike", "Mondello", 1, NULL),
        (7, "Ashley", "Rodriguez", 5, NULL),
        (8, "Dom", "Turreto", 6, 7),
        (9, "Matt", "Murdock", 7, NULL),
        (10, "Jessica", "Henwick", 8, 9);
