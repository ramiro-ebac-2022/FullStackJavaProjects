
// 1) Crie pelo menos cinco classes diferentes
class Carro {
    constructor(nome, modelo, ano) {
        this.nome = nome;
        this.modelo = modelo;
        this.ano = ano;
    }
    idade() {
        let data = new Date();
        return data.getFullYear() - this.ano;
    }
}

const meuCarro = new Carro("Ford","Fiesta",1980);

document.getElementById("p1.1").innerHTML = meuCarro.nome + " , " + meuCarro.modelo + " , " + meuCarro.ano;
document.getElementById("p1.2").innerHTML = "Meu carro tem " + meuCarro.idade() + " anos de fabricação.";

class Pessoa {
    constructor(nome, sobreNome, anoNascimento) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.anoNascimento = anoNascimento;
    }
    static idade() {
        let data = new Date();
        return data.getFullYear() - this.anoNascimento;
    }
}

class Funcionario {
    constructor(nome,cpf,cargo,departamento,salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.departamento = departamento;
        this.salario = salario;
    }
}

class Produto {
    constructor(nome,unidade,quantidade,ubicacao) {
        this.nome = nome;
        this.unidade = unidade;
        this.quantidade = quantidade;
        this.ubicacao = ubicacao;
    }
}

class Rectangulo {
    constructor(base,altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}


// 2) Crie pelo menos duas classes herdando características das classes anteriores
// 3) Defina métodos para as duas classes
class ProdutoMedicamento extends Produto {
    constructor(nome,unidade,quantidade,ubicacao,fabricacao,validade) {
        super(nome,unidade,quantidade,ubicacao);
        this.anoFabricacao = fabricacao;
        this.anoValidade = validade;
    }
    vigencia() {
        let date = new Date();
        if (this.anoValidade - date.getFullYear() >= 0) {
            return 'O produto (' + this.nome + ') tem validade até o ano (' + this.anoValidade + 
                   '), e como está dentro da vigência, pode ser consumindo sem problemas.';
        } else {
            return 'O produto (' + this.nome + ') tem validade até o ano (' + this.anoValidade + 
                   '), sendo assim não pode ser consumindo pois expirou !';
        }
    }
}

let paracetamol = new ProdutoMedicamento("Paracetamol","Caixa/20",20,"Almoxarifado Central",2021,2024);
document.getElementById("p3.1").innerHTML = paracetamol.vigencia();

class ProdutoEscritorio extends Produto {
    constructor(nome,unidade,quantidade,ubicacao,tipo,cor,estoqueMin) {
        super(nome,unidade,quantidade,ubicacao);
        this.tipoProduto = tipo;
        this.cor = cor;
        this.estoqueMinimo = estoqueMin;
    }
    comprar() {
        if ((this.quantidade - this.estoqueMinimo) > 10) {
            return 'O produto (' + this.nome +') tem estoque atual (' + this.quantidade + ') e é maior que o estoque de segurança. Não precisa comprar';
        } else {
            return 'O produto (' + this.nome +') tem estoque atual (' + this.quantidade + ') e esta por baixo do estoque mínimo : COMPRAR !';
        }
    }
}

let caneta = new ProdutoEscritorio("Caneta Azul","Caixa / 10", 2, "Contabilidade", "Caneta", "Azul", 10);
document.getElementById("p3.2").innerHTML = caneta.comprar();

// 4) Defina um método estático para uma classe
//    A classe Pessoa já tem um método estático.

Pessoa.nome = "Ramiro";
Pessoa.sobreNome = "Zavala";
Pessoa.anoNascimento = 1970;
document.getElementById("p4.1").innerHTML = 'Idade : ' + Pessoa.idade();   //chamada ao método da classe


