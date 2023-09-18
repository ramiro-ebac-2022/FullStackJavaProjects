
// 1) Crie uma API de validação de formulário; * seu formulário deve estar estilizado com CSS.
function minhaIdade() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo1").innerHTML = inpObj.validationMessage;
    } else {
        let date = new Date();
        let resultado = date.getFullYear() - inpObj.value;
        document.getElementById("demo1").innerHTML = "Você tem " + resultado + " anos";
    }
}

// 2) Crie uma API para criar botão de navegação usando o histórico. * seu botão deve estar estilizado com CSS.
function anterior() {
    window.history.back();
}

function seguinte() {
    window.history.go(1);  
}

// 3) Crie um botão que obtenha os dados de geolocalização do usuário ao clicar. * seu botão deve estar estilizado com CSS.
const x = document.getElementById("demo3");

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        x.innerHTML = "Seu navegador não possui suporte para Geolocalização!";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude : " + position.coords.latitude + 
                  "<br>Longitude : " + position.coords.longitude;
}

