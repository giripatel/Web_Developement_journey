const data = [];

let selectedRow = "null";
// fethes the data form input feilds after submiting
const employeeData = () => {

  /* This approch is not suggested even though both gives the same result 
    You may ask why? 
    -->Seperation of concerns: Seperation between separates the creation of the object from the assignment of its properties. This separation makes your code more organized and easier to understand.
    -->Reusability: The second approach is more reusable because you can assign properties to the object at different times or in different parts of your code. 
    -->Clarity: The second approach is more explicit and easier to read, as it clearly shows the assignment of each property to the object.
    -->Error Handling: With the second approach, you can implement error handling and validation for input fields before assigning values to the object.
    -->Debugging: When debugging, it's easier to pinpoint issues with assignments and validate data when you assign properties individually, as in the second approach.

 /* const employee = {
    firstName  : document.getElementById("firstName").value,
    lastName  : document.getElementById("lastName").value,
    age : document.getElementById("age").value,
    salary  : document.getElementById("salary").value
  }; */

  const employee = {};
  employee["firstName"] = document.getElementById("firstName").value;
  employee["lastName"] = document.getElementById("lastName").value;
  employee["age"] = document.getElementById("age").value;
  employee["salary"] = document.getElementById("salary").value;

  data.push(employee);
  console.log(data);
  return employee;
};

// class the methods to perform operations
const onsubmit = (event) => {
  event.preventDefault();

  const employee = employeeData();
  if(selectedRow == "null"){
  insertData(employee);
  }else{
    updateForm(employee);
  }
  clearForm();
};

// Inserts data into table
const insertData = (employee) => {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.rows.length);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = employee.firstName;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = employee.lastName;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = employee.age;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = employee.salary;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button class="edit" onclick="editForm(this)">Edit</button> <button class="delete" onclick="deleteFrom(this)">Delete</button>'; // this represents the element

};

const editForm = (td)=>{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[3].innerHTML;
}

const updateForm = (employee) =>{
    selectedRow.cells[0].innerHTML = employee.firstName;
    selectedRow.cells[1].innerHTML = employee.lastName;
    selectedRow.cells[2].innerHTML = employee.age;
    selectedRow.cells[3].innerHTML = employee.salary;
}

const deleteFrom = (row)=>{
    selectedRow = row.parentElement.parentElement;
    document.getElementById('employeeList').deleteRow(selectedRow.rowIndex);
}
// Clear the input feilds after submiting the form
const clearForm = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("salary").value = "";
};
let form = document.getElementById("form");
form.addEventListener("submit", onsubmit);
