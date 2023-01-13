<h1 align="center">Vuejs app</h1>

### Descrição

Este projeto se trata de um app web com a funcionalidade de criação, autenticação, edição e remoção de usuários.

### Funcionalidades
- Registro de novas contas com email, senha e outros dados de perfil.
- Autenticação
- Edição de dados de autenticação e de perfil
- Adicionar foto de perfil
- Remover usuário

### Como executar

É necessário ter o Node e o Git instalados.

Além disso, será necessário criar um projeto web no Firebase de acordo com esta <a href="https://firebase.google.com/docs/web/setup?authuser=0&%3Bhl=pt">documentação</a>.

Logo em seguida, habilite os serviços de autenticação (provedor email/senha), banco de dados firestore e o storage bucket.

No seu terminal, execute os seguintes comandos:

```bash
$ git clone https://github.com/danielfilh0/vuejs-app.git

$ cd vuejs-app

$ touch .env

```

No arquivo .env, substitua os valores pelas suas respectivas configurações fornecidas na criação do seu projeto do Firebase.

```javascript

NUXT_ENV_VERCEL_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NUXT_ENV_VERCEL_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NUXT_ENV_VERCEL_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NUXT_ENV_VERCEL_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NUXT_ENV_VERCEL_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NUXT_ENV_VERCEL_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

```

Depois disso, execute:

```bash

$ yarn

$ yarn dev

```

### Tecnologias utilizadas
- Vuejs 3
- Sass
- Firebase
