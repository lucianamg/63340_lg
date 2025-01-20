// Organizador Tareas
function getSpaceName(){
    //las variables de los attempt se declaran antes del DO
    let spaceIdentified = false;
    let attemptSpace = 3;
    let spaceName;
    do {
        spaceName = prompt ("ingresa el nombre de tu espacio familiar"+ " ( por ejemplo Casa o Familia )").toLowerCase();
        console.log("intentos = " + attemptSpace);
        if (spaceName === null || spaceName === ""){
            alert("Debes ingresar el nombre de tu espacio familiar");
            console.log("ingresó null la familia");
            break;
        }
        if ((spaceName === "admin" || spaceName === "casa" || spaceName === "cc") && attemptSpace>=1){
            console.log("ingresó bien la familia");   //lo dejo pasar si escribe familia o casa
            spaceIdentified = true;
            //alert("Hola " + spaceName); //saco los alert para que seguidamente pida user
        }else{ 
            alert("No se registró la familia " + spaceName);
            attemptSpace--
            console.log("ingresó mal la familia " + attemptSpace);

            if (attemptSpace<1){
                alert("Has hecho varios intentos fallidos, quieres registrarte o necesitas ayuda con tu espacio familiar?");
                alert("Actualmente no hay proceso para recuperar tu Espacio, recargá y empezá de nuevo con los valores sugeridos en cada paso. Gracias!");
                console.log("spaceName " + spaceName + ", spaceIdentified " + spaceIdentified);
                console.log("ingresó mal la familia 3 veces");
                break;
            }
        }
    } while (spaceIdentified === false);
    return [spaceName, spaceIdentified];// para sacar dos valores de un return
}
function login (){
    let returnGetSpaceName = getSpaceName ();
    let spaceName = returnGetSpaceName[0];
    let spaceIdentified = returnGetSpaceName[1];
    if (spaceName === null || spaceName === "" || spaceIdentified !== true){
        return
    }
    console.log("spaceName " + spaceName + ", spaceIdentified " + spaceIdentified);
    //let userName = getUser();
//}
    // PARA PASS
//function stopLogin2 (){
    let returnGetUser = getUser ();
    let user = returnGetUser[0];
    let userIdentified = returnGetUser[1];
    if (user === null || user === "" || userIdentified !== true){
        return
    }
    console.log("userName " + user + ", userIdentified " + userIdentified);
    //let pass = getPass();
    let returnPass = getPass ();
    let passw = returnPass[0];
    let passOk = returnPass[1];
    if (passw === null || passw === "" || passOk !== true){
        return
    }
    //console.log("TENEMOS "+ "Pass " + passw + ", pass ok " + passOk);
    return [user, spaceName];
}
function getUser(){
    let userIdentified = false;
    let attemptUser = 3;
    let userName;
    do {
        userName = prompt ("ingresa tu usuario"+ " ( por ejemplo User o Admin )");
        console.log("intentos = " + attemptUser);
        if (userName === null || userName === ""){
            alert("Debes ingresar tu usuario");
            console.log("ingresó null el usuario");
            break;
        }
        if ((userName === "User" || userName === "Admin" || userName === "aa") && attemptUser>=1){
            console.log("ingresó bien el usuario");  
            userIdentified = true;
            //alert("Hola " + userName); //saco los alert para que seguidamente pida pass
        }else{ 
            alert("No se registró el usuario " + userName);
            attemptUser--
            console.log("ingresó mal el usuario, quedan " + attemptUser + " intentos." );

            if (attemptUser<1){
                alert("Has hecho varios intentos fallidos, quieres recuperar tu usuario?");
                alert("Actualmente no hay proceso para recuperar tu usuario, recargá y empezá de nuevo con los valores sugeridos en cada paso. Gracias!");
                console.log("userName " + userName + ", userIdentified " + userIdentified);
                console.log("ingresó mal el usuario 3 veces");
                break;
            }
        }
    } while (userIdentified === false);
    return [userName, userIdentified];
}
function getPass(){
    let passOk = false;
    let attemptPass = 3;
    let pass;
    do {
        pass = prompt ("ingresa tu contraseña"+ " ( por ejemplo pass o Dejamentrar )");
        console.log("intentos = " + attemptPass);
        if (pass === null || pass === ""){
            alert("Debes ingresar tu contraseña");
            console.log("ingresó null la contraseña");
            break;
        }
        if ((pass === "pass" || pass === "Dejamentrar" || pass === "pp") && attemptPass>=1){
            console.log("ingresó bien la contraseña");  
            passOk = true;
        }else{ 
            alert("La contraseña es incorrecta ");
            attemptPass--
            console.log("ingresó mal la contraseña, quedan " + attemptPass + " intentos." );

            if (attemptPass<1){
                alert("Has hecho varios intentos fallidos, quieres recuperar tu contraseña?");
                alert("Actualmente no hay proceso para recuperar tu contraseña, recargá y empezá de nuevo con los valores sugeridos en cada paso. Gracias!");
                console.log("Ingresó " + pass + ", pass ok " + passOk);
                console.log("ingresó mal la contraseña 3 veces");
                break;
            }
        }
    } while (passOk === false);
    return [pass, passOk];
}
function sayHello(){// deberia hacer hide del cuadro login y del cuadro hint, y mostrar las tareas para ese usuario y luego las demas tareas de la casa
    let getFinalData = login(); // la fc login devuelve user y spacename
    let finalSpaceName = getFinalData[1];
    let finalUserName = getFinalData[0];
    console.log(finalUserName + finalSpaceName);
    alert("Bienvenido/a " +  finalUserName + " del Espacio ´" + finalSpaceName + "´! tocá aceptar para continuar.");
}
//sayHello(); COMENTO ESTO PARA QUE NO TENGAN QUE HACER TODOS ESTOS PRIMEROS PASOS EN LAS PRUEBAS DE LA 3er PRE-ENTREGA


