# Gerador de Ingresso para Conferência

Este projeto foi desenvolvido para a matéria de Design Front End, a partir de um desafio do Frontend Mentor. Trata-se de um gerador de ingresso para uma conferência fictícia chamada Coding Conf 2025: a pessoa preenche um formulário e, ao enviar, o site exibe um ingresso personalizado com os dados informados.

O formulário pede uma foto de perfil, o nome completo, o e-mail e o usuário do GitHub. A foto pode ser escolhida clicando na área de upload ou arrastando o arquivo para ela, e só são aceitas imagens PNG ou JPG de até 500KB. O nome e o usuário do GitHub precisam ter mais de cinco caracteres e o e-mail é conferido com uma expressão regular. Cada campo é validado quando a pessoa sai dele e novamente no envio do formulário. Quando há um erro, o campo recebe a borda vermelha e uma mensagem explica o problema. Se tudo estiver correto, o formulário é escondido e o ingresso aparece com a foto, o nome, o GitHub, a data do dia e um número de ingresso gerado aleatoriamente.

A estrutura da página foi feita em HTML, com `novalidate` no formulário para que a validação seja controlada pelo JavaScript e `autocomplete="off"` para evitar as sugestões do navegador. A estilização foi feita em CSS puro, usando variáveis para as cores, Flexbox para organizar os elementos e posicionamento absoluto para encaixar o conteúdo sobre a imagem de fundo do ingresso. Para a responsividade, usei media queries com dois pontos de quebra, um para tablet (até 1024px) e outro para celular (até 600px). Em cada um deles o site troca a imagem de fundo, ajusta o tamanho dos textos e do ingresso e reposiciona os desenhos decorativos. O JavaScript, sem nenhuma biblioteca, cuida dos eventos do formulário e da área de upload, da leitura da foto com `FileReader` e da troca entre a tela do formulário e a do ingresso.

Como pontos de melhoria, pretendo verificar se o usuário do GitHub realmente existe, permitir trocar a foto depois de enviada e dividir melhor o código do JavaScript em funções menores.

Para executar o projeto, basta baixar os arquivos e abrir o `index.html` no navegador, sem precisar instalar nada.

O design e os arquivos de imagem e fonte são do Frontend Mentor. O código foi escrito por mim, com apoio de pesquisa e de IA para tirar dúvidas.

**Autor:** Vitor Hernandes - [@VitorHernandes16](https://github.com/VitorHernandes16)
