const employeeCtrl = {};

const Employee = require('../models/Employee');

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    if(!employees || employees.length === 0){
        return res.send({
            message: "No Employees"
        })
    }
    return res.json(employees);
}

employeeCtrl.createEmployee = async(req, res) => {
    if(!req.body.name || !req.body.position || !req.body.office || !req.body.salary){
        return res.send({
            message: "Body Empty"
        })
    }
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    return res.send({
        message: "Employee Created"
    })
}

employeeCtrl.getEmployee = async(req, res) => { 
    const { id } = req.params;

    const result = await Employee.findById(id);


    return res.json(result);
}


employeeCtrl.editEmployee = async(req, res) => { 
    const { id } = req.params;

    const result = await Employee.findById(id);

    if(!result){
        return res.send({
            message: "The employee does not exist"
        })
    }

    await Employee.findByIdAndUpdate(id, req.body);

    return res.send({
        message: "Employee Updated"
    })
}

employeeCtrl.deleteEmployee = async(req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);

    return res.send({
        message: "Employee Deleted"
    })

 }


module.exports = employeeCtrl;