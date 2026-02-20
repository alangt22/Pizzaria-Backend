# Backend - Sujeito Pizza

API RESTful para sistema de gerenciamento de pizzaria com controle de pedidos, produtos e categorias.

## Stack

- **Runtime**: Node.js
- **Linguagem**: TypeScript
- **Framework**: Express.js
- **ORM**: Prisma
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT (JSON Web Token)
- **Upload de Arquivos**: Multer + Cloudinary
- **Deploy**: Vercel

## Funcionalidades

### Autenticação
- Criação de usuários
- Login com autenticação JWT
- Dados do usuário autenticado

### Categorias
- Criar categorias
- Listar todas as categorias

### Produtos
- Criar produtos (nome, preço, descrição, imagem)
- Listar produtos por categoria

### Pedidos
- Criar pedido (关联 mesa)
- Adicionar itens ao pedido
- Remover itens do pedido
- Enviar pedido para cozinha
- Finalizar pedido
- Cancelar/remover pedido
- Listar pedidos
- Detalhes do pedido


## Variáveis de Ambiente

```env
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
```

## Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|------------|
| POST | /users | Criar usuário |
| POST | /session | Login |
| GET | /me | Dados do usuário |
| POST | /category | Criar categoria |
| GET | /category | Listar categorias |
| POST | /product | Criar produto |
| GET | /category/product | Listar produtos por categoria |
| POST | /order | Criar pedido |
| POST | /order/add | Adicionar item |
| DELETE | /order/remove | Remover item |
| PUT | /order/send | Enviar para cozinha |
| PUT | /order/finish | Finalizar pedido |
| GET | /orders | Listar pedidos |
| GET | /order/detail | Detalhes do pedido |

## Arquitetura

```
src/
├── controllers/    # Controladores (recebem requisições)
├── services/      # Lógica de negócio
├── middlewares/   # Middlewares (autenticação)
├── prisma/        # Cliente Prisma
└── routes.ts      # Rotas da API

```

