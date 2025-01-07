## Gerenciamento de Produtos para a Loja AgilStore

### Sobre o Projeto:

A **AgilStore** é uma pequena loja de eletrônicos que recentemente expandiu seu catálogo de produtos para incluir uma variedade maior de itens, desde smartphones e laptops até acessórios como cabos, carregadores e fones de ouvido. Com o aumento do número de produtos e a diversidade das categorias, a equipe de gerenciamento percebeu a necessidade de otimizar o controle do inventário para garantir que os produtos estejam sempre disponíveis para os clientes e que os níveis de estoque sejam mantidos de forma eficiente.

### Tecnologias Utilizadas:

- **Node.js:** Para o desenvolvimento do backend.

- **Express.js:** Para gerenciar as requisições e respostas.

- **Sequelize:** ORM para interagir com o banco de dados.

- **PostgreSQL:** Banco de dados utilizado no projeto.

- **TypeScript:** Para tipagem estática e maior segurança no código.

- **Docker:** Para facilitar a criação de ambientes isolados.

## Como Rodar a Aplicação Localmente:

### Pré-requisitos

Certifique-se de ter instalado:

- Git
- Node.js
- Docker
- NPM

### Importante⚠️</br>

Se estiver utilizando o Windows, abra o Docker Desktop, caso não tenha instalado, faça o downlod aqui</br>
[Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Passo a Passo:

#### 1. Clone esse repositório com o comando:

```bash
git clone git@github.com:carolhn/Loja_AgilStore.git
```

Entre no diretório raiz:

```bash
cd Loja_AgilStore
```

#### 2. Configure as variáveis de ambiente:</br>

Copie o arquivo `.env.example` para `.env` e preencha os valores necessários. Em seguida, remova a extensão `.example`

#### 3. Instale as dependências do projeto:

```bash
npm install
```

#### 4. Inicie os containers do banco de dados e backend:

```bash
docker-compose up -d
```

#### 5. Inicie o servidor localmente:

```bash
npm run dev
```

#### 6. Acesse a aplicação:

A aplicação estará disponível em: `http://localhost:5333`.

- Para listar todos os produtos `http://localhost:5333/products/list_product`.

#### 7. Testando a API

Para testar as rotas da API, basta importar o arquivo `insomnia_routes.json` presente na pasta `insomnia` no Insomnia. Esse arquivo já contém todas as requisições configuradas para facilitar o processo de testes.
