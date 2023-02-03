document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#create-task-form").addEventListener("submit", (e) =>{
      e.preventDefault();
      createTask(e.target.create_task.value);
    })
});

function createTask(create_task) {
  let p = document.createElement("p");
  p.textContent = create_task;
  document.querySelector('#list').appendChild(p);}

  
