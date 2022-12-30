const { Router } = require('express');
const employeeCtrl = require('../controllers/employees.controller');

const router = Router();

// CRUD
// CREATE
router.post('/', employeeCtrl.createEmployee);

// READ
router.get('/', employeeCtrl.getEmployees);
router.get('/:id', employeeCtrl.getEmployee);

// UPDATE
router.put('/:id', employeeCtrl.editEmployee);

// DELETE
router.delete('/:id', employeeCtrl.deleteEmployee);


module.exports = router;