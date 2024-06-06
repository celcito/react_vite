# Duo Frontend

Duo é uma aplicação web para gerenciamento de usuários, desenvolvida utilizando as tecnologias React, TypeScript, Vite e Styled Components. A aplicação permite que os usuários se cadastrem, façam login e tenham acesso a áreas protegidas após autenticação.

## Estrutura do Projeto

O projeto está organizado em pastas específicas para componentes, páginas, hooks personalizados, serviços de API e helpers. Abaixo segue uma descrição detalhada das principais partes do projeto:

### Componentes

Os componentes são responsáveis pela estrutura visual da interface do usuário. Eles incluem:

- **CustomHeader**: Um componente de cabeçalho personalizado que exibe o logo e um botão de logout.
- **CustomButton**: Um botão estilizado usado em várias partes da aplicação.
- **FormCreate**: Um formulário para criação de novos usuários.
- **LoginPage**: Página de login dos usuários.
- **CreatePage**: Página para criar um novo usuário.
- **WelcomePage**: Página de boas-vindas dos usuários.
- **NotFoundPage**: Página de página não encontrada.

### Hooks

Os hooks são funções personalizadas que ajudam a simplificar o código e tornar a aplicação mais modular,separando a logica do componente e a lógica do serviço de API.

- **useForm**: Um hook que permite criar formulários de login e criação de usuários.
- **useCreate**: Um hook que permite criar formulários de de criação de usuários.

### Serviços de API

-Os serviços de API são responsáveis por fazer chamadas HTTP para interagir com o backend. Inclui:

- **postRequest**: Função para realizar requisições POST.

### Helpers

Os helpers contêm funções auxiliares para operações específicas, como:

- **verifyTokenExpired**: Função para verificar se um token JWT expirou.


### Css

-Para estilização de componentes React usando CSS-in-JS  utlizado display grid para estrutuação do layoute e flexbox para alinhamento de elementos.




## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Linguagem de programação tipada para JavaScript.
- **Vite**: Ferramenta de build moderna para construir projetos web.
- **Styled Components**: Biblioteca para estilização de componentes React usando CSS-in-JS.
- **React Router Dom**: Biblioteca para roteamento no lado do cliente em aplicações React.
- **Yup**: Biblioteca para validação de esquemas.
- **Formik**: Biblioteca para gerenciamento de formulários em React.
- **React Toastify**: Biblioteca para notificações em tempo real.

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório do projeto.
2. Instale as dependências executando `npm install` ou `yarn`.
3. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`.
4. Clone o repositório do projeto backend https://github.com/celcito/duo_system.git
5. Na raiz do  projeto rode o o comando `docker-compose up -d` isso vai iniciar o banco de dados rodar a migration inicial e iniciar o servidor na porta 3000 ps ainda estou trabalhando para rodar todo o serviço junto.

Agora você pode acessar a aplicação em seu navegador através do endereço `http://localhost:5173`.

## Proximos passos 

Alterar a arquitetura do projeto para utilizar clean architecture.

## Contribuição

Contribuições são bem-vindas Por favor, leia o arquivo `CONTRIBUTING.md` antes de enviar suas alterações.

## Licença

Este projeto é licenciado sob a licença MIT.
