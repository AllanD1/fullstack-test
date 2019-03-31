## Sobre as escolhas 

Como combinado em entrevista decidi utilizar React Native no Front para criar o mobile 
e no Back tinha visto o Silex mas como eu não estava confiante resolvi mudar e utilizar NodeJS pois me senti mais confortável para conseguir entregar.

## Front - Dependências

*  **axios ->** Escolhi o Axios por já conhecer e por ser simples de utilizar.

*  **native-base ->** Escolhi por já ter utilizado e para acelerar a construção do Front

*  **react-native-render-html ->** Como eu fiz um "batch" da API que estava disponível para teste de Font e de Mobile e ele vinha com as tags <p> e como posts de um blog bem provável tenha formatação html achei interessante.
 
*  **react-native-router-flux ->** Não sabia como fazer o roteamento das paginas do app e encontrei essa biblioteca que me pareceu simples utilização. 

*  **react-native-star-rating ->**  Foi utilizado para mostrar a avaliação 

*  **react-native-vector-icons ->** É uma biblioteca bem completa de ícones indicada pelo Native Base. 
  
## Back - Dependências 

*  **dotenv ->** Utilizei para ler o arquivo ".env"

*  **express ->** Utilizado para fazer o server e o roteamento da API

*  **mongoose ->** Utilizei para manipular o MongoDB

*  **request ->** Utilizei para fazer pegar fazer a requisição para fazer o batch dos posts disponíveis na API do teste de Font.


## Como executar o Back

*  Criar o arquivo ".env" e colocar link de conexão de com  " MongoDB"
pode fazer um banco de teste no mLab [https://mlab.com/](https://mlab.com/)

>  DB = mongodb://[user]:[senha]@<link>:[porta]/[nome do banco]


*  Entre em na pasta API e Execute o arquivo "batch.js"

>  $ cd api

>  $  node batch.js

*  Terminado o processo de batch execute o arquivo index.js

>  $ npm run dev 

ou

>  $ node index.js

## Como executar o Font 

Lembrando que eu não consegui testar no IOS vou explicar como executar no Android

*  Entre na pasta front instale as Dependências 

>  $ npm install

*  Abra a pasta "android" no Android Studio para atualizar o as dependências do projeto  

*  Depois execute o no terminal o comando para executar o aplicativo.

>  $ react-native run-android

 
