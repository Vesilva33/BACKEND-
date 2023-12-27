const express = require("express")
const router = express.Router()

const app = express()


const porta = 3333
const mulheres=[
    {
        nome: 'ana silva',
        imagem:'https//github.com/verusca.png',
        minibio:'professora'
    },
    {
        nome: 'sonia silva',
        imagem:'https//github.com/verusca.png',
        minibio:'professora'
    },
    {
        nome: 'maria silva',
        imagem:'https//github.com/verusca.png',
        minibio:'professora'
    },
]

function mostraMulheres(request,response){
response.json(mulheres)

}


function mostraPorta(){

    console.log("servidor criado e rodando " , porta)
}
app.use(router.get('/mulheres',mostraMulheres)) 
app.listen(porta,mostraPorta)