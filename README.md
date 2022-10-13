## Desafio_shopper

### Sobre o projeto:

Foi implementado um sistema de formulário de cadastro de pedidos. O usuário para ter acesso a plataforma precisa preencher o formulário com informações de nome e uma data válida, caso o usuário já esteja logado basta preencher com o seu nome na tela de login. Ao terminar esse processo de cadastramento o usuário será redirecionado para listas de produtos que estão disponíveis. O usuário pode adicionar uma lista de produtos com quantos items ele queira comprar. Na página de carrinho tera os produtos que o usuário inseriu, podendo finalizar a compra ou remover o item que ele não queira. Todas essas informações estão salvo no banco de dados. Cada compra confirmada debita a quantidade do produto correspondente do estoque.O sistema alertar o usuário caso a quantidade solicitada não esteja disponível no
estoque. Por fim ao voltar a tela de produtos perceberá que o estoque foi atualizado.


<h2 id="funciona">:heavy_check_mark: O que funciona</h2>

<h3> 👤 Login/Cadastro</h3>

* Caso já possua conta, o usuário consegue fazer login;
* O usuário é capaz de criar uma conta, passando o nome e uma data de entrega da compra.
* Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, é mostrada uma mensagem de erro clara.

<h3>🗒️ Produtos</h3>

* O usuário é capaz de visualizar uma lista com todos os produtos;

* O usuário é capaz de adicionar produtos no carrinho.

<h3>🛒 Carrinho e Finalizar Compra<h3> 

<h4>

* O usuário é capaz de visualizar a lista de itens que adicionou ao carrinho;

* Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio";

* O usuário é capaz de remover um item que não queira mais;

* O usuário consegue concluir um pedido;

* Quando o usuário confirma um pedido é mostrado um banner de "compra realiza!".
</h4>

<h2> 🛠 Tecnologias front-end </h2>

Ferramentas usadas na construção do projeto:

* React JS com template do typescript
* Styled-components
* Design System: Material UI
* Customs e React Hooks
* React Router DOM
* Integração com API
* Axios

<h2> 🛠 Tecnologias back-end </h2>

* NodeJs
* Typescript
* Express
* Postman
* Mysql
* Knex
* Paradigma de orientação a objetos
* Arquitetura em camadas


 ### LINKS:

* [Documentação do post](https://documenter.getpostman.com/view/19713876/2s83zpL1WR)

* [Shopper front-end](https://dynamic-treacle-61ca72.netlify.app/)

```
BASE_URL DO BACK-END: https://shopper-connection.herokuapp.com
```

## Autor

- [@ViniciusDuarte17](https://github.com/ViniciusDuarte17)
