const fetch = require('cross-fetch')
const token = require('../TestMacroPay/login')

function inicioSesion() {
    console.log(token)
    const urlLogin = 'https://prueba.cytma.com.mx/api/v1/users';
        fetch(urlLogin, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authentication: token
              },
        }).then((res => console.log(res)))
        .catch((error) => console.log("error:", error))
        .then((response) => console.log("success:", response));
}
inicioSesion();