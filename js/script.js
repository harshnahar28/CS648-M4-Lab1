

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

  const employeeRowNew = document.createElement('tr');
  employeeRowNew.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${extension}</td>
    <td>${email}</td>
    <td>${department}</td>
    <td>
      <button class="btn btn-danger btn-sm deleteEmployeeBtn">Delete</button>
    </td>
  `;
  employees.appendChild(employeeRowNew);
  
  addEmployee.reset(); //Upon submission, the form should completely clear itself of the entered values.
  addEmployee.elements.id.focus(); //Upon submission, the user’s cursor should immediately return to the Employee ID field.

  numberOfEmployees++;
  var result = document.getElementById("empCount");
  result.value = numberOfEmployees;


});


const employeesDel = document.querySelector('#employees');

employeesDel.addEventListener('click', (x) => {
  if (x.target.classList.contains('deleteEmployeeBtn')) {
    const shouldDelete = confirm('Are you sure you want to delete this employee?');
    if (shouldDelete) {
      const row = x.target.closest('tr');
      employeesDel.deleteRow(row.rowIndex);
      numberOfEmployees--;
      var result = document.getElementById("empCount");
      result.value = numberOfEmployees;
    }
  }
});