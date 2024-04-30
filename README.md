# Hookah Finder API

Esta é a API para o aplicativo Hookah Finder, que permite aos usuários encontrar locais de lounges próximos, produtos relacionados à narguile.

## Funcionalidades

- Autenticação de usuários
- Gerenciamento de usuários
- Busca por lounges e produtos
- Adição, edição e remoção de locais

## Endpoints

### Autenticação

- `POST /api/auth/login`: Faz login de um usuário. Requer email e senha no corpo da solicitação. Retorna um token de autenticação válido por 1 hora.
- `POST /api/auth/logout`: Faz logout de um usuário. Requer um token de autenticação válido.

### Usuários

- `GET /api/users`: Retorna todos os usuários cadastrados.
- `GET /api/users/:id`: Retorna um usuário específico pelo ID.
- `POST /api/users`: Cria um novo usuário. Requer email, senha e nome no corpo da solicitação.
- `PUT /api/users/:id`: Atualiza os dados de um usuário existente pelo ID.
- `DELETE /api/users/:id`: Remove um usuário pelo ID.

### Locais de Narguilé

- `GET /api/locations`: Retorna todos os locais de narguilé cadastrados.
- `GET /api/locations/:id`: Retorna um local de narguilé específico pelo ID.
- `POST /api/locations`: Adiciona um novo local de narguilé. Requer informações sobre o local no corpo da solicitação.
- `PUT /api/locations/:id`: Atualiza os dados de um local de narguilé existente pelo ID.
- `DELETE /api/locations/:id`: Remove um local de narguilé pelo ID.

## Configuração

1. Instale as dependências:

```
npm install
```

2. Defina as variáveis de ambiente no arquivo `.env`:

```
PORT=5000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=HookahFinder
SECRET_JWT=your_secret_jwt
```

3. Execute a API:

```
npm start
```

## Tecnologias Utilizadas

- Node.js
- Express.js
- MSSQL
- JWT (JSON Web Tokens)

## Contribuição

Contribuições são bem-vindas! Para sugestões, correções de bugs ou outras melhorias, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
