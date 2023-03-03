const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Comment = require('./models/comment')
//Config
//Template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Rotas Incial
app.get('/', function (req, res) {
    Comment.findAll({ order: [['id', 'DESC']] }).then(function (comments) {
        res.render('home', { comments: comments })
    })
})
//Rotas do formulario
app.get('/form', function (req, res) {
    res.render('formulario.handlebars')
})
//rotas "post" só pode ser acessada quando alguem faz uma requisição
app.post('/add', function (req, res) {
    Comment.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send("Comentário não pode ser criado" + erro)
    })
})

//Rota para deletar Comentários
app.get('/deletar/:id', function (req, res) {
    Comment.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send('Ocorreu um erro')
    })
})

app.listen(8081, function () {
    console.log("Servidor rodando na porta http://localhost:8081/");
});

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res0) {
    res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/compra1', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.get('/compra2', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.get('/compra3', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.listen(8800,function(){
});
