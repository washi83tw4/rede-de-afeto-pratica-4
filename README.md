# Rede de Afeto

Projeto acadêmico desenvolvido na disciplina **Desenvolvimento Front-End Para Web**.

A Rede de Afeto é uma ONG fictícia criada para aplicar, na prática, conceitos de HTML, CSS e JavaScript, evoluindo o mesmo projeto ao longo das Experiências Práticas da disciplina.

## Funcionalidades

A aplicação possui navegação em modelo SPA (Single Page Application), permitindo a troca de conteúdo sem recarregar toda a página.

Entre as funcionalidades estão:

- página inicial da ONG;
- apresentação dos projetos sociais;
- formulário de cadastro de apoiadores;
- máscaras para CPF, telefone e CEP;
- validação de formulário;
- armazenamento de preferências com localStorage;
- templates dinâmicos em JavaScript;
- menu responsivo;
- feedback de cadastro com SweetAlert2.

## Tecnologias utilizadas

- HTML5 para estrutura e conteúdo semântico;
- CSS3 para estilização, Grid, Flexbox e responsividade;
- JavaScript para SPA, eventos, formulários e componentes dinâmicos;
- localStorage para persistência de preferências;
- SweetAlert2 integrada por CDN para mensagens de confirmação;
- Git e GitHub para controle de versões.

## Estrutura do projeto

```text
Pratica-4-Versionamento-acessibilidade/
├── CSS/
│   └── styles.css
├── HTML/
│   ├── index.html
│   ├── cadastro.html
│   └── projetos.html
├── imagens/
│   └── acao-comunitaria.png
├── JS/
│   ├── app.js
│   ├── dados.js
│   ├── formulario.js
│   ├── navegacao.js
│   ├── storage.js
│   └── templates.js
├── .gitignore
└── README.md