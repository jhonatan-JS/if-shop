## Getting Started

```bash
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

.....e o projeto esta rodando

temos uma api externa para fazer um get dos produtos.
```
## - Como funciona?

Esse projeto consiste em simular um ecommerce, onde temos uma lista de produtos e um carrinho de compras.
clicando em comprar, o item vai para o carrinho, onde voce pode finalizar a compra ou limpar seu carrinho.

## - Estrutura do Projeto.

![Screenshot from 2024-03-18 20-36-06](https://github.com/jhonatan-JS/if-shop/assets/62979297/c5ab639f-9178-4a20-b796-c0aa157e9170)

Temos a pasta src que contem grande parte do projeto.

/components
Que contem os componentes do sistema.

/hooks
alguns metodos que ajudam a lidar com os produtos

/pages
que contem o arquivo index.tsx, onde da inicio a tudo.

/services
conexão com API externa

/store
trabalha disponibilizando todo o carrinho e seus produtos em toda a aplicação.

/styles
alguns estilos globais
