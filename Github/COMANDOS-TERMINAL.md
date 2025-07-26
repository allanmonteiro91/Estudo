
# 🖥️ Comandos Básicos de Terminal (PowerShell / Bash)

## 📁 Navegação entre Pastas

```bash
cd nome-da-pasta
```
_Entra em uma pasta específica._

```bash
cd ..
```
_Volta um nível na estrutura de pastas._

```bash
cd ../..
```
_Volta dois níveis na estrutura de pastas._

```bash
cd /caminho/completo
```
_Vai direto para um caminho completo no sistema._

```bash
ls
```
_Lista os arquivos e pastas do diretório atual (no Linux/Mac)._

```bash
dir
```
_Lista os arquivos e pastas do diretório atual (no Windows)._

---

## 🧹 Limpar o terminal

```bash
clear       # Linux / Mac
cls         # Windows PowerShell ou CMD
```
_Limpa a tela do terminal._

---

## 📂 Criar Pastas e Arquivos

```bash
mkdir nome-da-pasta
```
_Cria uma nova pasta._

```bash
touch nome-do-arquivo.ext
```
_Cria um novo arquivo vazio (funciona no Git Bash / Linux / Mac)._

```bash
echo. > nome-do-arquivo.txt
```
_Cria um arquivo vazio no Windows PowerShell / CMD._

---

## 🗑️ Deletar arquivos ou pastas

```bash
del nome-do-arquivo.ext
```
_Exclui um arquivo (Windows)._

```bash
rm nome-do-arquivo.ext
```
_Exclui um arquivo (Linux/Mac)._

```bash
rm -r nome-da-pasta
```
_Exclui uma pasta e tudo dentro dela (Linux/Mac)._

```bash
rmdir nome-da-pasta /s /q
```
_Exclui uma pasta com conteúdo no Windows PowerShell._

---

## 📝 Editar arquivos no VS Code

```bash
code .
```
_Abre a pasta atual no VS Code (se estiver com o atalho configurado)._

```bash
code nome-do-arquivo.ext
```
_Abre um arquivo específico no VS Code._

---

## 💡 Dicas rápidas

- Use `Tab` para autocompletar nomes de pastas/arquivos no terminal.  
- Use `set` ou `env` para ver variáveis de ambiente.  
- Use `exit` para fechar o terminal.

---
