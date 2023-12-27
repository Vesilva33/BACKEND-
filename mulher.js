const express = require("express")
const router = express.Router()

const app = express()


const porta = 3333


function mostraMulher(request,response){
    response.json({
        nome:'verusca schimmels',
        imagem:'https://github.com/verusca.png',
        minibio:'desenvolvedora de problemas'

    })
}

function mostraPorta(){

    console.log("servidor criado e rodando " , porta)
}
 
app.use(router.get('/mulher',mostraMulher))
app.listen(porta,mostraPorta)