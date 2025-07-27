
const idade = 18;

if (idade >= 18){ //Se o parametro foi verdadeiro, retornará o primeiro comando. Se for falso, retornará o 'else';
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

/* Operador Ternário

O operador ternário tem essa estrutura:
condição ? valor_se_verdadeiro : valor_se_falso;
É como dizer:
“Se essa condição for verdadeira, execute isso. Senão, execute aquilo.”

*/

const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(mensagem); // Maior de idade
