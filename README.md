## Desafio_shopper

### Sobre o projeto:

Foi implementado um sistema de formulário de cadastro de pedidos. O usuário para ter acesso a plataforma precisa preencher o formulário com informações de nome e uma senha, caso o usuário já esteja logado basta preencher com o seu nome e senha cadastrada na tela de login. Ao terminar esse processo de cadastramento o usuário será redirecionado para listas de produtos que estão disponíveis. O usuário pode adicionar uma lista de produtos com quantos items ele queira comprar. Na página de carrinho tera os produtos que o usuário inseriu, podendo finalizar a compra ou remover o item que ele não queira. Todas essas informações estão salvo no banco de dados. Cada compra confirmada debita a quantidade do produto correspondente do estoque.O sistema alerta o usuário caso a quantidade solicitada não esteja disponível no
estoque. Por fim ao voltar a tela de produtos perceberá que o estoque foi atualizado.


<h2 id="funciona">:heavy_check_mark: O que funciona</h2>

<h3> 👤 Login/Cadastro</h3>

* Para fazer login precisa passar o nome e a senha do usuário já cadastrado;
* Para o usuário fazer cadastro na aplicação precisa passar informar o nome e uma senha.
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


 ### Instruções para rodar aplicação localmente
 
 Clone o projeto

```bash
git clone https://github.com/ViniciusDuarte17/Desafio_shopper.git
```
Instale as dependências

```bash
npm install
```

```bash
Criar o arquivo .env no back-end
```

Inicie o servidor

```
npm run dev 
```


 ### LINKS:
 
 * [Shopper front-end](https://dynamic-treacle-61ca72.netlify.app/)

 * [Documentação do post](https://documenter.getpostman.com/view/19713876/2s83zpL1WR)

```
BASE_URL DO BACK-END: https://shopper-connection.herokuapp.com
```

<h2 id="desenvolvedor">👷🏻‍♂ Desenvolvedor</h2>
<table> 
<tr>
  <td align="center"><a href="https://github.com/ViniciusDuarte17"><img style="border-radius: 50%" src="https://user-images.githubusercontent.com/92999708/210431021-9923435c-eefe-4757-b8e2-e441910a4e88.png" width="100px" alt=""/>
 <br />
 <sub><b>Vinicius Duarte</b></sub></a> <a href="https://github.com/ViniciusDuarte17">👩🏻‍💻</a></td>
 </tr>
</table>
