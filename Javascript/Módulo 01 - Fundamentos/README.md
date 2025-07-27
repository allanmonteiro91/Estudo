# 📘 Módulo 01 – Fundamentos do JavaScript

Neste módulo, você aprenderá os conceitos mais básicos do JavaScript. Esses fundamentos são essenciais para qualquer desenvolvimento futuro na linguagem.

---

## 🧩 O que é JavaScript?

JavaScript é uma linguagem de programação voltada para desenvolvimento web, utilizada para dar interatividade às páginas. Pode ser executada tanto no navegador quanto no servidor (Node.js).

---

## 📌 Tópicos abordados

- **`console.log()`**: imprime mensagens no terminal ou console do navegador.
- **Comentários**: para explicar partes do código (`// comentário` ou `/* comentário */`).
- **Variáveis**: criadas com `let`, `const` ou `var` (evitar `var`).
- **Tipos primitivos**:
  - String: textos (`"Olá"`)
  - Number: números (`42`, `3.14`)
  - Boolean: verdadeiro/falso (`true` ou `false`)
  - Null / Undefined: ausência ou valor indefinido
- **Operadores**:
  - Aritméticos: `+`, `-`, `*`, `/`, `%`
  - Comparação: `==`, `===`, `!=`, `!==`, `<`, `>`
  - Lógicos: `&&`, `||`, `!`

---

## 🧠 Dicas

- Use sempre `const` quando a variável não for mudar.
- `let` para valores que mudarão.
- `console.log` é seu melhor amigo para testar ideias.

---

## 🧪 Prática

- Teste os arquivos `variaveis.js`, `tipos-dados.js` e `operadores.js`
- Resolva os desafios da pasta `/exercicios`


# 📘 Módulo 01 – Fundamentos do JavaScript

Este módulo apresenta os primeiros passos para programar em JavaScript, focando na base lógica, sintaxe e boas práticas. Acompanhe abaixo o conteúdo detalhado de cada aula.

---

## Aula 01 – `console.log()` e Comentários

### 🎯 Objetivo:
- Aprender a exibir informações no console
- Compreender como usar comentários no código

### 📘 Explicação:
- `console.log()` imprime mensagens no terminal
- Comentários ajudam a documentar seu código:
  - `//` para uma linha
  - `/* ... */` para múltiplas linhas

### 🧪 Desafio:
- Escrever duas mensagens com `console.log()`
- Comentar cada linha do código

---

## Aula 02 – Variáveis (`let`, `const`)

### 🎯 Objetivo:
- Entender como criar e usar variáveis

### 📘 Explicação:
- `let`: variável que pode ser alterada
- `const`: constante, valor fixo
- `var`: forma antiga, evite usar

### 💡 Dica:
Prefira `const` sempre que possível.

### 🧪 Desafio:
- Criar variável com seu nome (`let`)
- Criar constante com sua cidade (`const`)
- Exibir frase combinando ambos

---

## Aula 03 – Tipos Primitivos

### 🎯 Objetivo:
- Identificar os principais tipos primitivos

### 📘 Explicação:
- `string`, `number`, `boolean`, `undefined`, `null`
- `typeof` mostra o tipo de uma variável

### 💡 Curiosidade:
```js
typeof null // retorna 'object' (bug histórico)
```

### 🧪 Desafio:
- Criar 5 variáveis, uma de cada tipo
- Exibir valor e tipo usando `typeof`

---

## Aula 04 – Operadores

### 🎯 Objetivo:
- Usar operadores para realizar cálculos e comparações

### 📘 Explicação:
**Aritméticos**: `+`, `-`, `*`, `/`, `%`, `**`  
**Comparação**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`  
**Lógicos**: `&&`, `||`, `!`

### 🧪 Desafio:
- Criar 2 variáveis numéricas
- Fazer 5 operações aritméticas
- Mostrar 3 comparações
- Usar um operador lógico em uma verificação (ex: idade para evento)

---

## Aula 05 – Coerção e Conversão de Tipos

### 🎯 Objetivo:
- Entender como o JavaScript lida com tipos automaticamente

### 📘 Explicação:

**Coerção Implícita (automática):**
```js
'5' + 1 // '51'
'5' - 1 // 4
true + 1 // 2
```

**Conversão Explícita:**
```js
Number('10')  // 10
String(10)    // '10'
Boolean(0)    // false
```

### 💡 Dica:
Evite confiar em coerções implícitas.

### 🧪 Desafio:
- Criar string com número
- Converter e somar
- Mostrar coerção automática
- Mostrar conversão explícita

---

## Aula 06 – `typeof` e Boas Práticas com Variáveis

### 🎯 Objetivo:
- Utilizar `typeof`
- Aplicar boas práticas de declaração

### 📘 Explicação:

- `typeof` mostra o tipo de uma variável
- Variáveis devem seguir `camelCase`
- Usar nomes descritivos (`idadeUsuario`, `precoProduto`)
- Evitar abreviações confusas

### 🧪 Desafio:
- Criar 3 variáveis com nomes descritivos
- Usar valores de tipos diferentes
- Imprimir valor e tipo de cada uma