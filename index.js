
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, name) {
    const minusKey = {...employee};
    delete minusKey.name;
    return minusKey;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
};

const employee = {
    name: "Andrea",
    streetAddress: "855 Pride Ln",
};
