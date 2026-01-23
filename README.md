## 👨‍💻 Autor

Desenvolvido por Pedro Mendonça

# 🎬 Cinelist API

API REST desenvolvida em **Node.js + Express** para a aplicação **Cinelist**, responsável por autenticação de usuários, gerenciamento de favoritos e integração com a API do **TMDB** para busca e descoberta de filmes.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MySQL
- JWT (Autenticação)
- Axios
- TMDB API
- Docker (opcional)

---

## 📁 Funcionalidades

- Autenticação de usuários (Login / Registro)
- Proteção de rotas com JWT
- Buscar filmes populares
- Buscar filmes por texto
- Buscar filmes por gênero (discover)
- Listar gêneros diretamente da API do TMDB
- Detalhes do filme (incluindo elenco e vídeos)
- Sistema de favoritos por usuário

---

## 🔐 Autenticação

A API utiliza **JWT** para autenticação.

---

## ▶️ Como rodar o projeto

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

---

## 🧠 Observações

- Toda a integração com o TMDB é feita via backend

- O frontend nunca acessa a API do TMDB diretamente

- Estrutura organizada em routes / controllers / services

---