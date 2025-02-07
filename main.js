//defino las secciones del html aca porque si las defino mas abajo no funca
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

secondSection.style.display = "none";
thirdSection.style.display = "none";

let divContainer = document.createElement("div");
divContainer.id = "divContainerFS";
divContainer.classList.add("divContainerFS");
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

// Variables globales para el login
let finalSpaceName = "";
let spaceValidated = false;
let finalUserName = "";
let userValidated = false;
let finalPass = "";
let passValidated = false;

//variables para new task
let tasksCount = 0;
let taskList = [];

// Inicializo login 
login();

//sigue el codigo que no son funciones Esto lo movi hacia arriba
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
    task2: new task("second Task","Something else to do","02-01-2025 13:55","User","ready to start","19/01/2025",""),
    task3: new task("third Task","Something else to do","04-01-2025 13:25","Admin","WIP","29/01/2025","monthly"),
    task4: new task("fourth Task","Something else to do","04-03-2025 13:25","Admin","WIP","29/01/2025","one time")

} //para que ya haya tareas en la lista y funcione el filtro sin completar.  


//Esto lo movi hacia arriba (estaba despues de las fc)
loadTasksFromLS();//esto debe ir antes de llamar a newTaskEvent.addEventListener 
//displayTasks(); //esta la llamé en sayhello pero veer si hay que llamarla de nuevo
let newTaskEvent = document.getElementById("newTaskButton")
newTaskEvent.addEventListener("click",newTask)

let filterTaskEvent = document.getElementById("filterTaskButton")
filterTaskEvent.addEventListener("click",statusFilter)


function createLoginForm() {
  const divContainerContent = document.getElementById("divContainerFS");
  let loginForm = document.createElement("div");
  loginForm.innerHTML = `
    <form class="loginBox" id="loginForm">
      <label for="spacename">Espacio Familiar:</label>
      <input type="text" id="spacename" name="spacename" placeholder="Ingresa el nombre de tu espacio familiar">
      <span class="error" id="spaceNameError"></span>
      
      <label for="username">Usuario:</label>
      <textarea id="username" name="username" placeholder="Ingresa tu nombre de Usuario"></textarea>
      <span class="error" id="usernameError"></span>
      
      <label for="password">Contraseña:</label>
      <input type="text" id="password" name="password" placeholder="Ingresa tu contraseña">
      <span class="error" id="passwordError"></span>
      
      <button type="submit" class="LoginSubmit">Ingresar</button>
    </form>
  `;
  divContainerContent.appendChild(loginForm);
}
 
function getSpaceName() {// getspacename se dispara al salir del campo
  let spaceAttempts = 3;
  let input = document.getElementById("spacename");
  let errorSpan = document.getElementById("spaceNameError");

  input.addEventListener("blur", function eventListenerRemover(e) {
    let value = e.target.value.trim().toLowerCase();
    if (value === "") {
      errorSpan.textContent = "Debes ingresar el nombre de tu espacio familiar";
      console.log("ingresó null la familia");
      return;
    }
    
    if (value === "admin" || value === "casa" || value === "cc") {
      errorSpan.textContent = "";
      finalSpaceName = value;
      spaceValidated = true;
      console.log("ingresó bien la familia");
      
      input.removeEventListener("blur", eventListenerRemover);//  remuevo el listener para evitar revalidaciones 
    } else {
      spaceAttempts--;
      errorSpan.textContent = `No se registró la familia "${value}". Intentos restantes: ${spaceAttempts}`;
      console.log("ingresó mal la familia, quedan " + spaceAttempts + " intentos.");
      if (spaceAttempts < 1) {
        alert("Has hecho varios intentos fallidos. Actualmente no hay proceso para recuperar tu Espacio. Recargá y empezá de nuevo.");
        input.disabled = true;
      }
    }
  });
}

function getUser() {
  let userAttempts = 3;
  let input = document.getElementById("username");
  let errorSpan = document.getElementById("usernameError");

  input.addEventListener("blur", function eventListenerRemover(e) {
    let value = e.target.value.trim();
    if (value === "") {
      errorSpan.textContent = "Debes ingresar tu usuario";
      console.log("ingresó null el usuario");
      return;
    }
    
    if (value === "User" || value === "Admin" || value === "aa") {
      errorSpan.textContent = "";
      finalUserName = value;
      userValidated = true;
      console.log("ingresó bien el usuario");
      input.removeEventListener("blur", eventListenerRemover);
    } else {
      userAttempts--;
      errorSpan.textContent = `No se registró el usuario "${value}". Intentos restantes: ${userAttempts}`;
      console.log("ingresó mal el usuario, quedan " + userAttempts + " intentos.");
      if (userAttempts < 1) {
        alert("Has hecho varios intentos fallidos. Actualmente no hay proceso para recuperar tu usuario. Recargá y empezá de nuevo.");
        input.disabled = true;
      }
    }
  });
}

