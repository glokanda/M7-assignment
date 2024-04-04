// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const employeesTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;
document.getElementById("empCount").textContent = empCount;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const extension = document.getElementById("extension").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  const newRow = employeesTable.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  const cellID = newRow.insertCell();
  const cellName = newRow.insertCell();
  const cellExt = newRow.insertCell();
  const cellEmail = newRow.insertCell();
  const cellDepartment = newRow.insertCell();
  const cellDelete = newRow.insertCell();

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellID.textContent = id;
  cellName.textContent = name;
  cellExt.textContent = extension;
  cellEmail.textContent = email;
  cellDepartment.textContent = department;

  // CREATE THE DELETE BUTTON
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // DELETE EMPLOYEE FUNCTIONALITY
  deleteButton.addEventListener("click", () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      const rowIndex = e.target.closest("tr").rowIndex;
      employeesTable.deleteRow(rowIndex);
      empCount--;
      document.getElementById("empCount").textContent = empCount;
    }
  });

  // ADD THE DELETE BUTTON TO THE CELL
  cellDelete.appendChild(deleteButton);

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus();

  // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
  empCount++;
  document.getElementById("empCount").textContent = empCount;
});
