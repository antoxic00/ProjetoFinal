const { Sequelize,sequelize } = require('./db')

const db = require('./db')

const Comment = db.sequelize.define('comentario',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }

})

module.exports = Comment

//Comando para criar a tabela,executar somente uma vez
//Comment.sync({force: true})