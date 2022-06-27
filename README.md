# Desafio SM Places

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
[![SM Places](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/8zjry6&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/8zjry6/runs)

## Desafio

- Ao acessar a página inicial, será exibida a tela do - Dashboard(index) com uma simples apresentação sobre você.
- Teremos um Sidebar com a nossa logo, clique aqui pra visualizar.
- Logo abaixo da logo, teremos um Menu para a visualização dos dados vindos da API.
- Testes são essenciais, foque em garantir a experiência do usuário com testes que façam sentido.

Link do desafio completo clique [aqui](https://gist.github.com/hudsonmarinho/e5ce6c3db04a0c0a0b3a35ba34fffa9c)

Link do Projeto: [SM Salles](https://desafio-smplaces.vercel.app/)

Para desenvolver este desafio utilizei as seguintes ferramentas:

- ReactJS
- NextJS
- Styled Components
- React Context
- Atomic Design (organização dos Components)
- Storybook
- Jest e Cypress
- Docker
- Github Actions

### Requerimentos

- Nodejs: 16.13.2 ou superior
- Docker (opcional)

### Board

Para fins de organização, construi esta [board](https://github.com/JoaoVictorViana/desafio-smplaces/projects/1) para listar todas as demandas necessárias para a construção do projeto. 

### Vercel

O projeto foi hospedado na Vercel para facilitar a visualização:

[Projeto SM Salles](https://desafio-smplaces.vercel.app/)

### Github Actions

Para garantir a confiabilidade da aplicação, desenvolvi duas Actions:

- Deploy in Vercel: Tem como objetivo facilitar e automatizar o deploy na Vercel
- Linter and Testing Project: Validação da estilização do código e boas práticas, como também a validação dos teste em Jest e Cypress.

Para acompanhar todos os Actions clique [aqui](https://github.com/JoaoVictorViana/desafio-smplaces/actions)

## Instalação

Primeiro será necessário clonar essa aplicação com os seguintes comandos

```bash
git clone https://github.com/JoaoVictorViana/desafio-smplaces.git
cd desafio-smplaces
```

Em seguida instale todas as dependências do projeto

```bash
npm install
```

Por fim rode os seguintes comandos para rodar a aplicação, e logo após acesse http://localhost:3000

```bash
npm run build && npm run start
```

### Docker

O projeto inclui uma imagem Dockerfile, portanto caso queira rodar toda aplicação em um container execute os seguintes comandos:

```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

### Testes

Para executar os teste unitário com Jest rode o comando:

```bash
npm run test
```

Para executar os teste e2e com Cypress rode o comando:

```bash
npm run cypress
```

Observação: Antes de executar o Cypress, é necessário estar com a aplicação rodando.

Também é possível acompanhar a execução dos testes com Cypress no Github Actions [aqui](https://dashboard.cypress.io/projects/8zjry6/runs)

### Storybook

O projeto também inclui a prototipação de alguns componentes com o [Storybook](https://storybook.js.org/). Para roda-lo basta usar o comando:

```bash
npm run storybook
```

O mesmo também pode ser visualizado [aqui](https://www.chromatic.com/builds?appId=62b6a0f22a5ceb00870b2b4b)
