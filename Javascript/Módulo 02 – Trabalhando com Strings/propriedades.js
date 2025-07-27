

const texto = "JavaScript é incrível!";

console.log(texto.length); //total de caracter, incluindo espaços
console.log(texto.toUpperCase()); //transforma tudo em caixa alta
console.log(texto.toLowerCase()); //transforma tudo em caixa baixa
console.log(texto.includes('Script')); // true or false caso contenha a palavra
console.log(texto.replace('incrível', 'TOP')); //substitui a palavra do primeiro paramentro pela do segundo
console.log(texto.slice(0, 10)); //imprime o range selecionado do início ao fim. cortando pra fora da frase
console.log(texto.substring(4, 10)); //a mesma coisa do slice
console.log(texto.substr(0, 4)); //*depreciado* 


let nome = 'Allan';
let sobrenome = 'Monteiro';

console.log(nome.concat(' ', sobrenome)); //concatena o nome com o sobrenome

let frase = ' Olá Mundo! ';

console.log(frase.trim()); // remove os espaços desnecessários
console.log(frase.trimStart()); // remove os espaços desnecessários do início
console.log(frase.trimEnd()); // remove os espaços desnecessários do final
console.log(frase.split(' ')); //retorna um array a partir de um separador

frase = 'JS é legal. JS é divertido';

console.log(frase.replaceAll('JS', 'JavaScript')); //substitui todas as palavras do primeiro paramentro pela palavra do segundo.