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
function sayHello(){
    let getFinalData = login(); // la fc login devuelve user y spacename
    let finalSpaceName = getFinalData[1];
    let finalUserName = getFinalData[0];
    console.log(finalUserName + finalSpaceName);
    alert("Bienvenido/a " +  finalUserName + " del Espacio ´" + finalSpaceName + "´! tocá aceptar para continuar.");
    //console.log("bonus track calculo de propinas para cuando completaste el user y pass");
}
function calcularPropinas(){
    let input = prompt("ingresa el monto final que te aparece en la cuenta");
    if (input === null || input.trim() === ""){
        alert("Debes ingresar un monto y no puede ser menor que cero.");
        //location.reload();
        return
    }
    let invoiceAmount = parseFloat(input);
    if (isNaN(invoiceAmount) || invoiceAmount<0){
        alert("Debes ingresar un monto y no puede ser menor que cero.");
        return
    }
    input = prompt("ingresa -en números- un porcentaje de propina que quieres dejar, por ejemplo 5, 10, 15 o 20 porciento")
    if (input === null || input.trim() === ""){
        alert("Debes ingresar un porcentaje de propina y debe ser mayor que cero.");
        return
    }
    let desiredTip = parseFloat(input);
    if (isNaN(desiredTip) || desiredTip<=0){
        alert("Debes ingresar un porcentaje de propina y debe ser mayor que cero.");
        return
    }
    input = prompt("ingresa -en números- cuántas personas son para dividir el pago, por ejemplo 3, 5, 10 etc");
    if (input === null || input.trim() === ""){
        alert("Debes ingresar un numero de personas a dividir la cuenta y debe ser mayor que cero.");
        return
    }
    let members = parseInt(input)
    if (isNaN(members) || members<=0){
        alert("Debes ingresar un numero de personas a dividir la cuenta y debe ser mayor que cero.");
        return
    }
    let totalTip = invoiceAmount*desiredTip/100;
    let result = invoiceAmount + totalTip;
    let dividedAmount = result/members;
    return [invoiceAmount, members, totalTip, desiredTip, dividedAmount, result];
}
function aplicarcalcularPropinas(){
    let calculador; 
    do{
        calculador = calcularPropinas();
    }
    while (calculador === null) 
    let invoiceAmount = calculador[0] 
    let members = calculador[1]
    let totalTip = calculador[2] 
    let desiredTip = calculador[3] 
    let dividedAmount = calculador[4]
    let result = calculador[5]
    console.log("Monto factura ingresado $ " + invoiceAmount);
    console.log("Porcentaje propina deseada ingresado "+desiredTip);
    console.log("Total de propina calculado $ " + totalTip);
    console.log("Total de factura + propina sin dividir $ " + result);
    console.log("A dividir entre " + members);
    console.log("Total para cada persona $ " + dividedAmount );
    alert("Para el porcentaje elegido, la propina total es de $ " + totalTip + ". Para pagar la factura de $ " + invoiceAmount + " dividida entre " + members + " personas, con un porcentaje de propina del " + desiredTip + " %, cada uno debe abonar $ " + dividedAmount);
    }

//sayHello(); COMENTO ESTO PARA QUE NO TENGAN QUE HACER TODOS ESTOS PRIMEROS PASOS EN LAS PRUEBAS DE LA 2DA PRE-ENTREGA

//aplicarcalcularPropinas() Comento esto porque era para practicar funciones


// Un poco la idea: TASKS se pueden crear (admin y autorizados), editar (admin y autorizados), cambiar estado (admin y user designado), borrar (admin y autorizados)
// Users: cada casa tiene 1 o + admin y users. Admin decide quienes hacen qué. Roles: admin puede todo, users pueden lo que admin diga (crear, editar, cambio estado, borrar, etc) 

// PARA ESTA ENTREGA SUMÉ LA CREACION DE OBJETO TAREAS CON UNA FC CONSTRUCTORA, UN ARRAY DE TAREAS CREADAS, UNA FUNCION DE FILTRO, UNA FUNCION FLECHA.