function getPass() {// validar contraseña se dispara al hacer submit 
  let passAttempts = 3;
  let form = document.getElementById("loginForm");
  let input = document.getElementById("password");
  let errorSpan = document.getElementById("passwordError");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let value = input.value.trim();
    if (value === "") {
      errorSpan.textContent = "Debes ingresar tu contraseña";
      console.log("ingresó null la contraseña");
      return;
    }
   
    if (value === "pass" || value === "Dejamentrar" || value === "pp") {
      errorSpan.textContent = "";
      finalPass = value;
      passValidated = true;
      console.log("ingresó bien la contraseña");
      // verifico que espacio y usuario ya estén validados
      if (spaceValidated && userValidated) {
        sayHello();
      } else {
        alert("Debés completar correctamente los campos de espacio y usuario.");
      }
    } else {
      passAttempts--;
      errorSpan.textContent = `La contraseña es incorrecta. Intentos restantes: ${passAttempts}`;
      console.log("ingresó mal la contraseña, quedan " + passAttempts + " intentos.");
      if (passAttempts < 1) {
        alert("Has hecho varios intentos fallidos. Actualmente no hay proceso para recuperar tu contraseña. Recargá y empezá de nuevo.");
        input.disabled = true;
      }
    }
  });
}

function login() {//llamo a las tres validaciones
  createLoginForm();
  getSpaceName();
  getUser();
  getPass();
}
function sayHello() {
    console.log(finalUserName + " " + finalSpaceName);
// Quito el formulario de login y la caja hint
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.remove();
    }
    let hint = document.querySelector(".temporaryHint");
    if (hint) {
        hint.remove();
    }
    let welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = `hola ${finalUserName}, te damos la bienvenida al Espacio ${finalSpaceName}!`;
    firstSection.appendChild(welcomeMessage);
    // hago display de las secciones de tareas una vez que login está ok
    secondSection.style.display = "block";
    thirdSection.style.display = "block";

    displayTasks();
}

// Inicializo login VER SI ESTO LO PUEDO MOVER ARRIBA ya que no es una fc
//login();

//FUNCION NEW TASK esto lo movi arriba
//let tasksCount = 0;
//let taskList = [];

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
    
    document.getElementById("taskTitleError").textContent = 
    (!title || title.trim() === "") 
        ? "Debes ingresar un título." 
        : "";
    hasErrors = (!title || title.trim() === "") ? true : hasErrors; //ejemplo de operador ternario

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
        document.getElementById("taskStatusError").textContent = "Debes ingresar un Estado como Ready to Strart, WIP.";
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
    taskList.unshift(newTask);//uso unshift (y no push) para que las nuevas vayan primeras en la lista
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
    let input = prompt("ingresá un status para filtrar como Ready To Start, Done o WIP").toLowerCase();
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
        if(task.taskStatus.toLowerCase() === "done") { //saco las done para mandarlas a su clase
            taskDiv.classList.add("completedTask");
        }
        taskDiv.innerHTML = `
            <h1>Tarea</h1>
            <p><strong>Título:</strong> ${task.taskTitle}</p>
            <p><strong>Descripción:</strong> ${task.taskDescription}</p>
            <p><strong>Fecha Creada:</strong> ${task.taskDateCreated}</p>
            <p><strong>Tasker:</strong> ${task.taskUserAssigned}</p>
            <p><strong>Estado:</strong> ${task.taskStatus}</p>
            <p><strong>Deadline:</strong> ${task.taskDeadline || "No especificado"}</p>
            <p><strong>Frecuencia:</strong> ${task.taskFrequency || "No especificada"}</p>
            ${task.taskStatus.toLowerCase() === "done" ? `<p><strong>Fecha de finalización:</strong> ${task.taskCompletionDate}</p>` : ""}

        `;

        const buttonEraseTask = document.createElement("button");
        buttonEraseTask.innerHTML = "Eliminar Tarea";
        buttonEraseTask.classList.add("eraseTaskButton");
        buttonEraseTask.addEventListener(`click`,() => {
            eraseTask(task)
        });
        if (task.taskStatus?.trim().toLowerCase() !== "done") {
            const buttonCompleteTask = document.createElement("button");
            buttonCompleteTask.innerHTML = "Completar Tarea";
            buttonCompleteTask.classList.add("completeTaskButton");
            buttonCompleteTask.addEventListener(`click`,() => {
                completeTask(task);
            });
            taskDiv.appendChild(buttonCompleteTask);
        } //aca lo pongo dentro de un if porque me pasaba que siempre estaba el boton por mas que la tarea estuviera en done

        taskDiv.appendChild(buttonEraseTask);
        tasksContainer.appendChild(taskDiv); // pongo la tarea en el contenedor de tareas


    });

    thirdSection.appendChild(tasksContainer); // Agrego el contenedor de tareas a thirdSection(para no limpiar los botones de 2ndsection)
}
function eraseTask(task) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'La tarea se eliminará permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // quito la tarea del array taskList
        taskList = taskList.filter(t => t !== task);
        saveTasksToLS();// guardo la lista actualizada en localStorage
        
        displayTasks();// Actualizo display
        Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
      }
    });
  }

