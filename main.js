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
    alert("Bienvenido/a " +  finalUserName + " del Espacio ´" + finalSpaceName + "´! Ahora vamos a calcular unas propinas, tocá aceptar.");
    console.log("bonus track calculo de propinas para cuando completaste el user y pass");
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

sayHello();
aplicarcalcularPropinas()