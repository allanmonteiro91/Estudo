# 📘 Módulo 02 – Trabalhando com Strings

Este módulo apresenta os fundamentos da manipulação de **strings (textos)** no JavaScript. Você aprenderá a cortar, transformar, limpar, juntar e dividir textos, além de realizar substituições e aplicar boas práticas.

---

## 🧩 O que são Strings?

Strings são textos que podem conter letras, números e símbolos. Em JavaScript, são delimitadas por aspas simples (`'texto'`), duplas (`"texto"`), ou crase (`` `texto` `` para templates).

---

## 📌 Tópicos abordados

- `.length`: conta caracteres
- `.toUpperCase()` / `.toLowerCase()`
- `.includes()`, `.replace()`, `.replaceAll()`
- `.slice()`, `.substring()`, `.substr()`
- `.concat()`, `.trim()`, `.split()`

---

## 🧠 Dicas

- Sempre comente o que você está testando com uma `// explicação`
- Use strings com conteúdo real e claro para facilitar o entendimento
- Utilize `template literals` para construir mensagens com variáveis

---

## 🧪 Prática

- Crie arquivos para cada aula dentro da pasta do módulo
- Resolva os desafios propostos no final de cada aula
- Use `console.log()` para visualizar e testar o comportamento

---

## Aula 01 – Propriedades e Métodos Básicos

### 🎯 Objetivo:
- Trabalhar com strings e seus métodos mais comuns

### 📘 Explicação:
- `.length`: conta os caracteres
- `.toUpperCase()`: transforma tudo em maiúsculo
- `.toLowerCase()`: transforma tudo em minúsculo
- `.includes()`: verifica se uma palavra existe na string
- `.replace()`: troca parte da string

### 🧪 Desafio 01:
- Criar uma string com uma frase sobre você
- Mostrar:
  - Quantidade de caracteres
  - Frase em caixa alta
  - Frase em caixa baixa
  - Se contém a palavra "JavaScript"
  - Substituição de uma palavra

---

## Aula 02 – Cortando Strings

### 🎯 Objetivo:
- Aprender a extrair partes específicas de uma string

### 📘 Explicação:

- `slice(inicio, fim)`: retorna parte da string (fim é exclusivo)
- `substring(inicio, fim)`: similar ao slice, mas sem negativos
- `substr(inicio, qtd)`: retorna qtd de caracteres (menos usado)

### 🧪 Desafio 02:
- Criar uma string com mais de 20 caracteres
- Mostrar:
  - Uma parte do meio com `.slice()`
  - O início da string com `.substring()`
  - Os primeiros 5 caracteres com `.substr()`

---

## Aula 03 – Manipulações e Limpeza

### 🎯 Objetivo:
- Aprender a limpar, juntar e dividir strings

### 📘 Explicação:

- `.concat()`: junta strings
- `.trim()`: remove espaços desnecessários
- `.split(separador)`: quebra string em array
- `.replaceAll()`: substitui todas as ocorrências

### 🧪 Desafio 03:
- Criar duas variáveis: `nome` e `sobrenome`
- Concatenar com `.concat()`
- Criar uma frase com espaços e limpar com `.trim()`
- Dividir uma frase com `.split()`
- Substituir palavras com `.replaceAll()`

---

✅ Módulo finalizado! Agora você domina a base para trabalhar com textos no JavaScript.