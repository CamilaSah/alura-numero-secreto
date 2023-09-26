![Front-end-JavaScript-reconhecimento-de-voz](https://github.com/CamilaSah/alura-numero-secreto/assets/128820692/b35a87ed-7a8b-411f-8828-6371f020680f)
![Static Badge](https://img.shields.io/badge/Status-Em%20andamento-%2391DCFF)

<h1> Jogo do Número Secreto </h1>
O jogo consiste em acertar o número secreto que o computador vai escolher de forma aleatória. Será definindo um intervalo de números e o número secreto estará no meio deste intervalo. Conforme os jogadores forem falando os números, se errar, ele vai dar a dica se o número secreto é maior ou menor e se acertar, ele mostrará uma mensagem falando que acertou.
O desenvolvimento do jogo de reconhecimento de voz com JavaScript será criado do zero, indo do HTML, CSS até o JavaScript.

## :hammer: Funcionalidades do projeto
- `Exibir chute na tela`: O chute do jogador aparecerá na tela assim que ele falar.
- `Verificar se é um número válido`: Caso o jogador diga uma palavra que não seja um número e caso o número esteja fora do intervalo definido, aparecerá uma mensagem "Valor inválido".
- `Dar dicas`: Caso o jogador erre o número secreto, aparecerá uma dica dizendo se o número é maior ou menor do que o valor falado.
- `Exibir mensagem de acerto`: Caso o jogador acerte o número secreto, aparecerá uma mensagem dizendo que o jogador acertou.
- `Reiniciar o jogo`: Ao clicar no botão "Jogar novamente", o jogo será reiniciado.

## 📁 Acesso ao projeto

Você pode acessar o projeto clicando [aqui](https://alura-jogo-numero-secreto.vercel.app/).
<br>
Como o projeto utiliza reconhecimento de voz, para acessá-lo você deve permitir o acesso ao microfone e não deve abri-lo em mais de uma aba/navegador.
<br>
Devido a uma maior compatibilidade de navegador, recomendo que utilize o Chrome para ter uma experiência melhor.

![apresentacao-alura-jogo-numero-secreto840](https://github.com/CamilaSah/alura-numero-secreto/assets/128820692/47e11daf-89f9-485f-83ce-c893575fb8f0)


## ✔️ Técnicas e tecnologias utilizadas

Técnicas utilizadas:
- ``Função getElementById()``: faz uma busca do elemento pelo ID.
- ``Função addEventListener()``: evento de interação que recebe dados passados pela pessoa usuária.
- ``Evento result``: quando o nosso reconhecimento de voz começar, eu quero pegar tudo o que está em result e exibir tudo o que eu estou falando na tela.
- ``Evento end``: quando a nossa função acabar (end), ele liga mais uma vez o reconhecimento de voz para ficarmos descobrindo o número que é. 
- ``Evento click``: é acionado quando é clicado no botão “jogar novamente” e o jogo é reiniciado (reload).
- ``Evento error``: retorna o tipo de erro gerado.
- ``Evento nomatch``: é acionado quando o serviço de reconhecimento de fala retorna um resultado final sem reconhecimento significativo.
- ``Função Math.random()``: retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.
- ``parseInt()``: transformar o número que ele gerou em um número inteiro.
- ``Web Speech API``: permite incorporar dados de voz em aplicativos web. Ela tem duas partes: SpeechSynthesis (Text-to-Speech) e SpeechRecognition (Reconhecimento de fala assíncrona).
- ``SpeechRecongnition``: funcionalidade que reconhece a fala.
- ``O método start() da Web Speech API``: inicia o serviço de reconhecimento de fala ouvindo o áudio recebido com a intenção de reconhecer gramáticas associadas ao SpeechRecognition atual.
- ``A propriedade lang da interface SpeechRecognition``: retorna e define o idioma do SpeechRecognition atual.
- ``element.innerHTML``: esta propriedade obtém ou altera qualquer elemento no HTML. Neste caso, adicionou o chute falado, a mensagem de acerto/erro/valor inválido e as dicas.
- ``Método Number.isNaN()``: para validar se o número é Not a Number.

Tecnologias e ferramentas utilizadas:
- ``Visual Studio Code``: editor de código.
- ``Chrome``: navegador utilizado para teste, por ter maior compatibilidade com o reconhecimento de voz (Web Speech API).
- ``HTML``: fazer a estrutura semântica da página.
- ``CSS``: fazer os estilos da página.
- ``JavaScript``: adicionar o dinamismo e as atualizações de programação, a lógica na página.
- ``DevTools``: utilizamos a aba “Console”, no qual podemos executar qualquer código JavaScript, além de nos ajudar a desenvolver, a entender o nosso código e ver como os erros são apresentados.
- ``Git``: ferramenta de controle de versão de seu arquivo, projeto ou código. 
- ``GitHub``: plataforma para gerenciar seu código e criar um ambiente de colaboração entre devs (permite compartilhamento de código através da criação de repositórios), utilizando o Git como sistema de controle.
- ``Vercel``: colocar o projeto no ar e compartilhar com o mundo.

## 📚 Mais informações do curso
Gostou do projeto e quer conhecer mais? Você pode acessar o curso que me ajudou a desenvolver o projeto desde o começo! 
Busque na plataforma da Alura o curso da escola Front-end:
- [JavaScript: validações e reconhecimento de voz](https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz).

Esse curso faz parte da formação [Desenvolva aplicações Web com JavaScript](https://cursos.alura.com.br/formacao-javascript-front-end) da Alura

# Autores

| <img src="https://github.com/CamilaSah/site-pessoal/assets/128820692/bed790ab-3722-4503-8fed-c786e774661b" width="100"><br>[<sub>Camila Sayuri Tokubo</sub>](https://www.linkedin.com/in/camila-tokubo/)|
| :---: |
