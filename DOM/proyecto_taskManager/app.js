const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTask(); //Llamamos la función para saber si hay datos almacenados en el localStorage y que los inyecte en la web

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    
    const taskText = taskInput.value;
    const taskDateText = taskDate.value;
    

    if(taskText) {//Validación para cuando se ingrese texto se añada toda la lista con elementos
    taskList.append(frankestein(taskText, taskDateText));//Se llama la función que crea toda la lista con elementos

    storageTask(taskText,taskDateText); //Llamamos la función que almacena los datos de la tarea en el localstorage

    }
});

function frankestein (task, taskDateText){//Creamos funcion que agrega la lista con un container dentro
  const li = document.createElement('li')
  //li.textContent = task
  const text_Task = document.createElement('p');
  text_Task.className = 'task-text';
  text_Task.textContent = task;
  li.appendChild(text_Task);
  li.append(addDate('task-date', taskDateText), createBtnContainer('btn-container'));//Se inserta en el elemento lista el contenedor con span internos

        function addDate(className, dateText) { //Creamos funcion para agregar fecha a la task
            if (!dateText) {
                const taskDate = document.getElementById("task-date");
                dateText = taskDate.value;
            }
            const date = document.createElement('p');
            date.className = className;
            date.textContent = dateText;
            return date;            
        }

        function createBtnContainer(className){ //Creamos funcion que agrega 2 span al container
            const container = document.createElement('div');    
            container.className = className;
            container.append(createButton('Delete','delete-btn'), createButton('Edit','edit-btn'));//se inserta los span al contenedor
            return container
        
        }
        function createButton(text, className) {//Creamos funcion para crear los elementos span
            const btn = document.createElement('span')
            btn.textContent = text
            btn.className = className
        return btn
        }             
        return li
      }

    taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {
        deleteTask (event.target.parentElement.parentElement);
    }else if(event.target.classList.contains("edit-btn")){
        editTask (event.target.parentElement.parentElement);
    }
});

function deleteTask (taskItem) {
    if (confirm("Are you sure you want to delete this task?")){
        taskItem.remove();
        updateLocalStorage (); //Llamamos la función que trae las tareas actualizadas del localStorage
    }
};

function editTask (taskItem) {
    const newTask = prompt("Edit task: ",  taskItem.firstChild.textContent);
    const newDate = prompt("Edit date: ",  taskItem.children[1].textContent);

    if(newTask !== null && newDate !== null){
        taskItem.firstChild.textContent = newTask;
        const dateElem = taskItem.querySelector('.task-date');
        if (dateElem) {
            dateElem.textContent = newDate;
        }
        updateLocalStorage (); //Llamamos la función que trae las tareas actualizadas del localStorage
    }
};

//Almacenamos los datos de las task en el localstorage del navegador "Base de datos"

 //JSON.parse() convierte una cadena de texto que esta en formato JSON a un objeto o array de JS (Esto para poder obtener los datos desde JS)
    //getItem() es un método del local storage que permite obtener los datos de este mismo
function storageTask (task, taskDateText) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");//estamos convirtiendo el texto de localstorage a un array de js
    tasks.push({ text: task, date: taskDateText });//push agrega un elemento a un array existente

    //JSON.stringify() convierte un objeto o array en formato JSON (Esto para poderlo almacenar en la BD)
    //setItem() es un método del local storage que permite insertar datos en este mismo
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//Insertamos los datos que estan almacenados en el localstorage al DOM, luego de que se refresque la página (esto para lograr la persistencia de los datos en la web, asi se refresque la página)
function loadTask () {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(({ text, date }) => {
        taskList.appendChild(frankestein(text, date));});

}

//Actualizamos el localstorage con los últimos cambios aplicados al DOM (edit or delete), para que cada que se refresque la página, el localstorage muestre los ultimos cambios realizados
function updateLocalStorage () {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => {
        const text = li.firstChild.textContent;
        const dateElem = li.querySelector('.task-date');
        const date = dateElem ? dateElem.textContent : "";
        return { text, date };
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    // console.log(tasks); // Uncomment for debugging updated tasks
}


const currentTheme = localStorage.getItem("theme");
const themeToggleButton = document.querySelector(".switch");
const switchStatus = document.querySelector("#switch-status");

themeToggleButton.addEventListener("change", () => {
    console.log("entro");

    document.body.classList.toggle("dark-theme");

    // const theme = document.body.classList.contains("dark-theme") ? "dark" : "light"; //Ternary Operator

    //Funcion convencional (Forma básica del Ternary Operator anteriormente usado)
    if (document.body.classList.contains("dark-theme")) {
        console.log("entro2");
        switchStatus.textContent = "Light Mode 🌞"
        theme = "dark";
    } else {
        console.log("entro3");
        switchStatus.textContent = "Dark Mode 🌚"
        theme = "light";
    }
    localStorage.setItem("theme", theme);
});

if(currentTheme === "dark"){
    document.body.classList.add("dark-theme");
}
