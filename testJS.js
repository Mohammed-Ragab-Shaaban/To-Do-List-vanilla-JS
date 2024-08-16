let changeHeading = document.getElementById(`changeHeading`);
let listItemsAll = document.getElementById(`changeH1All`);
let listItemsToDo = document.getElementById(`changeH1ToDo`);
let listItemsCompleted = document.getElementById(`changeH1Completed`);
let labalDiv = document.querySelector(`.labalDiv`);

let taskName = document.getElementById(`taskName`);
let taskDate = document.getElementById(`taskDate`);

let tasks = document.getElementById(`tasks`);
let tasksToDo = [
  { name: "Task 1", taskDate: "25-7-2024", status: false },
  { name: "Task 2", taskDate: "25-7-2024", status: true },
  { name: "Task 3", taskDate: "25-7-2024", status: false },
  { name: "Task 4", taskDate: "25-7-2024", status: true },
];

function renderTasks() {
  tasks.innerHTML = "";
  tasksToDo.forEach((el, index) => {
    tasks.innerHTML += `<div class="d-flex mb-2 justify-content-between border rounded-4 p-2 align-items-center">
                              <div>
                                 <h5 class="m-0">${el.name}</h5>
                                 <p class="m-0">${el.taskDate}</p>
                              </div>
                              <div id="IconDiv" onclick="toggleTask(${index});event.stopPropagation()">
                              <span class="deleteIcon"><i  onclick="deleteSingleTask(${index});event.stopPropagation()" style="display:none; color: red; margin-right: 10px;" class="fa-solid fa-circle-xmark"></i></span>
                                  ${
                                    el.status == false
                                      ? '<i class="fa-regular fa-circle"></i>'
                                      : '<i class="fa-solid fa-circle-check"></i>'
                                  } 
                              </div>
                           </div>`;
  });
}
renderTasks();

function deleteSingleTask(y) {
  tasksToDo.splice(y, 1);
  console.log(y);
  renderTasks();
}

// onclick="addTaskToTasksToDo()"
function addTaskToTasksToDo() {
  let obj = { status: false };
  let tn = taskName.value;
  let td = taskDate.value;
  if (taskName.value != "" && taskDate.value != "") {
    obj.name = tn;
    obj.taskDate = td;
    tasksToDo.push(obj);
  } else {
    null;
  }
  renderTasks();
}

function toggleTask(x) {
  if (tasksToDo[x].status == false) {
    tasksToDo[x].status = true;
  } else {
    tasksToDo[x].status = false;
  }
  renderTasks();
}

function changeH1All() {
  changeHeading.innerHTML = "";
  let newH1 = listItemsAll.innerHTML;
  changeHeading.innerHTML = newH1;
  renderTasks();
}

function changeH1ToDo() {
  changeHeading.innerHTML = "";
  let newH1 = listItemsToDo.innerHTML;
  changeHeading.innerHTML = newH1;

  renderTasks();
}

function changeH1Completed() {
  changeHeading.innerHTML = "";
  let newH1 = listItemsCompleted.innerHTML;
  changeHeading.innerHTML = newH1;

  let newwTasksToDo = tasksToDo.filter(function (e) {
    return e.status == true;
  });

  console.log(newwTasksToDo);
  tasksToDo = newwTasksToDo;
  renderTasks();
}

function addTask() {
  labalDiv.classList.replace("d-none", "d-flex");
}
function hideLabal() {
  labalDiv.classList.replace("d-flex", "d-none");
}

function HideAndShowDeleteIcon() {
  let deleteIcon = document.querySelectorAll(`.deleteIcon i`);
  deleteIcon.forEach((e) => {
    if (e.style.display == "none") {
      e.style.display = "inline";
    } else {
      e.style.display = "none";
    }
  });
}




