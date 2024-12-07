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
                alert("Actualmente no hay proceso para recuperar tu Espacio, recargá y empezá de nuevo con los valores sugeridos en casa paso. Gracias!");
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
    console.log("TENEMOS "+ "Pass " + passw + ", pass ok " + passOk);
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
                alert("Actualmente no hay proceso para recuperar tu usuario, recargá y empezá de nuevo con los valores sugeridos en casa paso. Gracias!");
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
            alert("pass OK");//sacar esta cuendo pueda
        }else{ 
            alert("La contraseña es incorrecta ");
            attemptPass--
            console.log("ingresó mal la contraseña, quedan " + attemptPass + " intentos." );

            if (attemptPass<1){
                alert("Has hecho varios intentos fallidos, quieres recuperar tu contraseña?");
                alert("Actualmente no hay proceso para recuperar tu contraseña, recargá y empezá de nuevo con los valores sugeridos en casa paso. Gracias!");
                console.log("Ingresó " + pass + ", pass ok " + passOk);
                console.log("ingresó mal la contraseña 3 veces");
                break;
            }
        }
    } while (passOk === false);
    return [pass, passOk];
}

login()
alert("Bienvenido/a " +  /*user*/ + " de la casa " + /*spaceName*/ + "! ahora vamos a calcular unas propinas, tocá aceptar.");

