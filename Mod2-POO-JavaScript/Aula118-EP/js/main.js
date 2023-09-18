
// 1) Crie duas funções com call-back;

//---------
let numbers = [1,2,4,7,3,5,9];

let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});
document.getElementById("p1.1").innerHTML = 'Conjunto de números : ' + numbers;
document.getElementById("p1.2").innerHTML = 'Números impares : ' + oddNumbers;


// 2) Crie duas funções com Promises;
const timeout = (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration)
    })
  }
  
  timeout(4000)
    .then(function() { // executa o bloco após 3 segundos
        document.getElementById("p2.1").innerHTML = 'Passou 4 segundos ... ';  
    })

//--------------
function getTodosOsUsuarios () {
    return new Promise((resolve, reject) => {
      resolve([ 1, 2, 3 ])
    })
  }
  
  function getUsuarioById (id) {
    return new Promise((resolve, reject) => {
      resolve({ id, nome: 'João da Silva' })
    })
  }
  
  getTodosOsUsuarios()
    .then(ids => getUsuarioById(ids[0]))
    .then(usuario => console.log(usuario)) // { id: 1, nome: 'João da Silva' }


// 3) Crie duas funções, sendo uma com async e outra com await.

setTimeout(function() {
  myFunction("Mensagem Assincrona depois de 3 segundos ...");
}, 3000);

function myFunction(value) {
  document.getElementById("p3.1").innerHTML = value;
}

//-----------

function resolveEmDoisSegundos(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function funcaoAwait() {
  var x = await resolveEmDoisSegundos("Resolve em 2 segundos com Await...");
  document.getElementById("p3.2").innerHTML = x; 
}

funcaoAwait();
