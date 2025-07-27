/* Desafio
- Crie uma string com uma frase sobre você.
Mostre:
- Quantos caracteres tem a frase
- A frase toda em maiúsculas
- A frase toda em minúsculas
- Se a frase contém a palavra "JavaScript"
- Troque uma palavra da frase por outra
*/

//Criando a String
const texto = 'Meu nome é Allan Monteiro.';


//Aplicando as propriedades
console.log(`Este texto tem ${texto.length} caracteres`); //total de caracter, incluindo espaços
console.log(texto.toUpperCase()); //transforma tudo em caixa alta
console.log(texto.toLowerCase()); //transforma tudo em caixa baixa
console.log(texto.includes('JavaScript')); // true or false caso contenha a palavra
console.log(texto.replace('Allan Monteiro', 'Hoppuz')); //substitui a palavra do primeiro paramentro pela do segundo

/*
Crie uma frase com mais de 20 caracteres

Use:
- .slice() para pegar uma palavra do meio
- .substring() para pegar o início da frase
- .substr() para pegar os 5 primeiros caracteres

Exiba tudo com console.log() e comente cada linha explicando o que está sendo feito.
*/

console.log(texto.slice(4, 8)); // Usando slice para pegar "nome"
console.log(texto.substring(0, 3)); // Usando substring para pegar "Meu"
console.log(texto.substr(0, 5)); // Usando substr para pegar os 5 primeiros caracteres: "Meu n"


/*
No seu script, faça:
- Crie duas variáveis: nome e sobrenome
- Junte ambas com concat() e exiba
- Crie uma frase com espaços antes e depois, limpe com trim()
- Divida uma frase usando split()
- Substitua todas as ocorrências de uma palavra com replaceAll()
*/

let nome = 'Allan';
let sobrenome = 'Monteiro';

console.log(nome.concat(' ', sobrenome)); //concatena o nome com o sobrenome

let frase = ' Olá Mundo! Estou estudando JavaScript. Após estar confiante, passarei a estar estudando outra linguagem ';

console.log(frase.trim()); // remove os espaços desnecessários
console.log(frase.split(' ')); //retorna um array a partir de um separador
console.log(frase.replaceAll('estudando', 'aprendendo')); //substitui todas as palavras do primeiro paramentro pela palavra do segundo.