//-------INICIA FUNCION NEW TASK
let tasksCount = 0;
let taskList = [];

function newTask(){ 
    const mainElement = document.getElementById("mainContent");
    
    if (document.getElementById("newTaskForm")) {  
        return;
    } // Verifico si ya existe un formulario activo, porque pasaba que al no completarlos y apretar crear nuevamente se creaban forms paralelos

    const existingMessage = document.getElementById("successMessage");
    if (existingMessage) {
    existingMessage.remove();
    } // esto es para que borre el mensaje de tarea creada

    let newTaskForm = document.createElement("div");
    newTaskForm.innerHTML = `
        <form class="newTaskForm" id="newTaskForm">
        
            <label for="title"></label>
            <input type="text" id="taskTitle" name="taskTitle" placeholder="Ingresa el título de la tarea"> 
            <span class="error" id="taskTitleError"></span>
            
            <label for="description"></label>
            <textarea id="taskDescription" name="taskDescription" placeholder="Ingresa una descripción de la tarea"></textarea>
            <span class="error" id="taskDescriptionError"></span>
            
            <label for="userAssigned"></label>
            <input type="text" id="userAssigned" name="userAssigned" placeholder="Ingresa el tasker">
            <span class="error" id="userAssignedError"></span>
            
            <label for="status"></label>
            <input type="text" id="taskStatus" name="taskStatus" placeholder="Ingresa el Estado actual de la tarea (to start, WIP, done)">
            <span class="error" id="taskStatusError"></span>
            
            <label for="deadline"></label>
            <input type="text" id="taskDeadline" name="taskDeadline" placeholder="Ingresa la fecha para la cual debe terminarse la tarea">
            <span class="error" id="taskDeadlineError"></span>
            
            <label for="frequency"></label>
            <input type="text" id="taskFrequency" name="taskFrequency" placeholder="Ingresa la frecuencia de la tarea">
            <span class="error" id="taskFrequencyError"></span>
            
            <button type="submit" class="taskSubmitButton">Crear Tarea</button>
        </form>
    `; 
    
    secondSection.appendChild(newTaskForm);
    
    const form = document.getElementById("newTaskForm");// Agrega evento al formulario
    form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    console.log("Formulario enviado"); // quitar

    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDescription").value.trim();
    const dateCreated = new Date()
    const userAssigned = document.getElementById("userAssigned").value.trim();
    const status = document.getElementById("taskStatus").value.trim();
    const deadline = document.getElementById("taskDeadline").value.trim();
    const frequency = document.getElementById("taskFrequency").value.trim();

    let hasErrors = false;
    if (!title || title.trim() === "") {
        document.getElementById("taskTitleError").textContent = "Debes ingresar un titulo."; 
        hasErrors = true;
    }else{
            document.getElementById("taskTitleError").textcontent = "";//borro el mensaje
        }
    if (!description || description.trim() === "") {
        document.getElementById("taskDescriptionError").textContent = "Debes ingresar una descripción.";
        hasErrors = true;
    }else{
            document.getElementById("taskDescriptionError").textcontent = "";
    }
    if (!userAssigned || userAssigned.trim() === "") {
        document.getElementById("userAssignedError").textContent = "Debes ingresar un Tasker.";
        hasErrors = true;
    }else{
            document.getElementById("userAssignedError").textcontent = "";
    }
    if (!status || status.trim() === "") {
        document.getElementById("taskStatusError").textContent = "Debes ingresar un Estado.";
        hasErrors = true;
    }else{
            document.getElementById("taskStatusError").textcontent = "";
    }
    if (!deadline && !frequency) {
        document.getElementById("taskDeadlineError").textContent =
          "Debes ingresar una fecha de finalización o una frecuencia.";
        document.getElementById("taskFrequencyError").textContent =
          "Debes ingresar una fecha de finalización o una frecuencia.";
        hasErrors = true;
      } else {
        document.getElementById("taskDeadlineError").textContent = "";
        document.getElementById("taskFrequencyError").textContent = "";
      }
      if (hasErrors) {
      return;
    }

    let newTask = new task (title,description,dateCreated,userAssigned,status,deadline,frequency); 
    taskList.push(newTask);
    tasksCount++;
    saveTasksToLS();//guardo las tareas a medida que se generan
    displayTasks(); //voy mostrando las tareas que hay
    console.table(taskList);
    console.log("Numero total de tareas creadas hasta el momento: "+tasksCount);

    const successMessage = document.createElement("p");
    successMessage.textContent = "Tarea creada exitosamente.";
    successMessage.id = "successMessage";
    successMessage.style.color = "green"; 
    secondSection.appendChild(successMessage);
    //form.reset();// Limpio el formulario y errores - ver si esto afecta a localStorage
    form.remove();//quito el form luego de completarlo y fuerzo a que presione nuevamente en NewTask
    });
}//-------FIN FUNCION NEW TASK

