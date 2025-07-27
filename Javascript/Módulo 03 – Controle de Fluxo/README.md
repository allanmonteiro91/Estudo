# 📘 Módulo 03 – Controle de Fluxo

Neste módulo, você aprendeu a criar lógica condicional no JavaScript para que o programa tome decisões baseadas em determinadas condições. Também vimos como repetir ações com os principais tipos de laços.

---

## 📌 Tópicos abordados

- `if`, `else if`, `else`
- `switch/case`
- Operadores ternários
- `for`, `while`, `do...while`
- Palavras-chave `break` e `continue`
- Boas práticas em estruturas condicionais e de repetição

---

## Aula 01 – Condicionais com `if`, `else if`, `else`

### 🎯 Objetivo:
Aprender a fazer o código tomar decisões com base em condições.

### 📘 Explicação:
```js
if (condicao) {
  // se verdadeiro
} else if (outraCondicao) {
  // outra possibilidade
} else {
  // caso nenhuma anterior seja verdadeira
}
```

### 🧪 Desafio:
Verificar a idade de uma pessoa e classificar como:
- Criança (menos de 12)
- Adolescente (12 a 17)
- Adulto (18 a 59)
- Idoso (60+)

---

## Aula 02 – Operadores Lógicos

### 🎯 Objetivo:
Usar `&&`, `||`, `!` para tomar decisões mais complexas.

### 📘 Explicação:
- `&&` (E): todas as condições devem ser verdadeiras
- `||` (OU): pelo menos uma deve ser verdadeira
- `!` (NÃO): inverte o valor booleano

### 🧪 Desafio:
Simular uma entrada em evento com base em:
- idade
- ingresso
- se está acompanhado

---

## Aula 03 – `switch/case`

### 🎯 Objetivo:
Usar `switch` para simplificar várias opções fixas de escolha

### 📘 Explicação:
```js
switch (variavel) {
  case 'opcao1':
    // instrução
    break;
  case 'opcao2':
    // instrução
    break;
  default:
    // se nenhuma opção for correspondente
}
```

### 🧪 Desafio:
Criar um menu de opções com os comandos `salvar`, `abrir`, `excluir`.

---

## Aula 04 – Operador Ternário

### 🎯 Objetivo:
Aprender uma forma curta de escrever condições simples.

### 📘 Explicação:
```js
condicao ? valorSeVerdadeiro : valorSeFalso;
```

### 🧪 Desafio:
Verificar se usuário é "Premium" ou "Comum" com base nos pontos.

---

## Aula 05 – Laços `for`

### 🎯 Objetivo:
Repetir instruções com `for`

### 📘 Explicação:
```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 🧪 Desafio:
- Contar de 1 a 10
- Exibir apenas números pares entre 1 e 20
- Somar todos os números pares entre 1 e 20

---

## Aula 06 – `while` e `do...while`

### 🎯 Objetivo:
Usar outros tipos de repetição

### 📘 Explicação:
- `while`: verifica antes de executar
- `do...while`: executa pelo menos uma vez

### 🧪 Desafio:
Contar até 10 com `while` e contar de volta com `do...while`

---

## Aula 07 – `break` e `continue`

### 🎯 Objetivo:
Controlar o fluxo dentro dos laços

### 📘 Explicação:
- `break`: encerra o laço
- `continue`: pula para a próxima repetição

### 🧪 Desafio:
- Usar `break` para parar ao encontrar um valor
- Usar `continue` para pular um valor específico

---

## Aula 08 – Desafio Final Integrado

### 🎯 Objetivo:
Consolidar tudo com uma situação real

### 🧪 Desafio:
Criar um programa que:
- Recebe idade, se tem ingresso e se está acompanhado
- Verifica se pode entrar em um evento com base nesses fatores

---

## ✅ Conclusão

Com esse módulo, você consegue controlar a execução do seu código com base em condições reais e repetir instruções de maneira eficiente. Isso é essencial para resolver problemas mais complexos no futuro.
