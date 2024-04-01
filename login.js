const fetch = require('cross-fetch')
var token = '';
function inicioSesion() {
    const urlLogin = 'https://prueba.cytma.com.mx/api/v1/login';
        var data = {email: "hashisenju.sensei@gmail.com", password: "1234Hola"}
        fetch(urlLogin, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((res => ({token:res})))
        .catch((error) => console.log("error:", error))
        .then((response) => console.log("success:", response));
        console.log(token);
}
inicioSesion();
module.exports = token;
