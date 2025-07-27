
/* 🧪 Desafio:

Crie um programa que:
Armazene a idade de uma pessoa.

Verifique:
Se for menor que 12: "Criança"
Se for entre 12 e 17: "Adolescente"
Se for entre 18 e 59: "Adulto"
Se for 60 ou mais: "Idoso"
*//*

const nome = 'Allan' //armazena nome
const idade = 16; //Armazenar a idade
const temIngresso = true;
const acompanhado = true;

if (idade < 12) {
    console.log(`${nome} tem ${idade} e por isso ele é criança`);
} else if (idade >= 12 && idade <= 17) {
    console.log(`${nome} tem ${idade} e por isso ele é Adolescente`);
} else if (idade >= 18 && idade <= 59) {
    console.log(`${nome} tem ${idade} e por isso ele é Adulto`);
} else {
    console.log(`${nome} tem ${idade} e por isso ele é Idoso`);
}
*/
/* 🧪 Desafio:

Crie um programa que avalie se uma pessoa pode entrar em um cinema:
Crie três variáveis:
idade
temIngresso (true ou false)
acompanhado (true ou false)

Regras para entrar:
Se tiver 16 anos ou mais e ingresso → pode entrar
Se tiver menos de 16, mas estiver acompanhado e com ingresso → pode entrar
Caso contrário → barrado
*//*

if ((idade >= 16 && temIngresso) || (idade < 16 && acompanhado && temIngresso)) {
    console.log(`${nome} pode entrar`);
} else {
    console.log(`${nome} não pode entrar`);
}*/


/* 🧪 Desafio:
Crie um programa que receba uma variável comando e exiba a ação correspondente:
Se o valor for:
"salvar" → exibir: Salvando arquivo...
"abrir" → exibir: Abrindo arquivo...
"excluir" → exibir: Excluindo arquivo...
Qualquer outro → Comando não reconhecido
*/
/*
const comando = 'salvar';

switch (comando) {

    case 'salvar':
        console.log('Salvando arquivo...');
        break;
    case 'abrir':
        console.log('Abrindo arquivo...');
        break;
    case 'excluir':
        console.log('Excluindo arquivo...');
        break;
    default:
        console.log('Comando não reconhecido');
}*/

/* 🧪 Desafio:
Crie um programa que:
Armazene a variável pontos com um número qualquer.
Use o operador ternário para exibir:
"Usuário Premium" se pontos >= 100
"Usuário Comum" caso contrário
*/
/*
const pontos = 350;

const tipoUsuario = pontos >= 100 ? 'Usuário Premium' : 'Usuário Comum';
console.log(tipoUsuario);
*/
/*
🧪 Desafio:
Crie um programa que:
Use um for para imprimir os números de 1 a 10.
Depois, crie um for que imprima apenas os números pares de 1 a 20.
Extra: Mostre no console o total de números pares encontrados.
*/
/*
// Números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`Contando: ${i}`);
}

// Números pares de 1 a 20
let totalPares = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Par: ${i}`);
        totalPares++;
    }
}

console.log(`Total de pares encontrados: ${totalPares}`);

// Soma dos números de 1 a 10 
let somarTotal = 0;

for (let i = 1; i <= 10; i++) {
    somarTotal += i;
}

console.log(`Soma: ${somarTotal}`);
*/

/* 
Desafio:
Crie um contador com while que imprima os números de 1 a 10.
Crie um contador com do...while que imprima os números de 10 a 1 (ordem decrescente).
Extra: Mostre uma mensagem ao final do loop com console.log('Fim do loop').
*/
/*
let v = 1;

while (v <= 10) {
    console.log(`Valor de ${v}`);
    v++;
}

let d = 10;

do {
    console.log(`Valor de ${d}`);
    d--;
} while (d >= 1);

console.log('Fim do loop');
*/

/* 🧪 Desafio:
Crie um for que conte de 1 até 10.
Se o número for 7, use break para parar o loop.
Crie outro for de 1 até 5.
Pule o número 3 usando continue. */

/*
for (let i = 1; i <= 10; i++) {
  if (i === 7) { // Vai imprimir 1 a 6 e parar.
    break;
  }
  console.log(i);
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) { // Ao chegar no 3, irá pular e continuar.
    continue;
  }
  console.log(i);
}

*/

/*
🧪 Desafio Final do Módulo 03
🔸 Enunciado:
Crie um programa que:

Solicite a idade de uma pessoa.

Determine se ela pode entrar em um evento com base nas seguintes regras:

Menores de 16 não entram

Entre 16 e 17 só entram acompanhados

A partir de 18 anos entram livremente

O programa também deve validar se a pessoa tem ingresso(true ou false)

Imprima mensagens diferentes para cada situação(ex: “Pode entrar”, “Precisa estar acompanhado”, “Não pode entrar”)

Use if/else, operadores lógicos, e uma estrutura limpa com boas práticas.*/


const nome = 'João';
const idadePessoa = 18;
const temIngresso = true;
const acompanhado = true;

if (!temIngresso) {
    console.log(`${nome} não pode entrar porque não tem ingresso.`);
} else if (idadePessoa >= 18 && temIngresso) {
    console.log(`${nome} pode entrar livremente.`);
} else if (idadePessoa >= 16 && acompanhado && temIngresso) {
    console.log(`${nome} pode entrar porque tem entre 16 e 17 anos e está acompanhado.`);
} else {
    console.log(`${nome} não pode entrar porque é menor de 16 anos ou não está acompanhado.`);
}
