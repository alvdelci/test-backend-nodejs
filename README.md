<h1>Backend Analyst Candidate Testing</h1>

<strong>Inicializar Servidor</strong>

- yarn dev

<strong>Cadastrar Produto</strong>

- url: localhost:5000/create
- Requisição via: POST
- entrada: {tittle, price, category, description}
- Saída: success ou error

<strong>Deletar Produto</strong>

- url: localhost:5000/remove
- Requisição via: POST
- entrada: {tittle, category}
- Saída: success ou error

<strong>Atualizar Informações dos Produtos</strong>

- url: localhost:5000/update
- Requisição via: POST
- Entrada: {tittle, category, newTittle, newPrice, newCategory, newDescription}
- Saída: success ou error

<strong>Atualizar Categoria de um Produto</strong>

- url: localhost:5000/update/product/category
- Requisição via: POST
- entrada: {tittle, category, newCategory}
- Saída: success ou error

<strong>Atualizar Categoria</strong>

- url: localhost:5000/update/category
- Requisição via: POST
- Entrada: {category, newCategory}
- Saída: success ou error

<strong>Exibir Todos os Produtos Cadastrados</strong>

- url: localhost:5000/read
- Requisição via: GET
- entrada:
- Saída: Todas informações de todos os produtos cadastrados no banco de dados

<strong>Exibir Todos os Produtos Cadastrados Cujo Título foi informado</strong>

- url: localhost:5000/read/tittle
- Requisição via: POST
- Entrada: {tittle}
- Saída: Informações de todos os produtos que correspondem à pesquisa
- 
<strong>Exibir Todos os Produtos Cadastrados Cuja Categoria foi Informada</strong>

- url: localhost:5000/read/category
- Requisição via: POST
- Entrada: {category}
- Saída: Informações de todos os produtos que correspondem à pesquisa
