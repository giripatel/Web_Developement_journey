
let selectedRow = null;
const onsubmit = (event)=>{
    event.preventDefault();

    const todo = fetchTask();
    if(selectedRow == null){
    createList(todo);
    }else{
        console.log("Entered Update")
        updateTask(todo);
    }

    clearList();
}

const createList = (todo)=>{
    let tbody = document.getElementById('tbody');
    let row = tbody.insertRow();
    // console.log(row);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = todo.task;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = todo.date;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = `<button id="edit" onclick="editTask(this)">Edit</button><button id="delete" onclick="deleteTask(this)">Delete</button>`;
}
const fetchTask = ()=>{
    const tasks = {};
    tasks["task"] = document.getElementById('task').value;
    tasks["date"] = document.getElementById('date').value;
    return tasks;
}

const editTask = (ele)=>{
    selectedRow = ele.parentElement.parentElement;
    document.getElementById('task').value = selectedRow.cells[0].innerHTML;
    document.getElementById('date').value = selectedRow.cells[1].innerHTML;
}

const updateTask = (todo)=>{
    console.log(selectedRow.cells[0]);
    selectedRow.cells[0].innerHTML = todo.task;
    selectedRow.cells[1].innerHTML = todo.date;
    selectedRow = null;
}

const deleteTask = (ele)=>{
    // ele.parentElement.parentElement.remove();
    let completed = ele.parentElement.parentElement;
    completed.cells[0].innerHTML = `<del>${completed.cells[0].innerHTML} </del>`
}

const clearList = ()=>{
    document.getElementById('task').value = "";
    document.getElementById('date').value = "";
}

let form = document.getElementById('form');
form.addEventListener('submit',onsubmit)