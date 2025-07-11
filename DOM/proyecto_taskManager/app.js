const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTask (); //Llamamos la función para saber si hay datos almacenados en el localStorage y que los inyecte en la web

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");

    const taskText = taskInput.value;
    console.log(taskText);

    if(taskText) {//Validación para cuando se ingrese texto se añada toda la lista con elementos
    taskList.append(frankestein(taskText));//Se llama la función que crea toda la lista con elementos

    storageTask (taskText); //Llamamos la función que almacena los datos de la tarea en el localstorage

    taskInput.value = ""; //Setea el valor de la edición de la tarea a vacio
    
    }
});

// function createTaskElement(task) { //Creamos funcion que agrega la lista con un container dentro
//   const li = document.createElement('li')
//   li.textContent = task
//   li.append(createBtnContainer('btn-container'));//Se inserta en el elemento lista el contenedor con span internos
//   return li
// }

// function createBtnContainer(className){ //creamos funcion de container con 2 elementos span dentro
//     const container = document.createElement('div');    
//     container.className = className;
//     container.append(createButton('Delete','delete-btn'), createButton('Edit','edit-btn'));//se inserta los span al contenedor
//     return container
// }

// function createButton(text, className) {//se crea funcion para crear los elementos span
//   const btn = document.createElement('span')
//   btn.textContent = text
//   btn.className = className
//   return btn
// }


//Unificamos las 3 funciones separadas en una sola función

function frankestein (task){//Creamos funcion que agrega la lista con un container dentro
  const li = document.createElement('li')
  li.textContent = task
  li.append(createBtnContainer('btn-container'));//Se inserta en el elemento lista el contenedor con span internos

        function createBtnContainer(className){ //Creamos que agrega 2 span al container
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
        taskItem.remove(taskItem);
        updateLocalStorage (); //Llamamos la función que trae las tareas actualizadas del localStorage
    }
};

function editTask (taskItem) {
    const newTask = prompt("Edit task: ",  taskItem.firstChild.textContent);
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage (); //Llamamos la función que trae las tareas actualizadas del localStorage
    }
};

//Almacenamos los datos de las task en el localstorage del navegador "Base de datos"
function storageTask (task){
    //JSON.parse() convierte una cadena de texto que esta en formato JSON a un objeto o array de JS (Esto para poder obtener los datos desde JS)
    //getItem() es un método del local storage que permite obtener los datos de este mismo
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); //estamos convirtiendo el texto de localstorage a un array de js

    tasks.push(task);//push agrega un elemento a un array existente

    //JSON.stringify() convierte un objeto o array en formato JSON (Esto para poderlo almacenar en la BD)
    //setItem() es un método del local storage que permite insertar datos en este mismo
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Insertamos los datos que estan almacenados en el localstorage al DOM, luego de que se refresque la página (esto para lograr la persistencia de los datos en la web, asi se refresque la página)
function loadTask (){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.forEach((task) => {
        taskList.appendChild(frankestein(task));        
    });
}

//Actualizamos el localstorage con los últimos cambios aplicados al DOM (edit or delete), para que cada que se refresque la página, el localstorage muestre los ultimos cambios realizados

function updateLocalStorage (){
   const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);

   localStorage.setItem("tasks", JSON.stringify(tasks));

   console.log(tasks);
}