function statusFilter(){
    let input = prompt("ingresá un status para filtrar como Start, Done o WIP").toLowerCase();
    console.log("su input fue: " +input);
    let filterResult = taskList.filter((task) => task.taskStatus.toLowerCase().includes(input));
    console.log("filterResult es: " +filterResult);
    if (filterResult.length > 0) {
        console.log("entró en el IF de filterresultlenght >0");
        let taskTitles = filterResult.map((task) => task.taskTitle).join(", ");
        alert("las tareas que conciden con ese estado son "+ taskTitles);
    }else{
        alert("no se encontraron tareas con ese estado.")
        }
}
function loadTasksFromLS() {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
        // Si hay tareas guardadas en localStorage, cargarlas
        taskList = JSON.parse(storedTasks);
        tasksCount = taskList.length;
    } else {
        // Si no hay tareas guardadas, cargo las tareas de prueba
        for (let key in taskTest) {
            taskList.push(taskTest[key]);
        }
        tasksCount = taskList.length;
    }
}
function saveTasksToLS(){
    localStorage.setItem("taskList", JSON.stringify(taskList));
}
function displayTasks() {
    
    const thirdSection = document.getElementById("thirdSection");
    thirdSection.innerHTML = ""; // Limpia todo lo que contiene la sección

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasksContainer"); //Creo un div que luego contendrá las tareas

    taskList.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("taskItem"); // Recorre taskList y crea un div para cada tarea
        taskDiv.innerHTML = `
            <h1>Tarea</h1>
            <p><strong>Título:</strong> ${task.taskTitle}</p>
            <p><strong>Descripción:</strong> ${task.taskDescription}</p>
            <p><strong>Fecha Creada:</strong> ${task.taskDateCreated}</p>
            <p><strong>Tasker:</strong> ${task.taskUserAssigned}</p>
            <p><strong>Estado:</strong> ${task.taskStatus}</p>
            <p><strong>Deadline:</strong> ${task.taskDeadline || "No especificado"}</p>
            <p><strong>Frecuencia:</strong> ${task.taskFrequency || "No especificada"}</p>
        `;
        const buttonEditTask = document.createElement("button");
        buttonEditTask.innerHTML = "Editar Tarea";
        buttonEditTask.classList.add("editTaskButton");
        buttonEditTask.addEventListener(`click`,editTask);

        const buttonEraseTask = document.createElement("button");
        buttonEraseTask.innerHTML = "Eliminar Tarea";
        buttonEraseTask.classList.add("eraseTaskButton");
        buttonEraseTask.addEventListener(`click`,eraseTask);
        
        taskDiv.appendChild(buttonEditTask);
        taskDiv.appendChild(buttonEraseTask);

        tasksContainer.appendChild(taskDiv); // pongo la tarea en el contenedor de tareas
    });
    thirdSection.appendChild(tasksContainer); // Agrego el contenedor de tareas a thirdSection(para no limpiar los botones de 2ndsection)
}

