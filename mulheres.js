const express = require("express")//aqui estou iniciando o express
const router = express.Router()// aqui estou configurando a primeira parte da rota
const cors = require('cors')// estou trazendo pacote cors que permite consumir essa api no front end

const conectaBancoDeDados = require('./bancoDeDados')//aqui estou ligando ao arquivo banco de dados.
conectaBancoDeDados()//aqui estou chamando a funcão que conecta banco de dados

const Mulher =require ('./mulherModel')

const app = express()// aqui estou iniciando app
app.use(express.json())
app.use(cors())

const porta = 3333 // aqui estou criando a porta

//GET mostra as mulheres
 async function mostraMulheres(request,response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro){

        console.log(erro)
    }


}

//POST
 async function criaMulher(request,response){
    const novaMulher = new Mulher ({
        nome:request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao:request.body.citacao
    })
    
    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }
  
}
//PATCH
async function corrigeMulher(request,response){
    try{
    const mulherEncontrada = await Mulher.findById(request.params.id)
   
    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }

    if(request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem){
        mulherEncontrada = request.body.imagem
    }    
    if (request.body.citacao){
        mulherEncontrada = request.body.citacao
    }
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBancoDeDados)

    }catch (erro){
        console.log(erro)
    }

   
   

} 
//DELETE
async function deletaMulher(request,response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({menssagem:'mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }
   
}



app.use(router.get('/mulheres',mostraMulheres)) // configurei rota GET/ mulheres
app.use(router.post('/Mulheres',criaMulher))// configurei rota post/mulheres
app.use(router.patch('/mulheres/:id',corrigeMulher))//configurei aqui patch/mulheres
app.use(router.delete('/mulheres/:id',deletaMulher))//configurei aqui rota delete/mulheres
//porta
function mostraPorta(){

    console.log("servidor criado e rodando " , porta)
}
app.listen(porta,mostraPorta)//servidor ouvindo a porta 