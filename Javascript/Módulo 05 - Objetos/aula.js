const pessoa = {
    nome: 'Allan Monteiro',
    idade: 33,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //pode utilizar funções dentro do objetivo
    }
};

pessoa.descrever(); //chama a função
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.altura = 1.82; //adiciona um objeto na const

console.log(pessoa.altura);

delete pessoa.idade; //remove um objeto da const

console.log(pessoa);   

pessoa.nome = 'João'; //atribui outro parametro pro nome
pessoa.altura = 1.90;

pessoa.descrever = function () {
    console.log(`Meu nome agora é ${this.nome}`); //é possível também sobrescrever uma função atribuindo novo valor
}
pessoa.descrever();
console.log(pessoa.nome);
console.log(pessoa.altura);  

const atributo = 'nome'; //ao utilizar a string, ele puxa a variavel.

console.log(pessoa[atributo]);

pessoa['altura'] = 1.80; //atribui um novo parametro dentro do atributo. 

console.log(pessoa['altura']);
console.log(pessoa.altura); 