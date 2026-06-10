

# Projeto CineDashboard - Apresentação Dinâmica de Dados

## 👤 Dados do Aluno
* **Nome:** Daniell
* **Curso:** Engenharia d Software / PUC MINAS

## 🎬 Sobre a Funcionalidade
Foi desenvolvida uma página de **Dashboard Dinâmico** integrada ao catálogo de filmes existente. A aplicação consome os dados do arquivo `db.json` via **JSON Server** e utiliza a biblioteca **Chart.js** para renderizar gráficos interativos e responsivos em tempo real.

* **Tipo de Visualização:** Gráfico de barras verticais.
* **Objetivo:** Exibir de forma clara e visual a quantidade de filmes cadastrados por cada categoria/gênero no sistema, auxiliando no gerenciamento do catálogo.

---

## 📊 Prints das Telas (Testes do CRUD)

### Teste 1: Estado Inicial do Catálogo
Gráfico exibindo as categorias iniciais cadastradas (Ficção Científica, Drama, Suspense e Ação).
![Teste 1](./public/images/dashboard_teste1.png)

### Teste 2: Atualização Dinâmica (Adição de Novo Gênero)
Gráfico atualizado em tempo real após a inserção de um filme na categoria **Terror** através do formulário de cadastro.
![Teste 2](./public/images/dashboard_teste2.png)