async function completeTask(task) {
    if (task.taskStatus.toLowerCase() === "done") return; // Si ya está completada
    
    task.taskStatus = "done"; // Marca como completada
    task.taskUserAssigned = finalUserName; //y actualizo datos
    task.taskCompletionDate = new Date().toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }); // Formato que lo puedo cambiar
    
    taskList = taskList.filter(t => t !== task);
    taskList.push(task);// Muevo la tarea al final del array
    
    // Salvo localStorage y actualizo display
    saveTasksToLS();
    displayTasks();
    // agrego la frase si se completó la tarea
    const quote = await getMotivationalQuote();
    if (quote) {
        translateToSpanish(quote)
        .then(translatedQuote => {
        //const modifiedQuote = translatedQuote.toUpperCase(); //modifico a uppercase
            const modifiedQuote = `<i>${translatedQuote}</i>`; //modifico a italica
            Swal.fire({
                icon: 'success',
                title: '<h1 style="margin-bottom: 0;">Tarea Completada!</h1>',
                html: `
                    <h2 style="margin-top: 0;">Te dejo una frase motivacional:</h2>
                    <p>${modifiedQuote}</p>
                `
            });
        })
        .catch(err => {
            console.error(err);
            Swal.fire('¡Tarea Completada!', quote, 'success');
            });
    } else {
        Swal.fire('¡Tarea Completada!', '"Piensa en la belleza de la vida. Mira las estrellas y mírate corriendo detrás de ellas. Abre las ventanas de tu alma y que entre el sol."  Marco aurelio.', 'success');
        }
    }

    //Funcion completartarea
    //marcar como done en status de la tarea DONE
    //modificar tasker al usuario actual DONE
    //agregar fecha de fin de tarea DONE
    //mandar la tarea completada al fondo de las tareas y cambia su aspecto con una clase (por ejemplo sse pone todo gris) DONE
    // se le deshabilita el boton completar DONE

    async function getMotivationalQuote() {
        try {
          const response = await fetch('https://api.adviceslip.com/advice');
          const data = await response.json();
          return data.slip.advice; // data.slip.advice es la frase que traigo de la api
        } catch (error) {
          console.error('Error al obtener la frase', error);
          return null;
        }
      }

function translateToSpanish(englishText) {
const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishText)}&langpair=en|es`;
//para armar la url y el return le pedi ayuda a gpt porque yo no daba pie con bola
return fetch(url)
    .then(response => response.json())
    .then(data => {
    return data.responseData.translatedText;
    })
    .catch(error => {
    console.error("Error al traducir:", error);
    return englishText;
    });
}

    //Ingreso user etc y me muestra las tareas que hay asignadas a ese user, mas abajo las tareas en general con sus datos "Metas" 
    //arriba hay botones de agregar tarea y de filtrar "Metas" DONE 
    //en cada tarea hay boton de borrar y de completar (al completar se pone fecha de completado y usuario) "Metas" done
    // hacer bajas y modificaciones de tareas y que los cambios se guarden de alguna manera. "Metas" done
    //Darle forma de formulario a la entrada de datos login. "Metas" DONE

    //que el usuario ingrese las tareas a través de un formulario en el HTML - (TUTOR) DONE
    //guardar tareas en localstorage - CONSIGNA - DONE
    //usar local storage para luego mostrar las tareas guardadas - CONSIGNA - DONE
    //cambiar alerts por otra cosa  CONSIGNA - DONE
    //poner todo en el HTML desde el JS usando DOM - CONSIGNA - DONE
    // poner eventos y acciones  CONSIGNA - DONE
    //Usar operadores avanzados 1 y 2 para reemplazar IFs  - CONSIGNA - DONE

    //Entrega Final
    //operadores logicos DONE
    // Uso/llamado de apis DONE
    //asincronia DONE
    //fetch + promesa con .then >> o async/await DONE

    //una libreria (sweet alert ejemplo) DONE
    //stringify DONE
    //parse DONE
    //interaccion c/ DOM inyectando codigo al html DONE
    
    //Voy a usar Advice Slip API Endpoint básico: https://api.adviceslip.com/advice 
    //te devuelve un objeto JSON con una frase al azar. La pondré al completar una tarea.
    
