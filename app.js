const express = require('express');
const app = express(); // atribui a variavel app uma função que ficou disponível após a instalação do módulo do Express
//Routes do app
app.use(express.static(__dirname + '/src'));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/View/index.html");
});
app.listen(8081, function(){
  console.log('Servidor Rodando na  porta 8081');
});
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/public'));
//app.listen(8081)// não pode ter nada abaixo desta linha