function editTask() {
    console.log("BOTONES EDIT Y BORRAR NO HACEN NADA TODAVIA");
}
function eraseTask() {
    console.log("BOTONES EDIT Y BORRAR NO HACEN NADA TODAVIA");
}
const task = function(taskTitle,taskDescription,taskDateCreated,taskUserAssigned,taskStatus,taskDeadline,taskFrequency){
    this.taskTitle = taskTitle   
    this.taskDescription = taskDescription
    this.taskDateCreated = taskDateCreated 
    this.taskUserAssigned = taskUserAssigned
    this.taskStatus = taskStatus 
    this.taskDeadline = taskDeadline 
    this.taskFrequency = taskFrequency 
}
let taskTest = {
    task1: new task("first Task","Something to do","03-12-2024 23:55","aa","ready to start","","every day"),
    task2: new task("second Task","Something else to do","02-01-2025 13:55","User","done","19/01/2025",""),
    task3: new task("third Task","Something else to do","04-01-2025 13:25","Admin","WIP","29/01/2025","monthly")
} //para que ya haya tareas en la lista y funcione el filtro sin completar.  

let header = document.getElementById("header")
let headerContent = document.createElement("div")
headerContent.classList.add("header")
headerContent.innerHTML = `
    <img class="logo" src="./assets/home_task_planner_logo.png" alt="logo">
    <h1> Administrador de Tareas del Hogar </h1>
`;
header.appendChild(headerContent)

let mainElement = document.getElementById("mainContent")

let firstSection = document.createElement("section");
firstSection.id = "firstSection";
firstSection.classList.add("firstSection");
mainElement.appendChild(firstSection);

let secondSection = document.createElement("section");
secondSection.id = "secondSection";
secondSection.classList.add("secondSection");
mainElement.appendChild(secondSection);

let thirdSection = document.createElement("section");
thirdSection.id = "thirdSection";
thirdSection.classList.add("thirdSection");
mainElement.appendChild(thirdSection);

let divContainer = document.createElement("div");
divContainer.innerHTML = `
    <form class="loginBox" action="" method="">
        <ul>
            <li>
                <label for="spacename">Ingresa el nombre de tu espacio familiar</label>
                <input type="text" id="spacename" name="spacename">
            </li>
            <li>
                <label for="username">Ingresa tu Usuario</label>
                <input type="text" id="username" name="username">
            </li>
            <li>
                <label for="password">Ingresa tu Contraseña</label>
                <input type="text" id="password" name="password">
            </li>
            <li class="LoginSubmit">
                <button type="submit">Ingresar</button>
            </li>
        </ul>
    </form>
    `;
firstSection.appendChild(divContainer);

let hintContainer = document.createElement("div");
hintContainer.innerHTML = `
<div class="temporaryHint">
<p>Espacio Familiar: cc o casa  </p>
<p>Usuario: aa o User  </p>
<p>Contraseña: pp o pass </p>
</div>
`;
firstSection.appendChild(hintContainer);

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");

let buttonFilterTask = document.createElement("button");
buttonFilterTask.innerHTML = "Filtro de Tareas";
buttonFilterTask.classList.add("filterTaskButton");
buttonFilterTask.id = "filterTaskButton";
buttonContainer.appendChild(buttonFilterTask);

let buttonNewTask = document.createElement("button");
buttonNewTask.innerHTML = "Nueva Tarea";
buttonNewTask.classList.add("newTaskButton");
buttonNewTask.id = "newTaskButton";
buttonContainer.appendChild(buttonNewTask);

secondSection.appendChild(buttonContainer);

let footer = document.getElementById("footer")
let footerContent = document.createElement("div")
footerContent.classList.add("footer")
footerContent.innerHTML = `
    <p> Creado por Lu <p>
`;
footer.appendChild(footerContent)

loadTasksFromLS();//esto debe ir antes de llamar a newTaskEvent.addEventListener ACA SE INICIA MI APP
displayTasks();

let newTaskEvent = document.getElementById("newTaskButton")
newTaskEvent.addEventListener("click",newTask)

let filterTaskEvent = document.getElementById("filterTaskButton")
filterTaskEvent.addEventListener("click",statusFilter)

    //Ingreso user etc y me muestra las tareas que hay asignadas a ese user, mas abajo las tareas en general con sus datos "Metas" 
    //arriba hay botones de agregar tarea y de filtrar "Metas" DONE 
    //en cada tarea hay boton de borrar y de modificar y de completar (al completar se pone fecha de completado y usuario) "Metas" WIP
    // hacer bajas y modificaciones de tareas y que los cambios se guarden de alguna manera. "Metas"
    //Darle forma de formulario a la entrada de datos login. "Metas"

    //que el usuario ingrese las tareas a través de un formulario en el HTML (TUTOR) WIP - Falta al inicio (login)
    //guardar tareas en localstorage CONSIGNA DONE
    //usar local storage para luego mostrar las tareas guardadas CONSIGNA DONE
    //cambiar alerts por otra cosa CONSIGNA - WIP - Falta al inicio (login)
    //poner casi todo en el HTML desde el JS usando DOM CONSIGNA DONE
    // poner eventos y acciones CONSIGNA DONE
    //Usar operadores avanzados 1 y 2 CONSIGNA