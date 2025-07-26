
# 📘 Resumo de Comandos Git para GitHub

## 🔧 Configuração Inicial (uma vez só)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

_Configura seu nome e email para os commits que você fizer. Faça isso apenas uma vez no seu computador._

---

## 📥 Clonar um Repositório do GitHub

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

_Baixa o repositório remoto do GitHub para o seu computador, criando uma cópia local._

---

## 📋 Verificar Status do Repositório

```bash
git status
```

_Mostra quais arquivos foram modificados, adicionados, deletados ou ainda não rastreados pelo Git._

---

## ➕ Adicionar Arquivos ao Commit (Preparar mudanças)

```bash
git add .
git add -A
```

- `git add .`: adiciona as mudanças na pasta atual e subpastas  
- `git add -A`: adiciona todas as mudanças no projeto, incluindo arquivos deletados

---

## 💾 Salvar as Mudanças (Commit)

```bash
git commit -m "Descrição das mudanças"
```

_Salva as mudanças preparadas localmente com uma mensagem descritiva._

---

## 🚀 Enviar para o GitHub (Push)

```bash
git push
```

_Envia seus commits locais para o repositório remoto no GitHub._

---

## 🔄 Baixar Mudanças do GitHub (Pull)

```bash
git pull
```

_Atualiza seu repositório local com as mudanças feitas remotamente no GitHub._

---

## 📜 Ver Histórico de Commits

```bash
git log
```

_Mostra o histórico dos commits feitos no repositório._

---

## 📂 Mudar de Pasta no Terminal (PowerShell)

```bash
cd pasta     # Entra em uma pasta
cd ..        # Volta uma pasta
cd ../..     # Volta duas pastas
```

_Navegação entre pastas usando comandos no terminal._

---

## 🧹 Desfazer Mudanças (Opcional)

```bash
git restore arquivo.ext
git reset --hard HEAD
```

- `git restore`: volta o arquivo para o último commit
- `git reset --hard HEAD`: cancela tudo e volta para o último commit

---

## ✅ Dica extra — .gitignore

Adicione um arquivo `.gitignore` com:

```
node_modules/
.vscode/
*.log
```

_Ignora arquivos e pastas que não devem ser versionadas._

---
