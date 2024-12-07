

let PassOk = false;
let attemptPass = 3;
//las variables de los attempt se declaran antes del DO
function GetSpaceName(){
    let SpaceIdentified = false;
    let attemptSpace = 3;
    let SpaceName;
    do {
        SpaceName = prompt ("ingresa el nombre de tu espacio familiar"+ " ( por ejemplo Casa o Familia )").toLowerCase();
        console.log("intentos = " + attemptSpace);
        if (SpaceName === null || SpaceName === ""){
            alert("Debes ingresar el nombre de tu espacio familiar");
            console.log("ingresó null la familia");
            break;
        }
        if ((SpaceName === "admin" || SpaceName === "casa" || SpaceName === "cc") && attemptSpace>=1){
            console.log("ingresó bien la familia");   //lo dejo pasar si escribe familia o casa
            SpaceIdentified = true;
            alert("Hola " + SpaceName);
        }else{ 
            alert("No se registró la familia " + SpaceName);
            attemptSpace--
            console.log("ingresó mal la familia " + attemptSpace);

            if (attemptSpace<1){
                alert("Has hecho varios intentos fallidos, quieres registrarte o necesitas ayuda con tu espacio familiar?");
                console.log("ingresó mal la familia 3 veces");
                break;
            }
        }
    } while (SpaceIdentified === false);
    return SpaceName;
}
let SpaceName = GetSpaceName ();
if(SpaceName === null || SpaceName === ""){
    console.log("ALERTA Spacename pasó en null ");
}
console.log(" La casa es " + SpaceName);
 // aca tendria que revisar que nunca llegue en null hasta este punto
 while(SpaceName === null || SpaceName === ""){
    break;
}

function GetUser(){
    let UserIdentified = false;
    let attemptUser = 3;
    let UserName;
    do {
        if(SpaceName === null || SpaceName === ""){
            break;
        }
        UserName = prompt ("ingresa tu usuario"+ " ( por ejemplo User o Admin )");
        console.log("intentos = " + attemptUser);
        if (UserName === null || UserName === ""){
            alert("Debes ingresar tu usuario");
            console.log("ingresó null el usuario");
            break;
        }
        if ((UserName === "User" || UserName === "Admin" || UserName === "aa") && attemptUser>=1){
            console.log("ingresó bien el usuario");  
            UserIdentified = true;
            alert("Hola " + UserName);
        }else{ 
            alert("No se registró el usuario " + UserName);
            attemptUser--
            console.log("ingresó mal el usuario, quedan " + attemptuser + " intentos." );

            if (attemptUser<1){
                alert("Has hecho varios intentos fallidos, quieres recuperar tu usuario?");
                console.log("ingresó mal el usuario 3 veces");
                break;
            }
        }
    } while (UserIdentified === false);
    return UserName;
} git config --global user.name "lucianamg"
git config --global user.email luciana.exe@gmail.com

let UserName = GetUser ();
if(UserName === null || UserName === ""){
    console.log("ALERTA Username pasó en null ");
}
console.log(" El Username es " + UserName); 

/* 
function PassOk(){
    do {
        
    } while (condition);
} */



 /* do{
    
            

                
                let usuario = prompt ("ingresa el nombre de usuario");
                    if (usuario == null || usuario == ""){
                        alert("Debes ingresar un nombre de usuario"+ " ( por ejemplo user o admin )");
                        console.log("ingresó null el usuario");
                        break;
                    }
                    if ((usuario === "admin" || usuario === "aa" || usuario === "user") && attemptUser>=1){
                        UserIdentified = true; //lo dejo pasar si escribe admin o user
                        console.log("ingresó bien la familia y el usuario");

                            let pass = prompt ("ingresa tu contraseña");

                            if (pass == null || pass == ""){
                                alert("Debes ingresar una contraseña"+ " ( por ejemplo pass o pp )");
                                console.log("ingresó null la pass");
                                break;
                            }
                            if ((pass === "pass" || pass === "dd" || pass === "pp") && attemptPass>=1){
                                PassOk = true; //lo dejo pasar si escribe pass o...
                            alert("bienvenido a " + familyName + ", " +usuario);
                            console.log("ingresó bien la pass, proceso completo");
                            }else{//este else es el de pass
                                alert("Nombre de usuario o Contraseña incorrectos, te quedan " + (attemptPass-1) + " intentos");
                                attemptPass--
                                console.log("ingresó mal la pass");

                                if (attemptPass<1){
                                alert("Has hecho tres intentos fallidos, quieres recuperar tu contraseña?");
                                console.log("ingresó mal la pass 3 veces");
                                break;
                                }
                            }console.log("UNO");

                    }else{//este else es el de usuario
                        alert("Usuario o pass incorrectos, intenta nuevamente.");
                        attemptUser--
                        console.log("ingresó mal el user");
                        UserIdentified = false;
                        
                        if (attemptUser<1){
                            alert("Has hecho tres intentos fallidos, pide ayuda al Administrador de la cuenta.");
                            console.log("ingresó mal el user 3 veces");
                            break;
                        }console.log("dos");

                    }
    
}
while (PassOk === false);  */