// Para los siguientes pasos me gustaria poder hacer bajas y modificaciones y que los cambios se guarden de alguna manera. Mas adelante darle forma de formulario a la entrada de datos. 
let tasksCount = 0;
function newTask(){ //todo esto deberia ser mas como un formulario
    let title = prompt("ingresa el titulo de la tarea")
    if (title === null || title.trim() === "" || title === "" ){
        alert("Debes ingresar un Título.");
        //location.reload();
        return
    }
    let description = prompt("ingresa una descripcion de la tarea")
    if (description === null || description.trim() === "" || description === "" ){
        alert("Debes ingresar una descripcion.");
        return
    }
    let dateCreated = new Date()
    let userAssigned = prompt("ingresa el tasker") // en el futuro que pueda elegir los uduarios de entre los que hay inscriptos en la casa
    if (userAssigned === null || userAssigned.trim() === "" || userAssigned === "" ){
        alert("Debes ingresar un Tasker.");
        return
    }else{//que use la fc filtrar tasker para chequear que esos usaurios existen

    }
    let status = prompt("ingresa el Estado, ejemplos Start, Done o WIP") //en el futuro que pueda elegir entre Ready to start / work in progress / done! 
    if (status === null || status.trim() === "" || status === "" ){
        alert("Debes ingresar un Estado.");
        return
    }
    let deadline = prompt("ingresa la fecha de deadline como DD-MM-AA") // de momento lo escribe. Luego lo elige y Formato a mostrar en console: 3 de Enero a las 23:55 hs
    if (deadline === null || deadline.trim() === "" || deadline === "" ){
        alert("Debes ingresar una fecha límite.");
        return
    }
    let frequency = prompt("ingresa cada cuanto tiempo se debe realizar la tarea") // de momento lo escribe.
    if (frequency === null || frequency.trim() === "" || frequency === "" ){
        alert("Debes ingresar una frecuencia.");
        return
    }
    let newTask = new task (title,description,dateCreated,userAssigned,status,deadline,frequency) 
    taskList.push(newTask)
    tasksCount++;
    console.table(taskList)
    console.log("Numero total de tareas creadas hasta el momento: "+tasksCount)

    if(tasksCount>2){
        let askFilter = prompt("¿Quieres filtrar por Status? si / no ").toLowerCase();
        if(askFilter === "si" || askFilter === "s"|| askFilter === "sí"){
            statusFilter()
        }
    }
}
    
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

    const task = function(taskTitle,taskDescription,taskDateCreated,taskUserAssigned,taskStatus,taskDeadline,taskFrequency){
        this.taskTitle = taskTitle   // ESTRUCTURA: this.(esto es lo que aparece luego en console como titulos de la tabla) = (esto debe coincidir con los parametros de la fc)
        this.taskDescription = taskDescription
        this.taskDateCreated = taskDateCreated //el sistema la toma en el momento que se crea
        this.taskUserAssigned = taskUserAssigned
        this.taskStatus = taskStatus //FUTURO desplegable: Ready to start / work in progress / done!
        this.taskDeadline = taskDeadline // desplegable: format 3 de Enero a las 23:55 hs
        this.taskFrequency = taskFrequency //desplegable que pueda elegir entre every day / every week / every XX days / every month / weekdays / weekends / etc
    }
    //let taskTest = new task("firstTask","Something to do","03-12-2024 23:55","user assigned","ready to start","January 3, 22:00 hs","every day") //solo para probarla
    let taskList = []
    
    let answerCreate = true
    do{
        let askCreate = prompt("¿Quieres crear una tarea? pon `si´ o `no´. Si creas dos o más tareas completas podras filtrar").toLowerCase();
        if(askCreate === "si" || askCreate === "s" || askCreate === "sí"){
            answerCreate = true
            newTask()
        }
        
        else{
            answerCreate = false;
            alert("cuando quieras crear una tarea nueva, recarga el sitio y pon `si´ o `s´, por el momento funciona asi");
            break
            }
        
    }
    while(answerCreate) //esto es lo mismo que poner while (answerCreate = true)
           
           
  