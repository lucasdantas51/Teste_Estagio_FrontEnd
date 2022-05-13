# Teste_Estagio_FrontEnd

## Descrição
Projeto para teste de estágio.

## Procedimentos e Informações: 
Identificação das telas e seus respectivos arquivos:
- Tela de login = index.html
- Tela de cadastro = cadastro.html
- Tela com a lista de usuários = lista-usuarios.html;

Está sendo utilizado a API fake (https://reqres.in/api/users?page=2) e o Axios para gerar os usuários;

O Axios está sendo utilizado via CDN pelo script no arquivo lista-usuarios.html:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Há também uma animação de loading enquanto aguarda a resposta da API, porém a resposta está sendo bem rápida, então possivelmente que não será notada.

## Observação: 
No sétimo item dos pré-requisitos diz para o botão "entre aqui" direcionar para a tela de Cadastro, porém nos Design não há esse botão. Por isso, considerei que poderia ser algum erro de digitação e que o desejado seria que o botão "Cadastre-se aqui" direcionar para a tela de Cadastro.