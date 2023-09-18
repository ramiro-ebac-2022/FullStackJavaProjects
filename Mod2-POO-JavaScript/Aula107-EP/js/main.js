
//--1) Criando 5 objetos
const carro= {
    marca: "Ford",
    modelo: "Fiesta",
    cor: "Vermelha",
    ano: 2018
};

const persona= {
    nome: "Ramiro",
    sobrenome: "Zavala",
    idioma: "pt",
    get lang() {
        return this.idioma;
    },
    set setLang(value) {
        this.idioma = value;
    },
    get nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
};

console.log("** 1 - Criando objetos **");
console.log(persona.idioma);
console.log("---");
persona.setLang = "pt-BR";
console.log(persona.idioma);
console.log("---");
console.log(persona.nomeCompleto);


//--2) Criando 2 objetos com construtores
function Persona(nome, sobreNome, idade, olho) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    this.colorOlho = olho;
    this.nomeCompleto = function() {
        return this.nome + " " + this.sobreNome;
    }
}

console.log("** 2 - Criando objetos com construtores **");
const pai = new Persona("Moises","Leandro",80,"Marrom");
console.log("Nome completo do meu Pai: ");
console.log(pai.nomeCompleto());
const mae = new Persona("Tina","Zavala",78,"Verde");
console.log("Nome completo da minha Mãe: ");
console.log(mae.nomeCompleto());


//--3) Percorrendo 2 objetos 
console.log("** 3 - Percorrendo os objetos **");
console.log("---> percorre objeto CARRO");
for (let x in carro) {
    console.log(carro[x]);
}
console.log("---> percorre objeto PAI (Persona)");
for (let x in pai) {
    console.log(pai[x]);
}

//--4) Fazendo impressões por meio de acesso aos objetos
console.log("** 4 - Imprimindo atributos do objetos **");
console.log("---> Marca do CARRO");
console.log(carro.marca);
console.log("---> Nome completo da MÃE");
console.log(mae.nomeCompleto());

