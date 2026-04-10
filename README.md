# 🛒 Viora

## 📌 Descrição

Viora é um projeto de e-commerce desenvolvido com **Next.js**, utilizando a API pública **DummyJSON**.

O projeto foi criado com foco no desenvolvimento prático de aplicações frontend modernas, abordando desde integração com APIs REST até organização de código com arquitetura escalável.

A aplicação simula um fluxo real de e-commerce, incluindo navegação de produtos, carrinho de compras e autenticação de usuário.

---

## 🚀 Funcionalidades

### 🛍️ Produtos

* Navegação entre produtos
* Visualização de detalhes dos produtos
* Listagem de produtos por categoria
* Exibição de produtos relacionados
* Paginação de produtos

### 🛒 Carrinho

* Adicionar produtos ao carrinho
* Remover produtos do carrinho
* Atualizar quantidade de itens
* Cálculo automático do valor total
* Simulação de controle de estoque

### 🔐 Autenticação

* Login de usuário
* Registro de usuário

---

## 🧪 Tecnologias Utilizadas

### 🔧 Principais

* Next.js (App Router)
* React
* TypeScript
* TailwindCSS

### 📦 Bibliotecas

* Swiper.js (carrossel de produtos)
* React Icons

### 🌐 API

* DummyJSON API

---

## 🧱 Arquitetura

O projeto segue uma arquitetura baseada em **features**, organizando cada domínio da aplicação de forma independente.

```plaintext
src/
 ├── app/
 │    ├── (store)
 ├── features/
 │    ├── produtos/
 │    ├── categoria/
 │    ├── carrinho/
 │    └── auth/
 ├── shared/
 │    ├── components/
 │    ├── hooks/
 │    ├── context/
 │    ├── constants/
 │    ├── ui/
 │    └── utils/
 ├── lib/
 └── types/
```

### 🧠 Princípios aplicados

* Arquitetura baseada em features
* Separação de responsabilidades (UI, lógica e comunicação com API)
* Componentização e reutilização de código
* Isolamento das chamadas de API em services
* Desacoplamento entre interface e lógica de negócio
* Gerenciamento de estado global com Context API

---

## 🔗 API Utilizada

https://dummyjson.com/

### Endpoints utilizados

* `/products`
* `/products/{id}`
* `/products/category/{categoria}`
* `/auth/login`
* `/users/add`

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

---

## 🎯 Objetivos do Projeto

* Praticar integração com APIs REST
* Aplicar organização de código em aplicações reais
* Trabalhar com Server e Client Components no Next.js
* Implementar gerenciamento de estado global
* Desenvolver lógica de negócio no frontend
* Simular um fluxo real de e-commerce

---

## 🚧 Melhorias Futuras

* Implementar sistema de busca
* Melhorias de UI/UX

