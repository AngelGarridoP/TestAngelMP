const fetch = require('cross-fetch')

function registroUsusario() {
    const urlRegister = 'https://prueba.cytma.com.mx/api/v1/register';
        var data = {nombre: "hashi", email: "hashisenju.sensei@gmail.com", password: "1234Hola"}
        fetch(urlRegister, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((res => console.log(res)))
        .catch((error) => console.log("error:", error))
        .then((response) => console.log("success:", response));
}
registroUsusario();