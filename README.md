# Desafio-01

Criado uma aplicação nodeJs utilizando o Express.

### Tarefa

Foi criado rotas POST/GET/PUT/DELETE.

-> No primeiro Post é cadastrado o id e title do projeto. 
  > O segundo é feito a insersão das tarefas no array tasks[];

-> Já no Get é aonde eu listo tdos os projetos cadastrados.

-> O Put é feito a edição do titulo dos projetos através do id.

-> O Delete é feito pelo paramêtro da rota /:id.

Foi utilizado **Middlewares** para verificar se o id do projeto existia, caso não exista é retornado um erro (400) via json.

Implementado um contador para as requisições feitas no sistema. 