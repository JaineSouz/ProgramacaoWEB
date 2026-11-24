# 🌐 Programação Web - Receitas de Aprendizado

Repositório com as atividades práticas e receitas de desenvolvimento web, cobrindo desde os fundamentos (HTML, CSS e JavaScript) até o desenvolvimento de aplicações completas com **React** e **Next.js**.

---

## 📂 Estrutura do Repositório

O projeto é dividido em dois grupos de receitas:

1. **Receitas 1 a 12 (Páginas Estáticas):**
   * HTML5 semântico, estilização com CSS3, manipulação do DOM e JavaScript assíncrono.
   * Introdução ao React (JSX, componentes com classes e componentes funcionais via CDN).

2. **Receitas 13 em diante (Aplicações Next.js):**
   * Aplicações completas em **Next.js (App Router)** rodando sobre **Node.js**.
   * Roteamento baseado no sistema de arquivos, layouts aninhados (*nested layouts*), consumo de APIs externas (*Server-Side Data Fetching*) e formulários nativos.

---

## 🚀 Como Executar as Receitas

### 🔹 Receitas 1 a 12 (HTML / JS / React CDN)
Essas receitas não precisam de instalação de pacotes:
1. Abra o arquivo [`index.html`](./index.html) na raiz do repositório em qualquer navegador (dando dois cliques nele ou usando a extensão **Live Server** no VS Code).
2. Utilize o menu de links para navegar diretamente até a receita desejada.

---

### 🔹 Receitas 13 em diante (Next.js / npm)
Essas receitas são aplicações Next.js e necessitam do **Node.js** e **npm** instalados na máquina.

#### Passo 1: Acesse a pasta da receita desejada no terminal
Abra o terminal (PowerShell, Prompt de Comando ou terminal integrado do VS Code) na pasta da receita que deseja rodar:

```bash
# Exemplo para a Receita 18:
cd "Receita 18"
```

*(Ou `cd "Receita 13"`, `cd "Receita 14"`, `cd "Receita 15"`, `cd "Receita 16"`, `cd "Receita 17"`)*

#### Passo 2: Instale as dependências (Apenas na 1ª vez)
Para baixar os pacotes necessários especificados no `package.json`, execute:

```bash
npm install
```

#### Passo 3: Inicie o servidor de desenvolvimento
Execute o comando de inicialização:

```bash
npm run dev
```

#### Passo 4: Acesse no seu navegador
Assim que o terminal indicar que o servidor está pronto (`Ready in ...`), abra seu navegador e acesse:

👉 **[http://localhost:3000](http://localhost:3000)**

> [!TIP]
> **Como parar o servidor:**  
> Quando terminar de testar ou quiser trocar de receita, pressione **`Ctrl + C`** no terminal e confirme com `S` (ou `Y`). Para voltar à raiz do repositório, digite `cd ..`.

---

## 📋 Sumário das Receitas

| Receita | Título / Tema Principal | Tecnologias |
| :--- | :--- | :--- |
| **01** | HTML Básico | HTML5 |
| **02** | CSS Básico | CSS3 |
| **03** | JavaScript Básico | JavaScript |
| **04** | JavaScript Básico 2 (Manipulação do DOM) | JavaScript |
| **05** | Arrow functions e Callbacks | JavaScript ES6 |
| **06** | Objetos JSON | JSON / JavaScript |
| **07** | Fetch API | JavaScript Assíncrono |
| **08** | Promessas (*Promises*) | JavaScript |
| **09** | React: Primeiros Passos | React / Babel |
| **10** | React: Introdução ao JSX | React / JSX |
| **11** | React: Componentes com Classes | React |
| **12** | React: Propriedades e Desestruturação | React |
| **13** | Next.js: Aplicação e Páginas | Next.js / Node.js |
| **14** | Next.js: Páginas e Componentes Reutilizáveis | Next.js (App Router) |
| **15** | Next.js: Layouts e Links (Root e Nested Layouts) | Next.js |
| **16** | Next.js: Data Fetching I (Consumo da OMDb API no Servidor) | Next.js / Server Components |
| **17** | Next.js: Formulário de Pesquisa (Componente `<Form>` e Layout Dinâmico) | Next.js (`next/form`) |
| **18** | Next.js: Data Fetching e Client Components (`useState`, Memo e Performance) | Next.js (`use client`) / React Hooks |
