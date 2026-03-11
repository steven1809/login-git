document.getElementById("loginForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    // Enviar datos al servidor
    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(data.success){
        mensaje.style.color = "green";
        mensaje.textContent = data.mensaje;
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = data.mensaje;
    }
});
