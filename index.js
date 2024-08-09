// Write your solution in this file!


const employee = {
    name: "Andrew",
    streetAddress: "lalala",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }

const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam")

function beforeEach() {
    for (const key in employee) {
      delete employee[key];
    }
  
    employee.name = 'Sam';
  };
  
  beforeEach()

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }

  const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')


  function deleteFromEmployeeByKey(obj){
    const newObj = { ...obj };
  
    delete newObj.name
  
    return newObj
  }


  let newEmployee3 = deleteFromEmployeeByKey(employee, "name")

  beforeEach()

  function destructivelyDeleteFromEmployeeByKey(obj){
    delete obj.name

    return obj
  }

  let newEmployee4 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name")