
// Extraia pelo menos cinco conteúdos de cinco tags diferentes;

// Aplique pelo menos três conteúdos em tags com o INNER HTML;

// Crie um validador de formulários;

// Crie dois botões com eventos.

function resumo() {
    document.getElementById("p1").innerHTML = "Nome : " + document.getElementById("nome").value;
    document.getElementById("p2").innerHTML = "Sobrenome : " + document.getElementById("sobreNome").value;
    document.getElementById("p3").innerHTML = "E-mail : " + document.getElementById("email").value;
    document.getElementById("p4").innerHTML = "Telefone : " + document.getElementById("telefone").value;
    document.getElementById("p5").innerHTML = "Dúvida : " + document.getElementById("duvida").value;
}

function limpar() {
    document.getElementById("nome").value = null;
    document.getElementById("sobreNome").value = null;
    document.getElementById("email").value = null;
    document.getElementById("telefone").value = null;
    document.getElementById("duvida").value = null;
    document.getElementById("p1").innerHTML = null;
    document.getElementById("p2").innerHTML = null;
    document.getElementById("p3").innerHTML = null;
    document.getElementById("p4").innerHTML = null;
    document.getElementById("p5").innerHTML = null;
}

function validarForm() {
    //let x = document.forms["myForm"]["fname"].value;
    if (document.forms["myForm"]["nome"].value == "") {
        alert("O campo 'Nome' deve ser preenchido !");
        return false;
    } 
}