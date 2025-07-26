/* Desafio
- Crie duas variáveis numéricas
- Mostre o resultado dos 5 operadores aritméticos básicos entre elas
- Mostre pelo menos 3 operadores de comparação
- Crie um exemplo com operador lógico que simule uma decisão (ex: "pode entrar no evento")
*/

// declaração de variáveis numéricas
const variavel1 = 5;
const variavel2 = 10;

//operadores aritiméticos
const soma = variavel1 + variavel2;
const subtracao = variavel2 - variavel1;
const multiplicacao = variavel1 * variavel2;
const divisao = variavel2 / variavel1;
const potencia = variavel1 ** variavel2;

//operadores de comparação

const igualdade = variavel1 == 5;
const diferenca = variavel2 != variavel1;
const maior = variavel2 > variavel1;


//resultados aritiméticos
console.log (soma);
console.log (subtracao);
console.log (multiplicacao);
console.log (divisao);
console.log (potencia);

//resultados de comparação
console.log (igualdade);
console.log (diferenca);
console.log (maior);


// Precisa ter 18 anos para entrar no evento

const nome = 'Allan';
const idade = 15;

if (idade >= 18){
    console.log (`${nome} pode entrar no evento`)
} else {
    console.log (`${nome} é menor de idade e por isso não pode entrar no evento!`)
}