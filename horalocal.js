const express = require("express")
const Router = express.Router()

const app = express()


const porta = 3333

function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
}

function mostraPorta(){

    console.log("servidor criado e rodando " , porta)
}

app.use(Router.get('/horalocal',mostraHora))
app.listen(porta,mostraPorta)