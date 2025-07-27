// A estrutura switch é útil quando você quer comparar uma variável contra vários valores possíveis:


const dia = 'segunda';

switch (dia) {
  case 'segunda':
    console.log('Hoje é segunda-feira');
    break;
  case 'terça':
    console.log('Hoje é terça-feira');
    break;
  default:
    console.log('Dia não reconhecido');
}
