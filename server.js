const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// “Base de datos” en memoria
const usuarios = [
    { email: "admin@correo.com", password: "123456" },
    { email: "usuario@correo.com", password: "abcdef" }
];

// Ruta para login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if(usuario){
        res.json({ success: true, mensaje: "Login correcto" });
    } else {
        res.json({ success: false, mensaje: "Usuario o contraseña incorrectos" });
    }
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
