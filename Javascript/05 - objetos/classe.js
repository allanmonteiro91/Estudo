/*
A classe são modelos para criação de objetos. encapsula dados e funcionalidades
*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }

}

const allan = new Pessoa('Allan Monteiro Magalhães', 33);
const leo = new Pessoa('Leonardo Monteiro Magalhães', 37);

/*
Consigo atribuir inumeras variáveis para a mesma classe. podendo puxar os dados chamando pelo nome.
*/


allan.descrever();
leo.descrever();

function compararIdade(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`);
    }  else {
        console.log(`${pessoa1.nome} tem a mesma idade que ${pessoa2.nome}`);
    }
}
compararIdade(allan, leo);