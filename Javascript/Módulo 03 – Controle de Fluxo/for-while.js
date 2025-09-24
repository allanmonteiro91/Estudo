//O for é uma estrutura de repetição (loop) usada quando sabemos quantas vezes queremos repetir algo.


/*
for (inicialização; condição; incremento) {
  // bloco de código a ser repetido
}
  */


for (let i = 1; i <= 5; i++) {
  console.log(`Contando: ${i}`);
}


//while usa estruturas de repetição que continuam enquanto uma condição for verdadeira.

let i = 1;

while (i <= 5) {
  console.log(`Valor de i: ${i}`);
  i++;
}


// break – interrompe o loop completamente:

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Vai imprimir 1 a 4 e parar.


//continue – pula a iteração atual e continua o loop:

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Vai imprimir 1, 2, 4, 5 (pula o 3).


