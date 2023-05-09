let taskInput = document.getElementById("textarea");
let addBtn = document.getElementById("addbtn");
let random = document.querySelector(".random");
let text = document.querySelector("#your")
addBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (taskInput.value !== "" && text.value !== "") {
    const date = new Date();
    const newTask =`

    <div>
        <div class="data" style="color:white; background-color: black; height:200px; width:250px; display:flex; flex-direction:column;">
        <h1>${text.value}</h1>
        <div>${taskInput.value}</div>
        <div style="margin-top:5rem;">${date.toUTCString()}</div>
        </div>
    </div>
    `
    random.innerHTML+=(newTask);
    taskInput.value = "";
    text.value = "";
  }
});


clearBtn.addEventListener("click", function (e){
    clearAll();
})

function clearAll(){
    taskList.innerHTML='';
}