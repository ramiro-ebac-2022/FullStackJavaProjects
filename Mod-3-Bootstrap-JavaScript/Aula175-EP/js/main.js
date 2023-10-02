function validar() {
    if (document.getElementById("username").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo Usuario !";
    } else if (document.getElementById("password").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo Senha !";
    } else if (document.getElementById("primeiroNome").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo Primeiro Nome !";
    } else if (document.getElementById("sobreNome").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo Sobrenome !";
    } else if (document.getElementById("RG").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo RG !";
    } else if(document.getElementById("CPF").value.trim().length === 0) {
        document.getElementById("textoValidado").innerHTML = "Deve informar o campo CPF !";
    } else {
        document.getElementById("textoValidado").innerHTML = "Dados Corretos.";
    } 
   }
