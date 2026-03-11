function login(){

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;
let mensaje = document.getElementById("mensaje");

if(usuario === "admin" && password === "1234"){
mensaje.style.color = "green";
mensaje.innerHTML = "Login correcto";
}else{
mensaje.style.color = "red";
mensaje.innerHTML = "Usuario o contraseña incorrectos";
}

}