<h1 align="center">
    Back End
</h1>


<a id="sobre"></a>
## :bookmark: Sobre 

O back end usa boas praticas de programação orientada a objeto como inversão de controle services e repositorios.

<a id="tecnologias-utilizadas"></a>
## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias.

## [Nodejs](https://nodejs.org/en/)
- O runTime do javascript que posibilita rodar javascript no servidor.

## [sequelize](https://sequelize.org/)
- O orm mais popular do javascript que abstrai a camada do banco de dados.

## [Expressjs](https://expressjs.com/pt-br/)
- O micro framework para montar o servidor com uma arquitetura maleavel.

## [Mysql](https://www.mysql.com/)
- O banco de dados mais legal de se usar principalmente se for dentro de uma instancia do docker.

<a id="como-usar"></a>
## :fire: Como usar

- Clone esse repositório: `git clone https://github.com/Claudio-code/blog-noticias.git`
- Instale as dependências: `yarn` 
- Crie o banco <b>blog</b> e adicione as tabelas com o comando: `yarn sequelize db:migrate` 
- Start a aplicação: `yarn dev`
