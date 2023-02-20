

var numberOfEmployees = 0;
const outputOfEmployeeCount = document.querySelector('#outputOfEmployeeCount');



const employees = document.querySelector('#employees');
const addEmployee = document.querySelector('#addForm');

addEmployee.addEventListener('submit', (x) => {

  event.preventDefault();
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const extension = document.getElementById("extension").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  addEmployeeToTable(id, name, extension, email, department);
  
  addEmployee.reset(); //Upon submission, the form should completely clear itself of the entered values.
  addEmployee.elements.id.focus(); //Upon submission, the user’s cursor should immediately return to the Employee ID field.

  numberOfEmployees++;
  var result = document.getElementById("empCount");
  result.value = numberOfEmployees;

});


const employeesTable = document.querySelector('#employees');

function addEmployeeToTable(id, name, extension, email, department) {
  const freshRow = employeesTable.insertRow();
  const idCell = freshRow.insertCell();
  const nameCell = freshRow.insertCell();
  const extensionCell = freshRow.insertCell();
  const emailCell = freshRow.insertCell();
  const departmentCell = freshRow.insertCell();
  const deleteBtnCell = freshRow.insertCell();

  idCell.appendChild(document.createTextNode(id));
  nameCell.appendChild(document.createTextNode(name));
  extensionCell.appendChild(document.createTextNode(extension));
  emailCell.appendChild(document.createTextNode(email));
  departmentCell.appendChild(document.createTextNode(department));


  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'deleteBtn');
  deleteButton.textContent = 'X';

  deleteBtnCell.appendChild(deleteButton);
}


const employeesDel = document.querySelector('#employees');

employeesDel.addEventListener('click', (x) => {
  if (x.target.classList.contains('deleteBtn')) {
    const question = confirm('Do you want to delete this employee?');
    if (question) {
      const row = x.target.closest('tr');
      employeesDel.deleteRow(row.rowIndex);
      numberOfEmployees--;
      var result = document.getElementById("empCount");
      result.value = numberOfEmployees;
    }
  }
});
