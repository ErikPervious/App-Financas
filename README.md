<div align="center">
  <img border="0" src="https://user-images.githubusercontent.com/51729214/137566691-5ba163fc-6432-4a89-8ddf-ddcf466761f0.png" alt="icon" width="150"/>
  <p align="center">Com o app finanças você consegue ter controle total do seu dinheiro a qualquer momento!</p>
  <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=102018&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=Financas&message=1.0&color=102018&labelColor=000000" alt="NLW 06" />
</div>
<h1></h1>
<p align="center">
  <a href="#title">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#preview">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando o App</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#license">Licença</a>
</p>
<h1 id="title">📝 Projeto</h1>
<p>&nbsp;O app Finanças é perfeito para fazer controle dos gastos diários, todos os seus dados são criptografados e apenas você tem acesso a eles, com salvamento de login ativado o usuário precisa entrar apenas uma vez com sua conta, caso não a tenha, poderá criar uma bem rapidinho na opção *Criar uma conta*.</p>

<h2 id="preview">🔖 Layout</h2>
<div align="center">
  <img alt="Screen Login" title="Login" src="https://user-images.githubusercontent.com/51729214/137567463-5443b8ee-83b4-45d3-8bcb-8f4dde6b728d.png" width="250" />
  <img alt="Screen Logon" title="Logon" src="https://user-images.githubusercontent.com/51729214/137567481-c0b51eca-24ba-4930-9477-b45913ce2b9e.png" width="250" />
  <img alt="Screen Finance" title="Finance" src="https://user-images.githubusercontent.com/51729214/137567486-9954f91e-3a88-4305-8c43-6428941f09e0.png" width="250" />
</div>

<h2 id="requisitos">:hammer: Pré-requisitos</h2>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://expo.io/),
um bom editor de texto para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
e também criar um projeto no [Firebase](https://firebase.com/) para carregar suas configurações.

<h2 id="rodando">:game_die: Rodando o Aplicativo</h2>

```bash
# Clone este repositório
$ git clone https://github.com/ErikPervious/App-Financas.git

# Acesse a pasta do projeto no terminal/cmd
$ cd App-Financas

# Instale o projeto na sua máquina
$ yarn install

# Agora adicione suas configurações do firebase em um arquivo e o importe em ./services/firebaseConnection.js
# Exemplo de configuração:
$ export const firebaseConfig = {
$   apiKey: "",
$   authDomain: "",
$   databaseURL: "",
$   projectId: "",
$   storageBucket: "",
$   messagingSenderId: "",
$   appId: "",
$   measurementId: ""
$ };

# Execute a aplicação
$ yarn start

# Ou use o próprio Expo
$ expo start
```

<h2 id="technologies">✨ Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Firebase](https://firebase.com)

<h2 id="license">📄 Licença</h2>

Esse projeto está sob a licença GNU. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
