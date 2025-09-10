//Importar o express 
const express = require("express")

// Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())

//Porta onde a API vai rodar
const PORT = 3001;

const usuarios = [
    {id: 1, nome: "Ana", idade: 25},
    {id: 2, nome: "Carlos", idade: 30},
    {id: 3, nome: "Maria", idade: 22},
    {id: 4, nome: "João Carlos", idade: 42}
]

app.get('/',(req,res) => {
    res.send("Página Inicial")
})

app.get('/usuarios',(req,res) => {
    res.json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id)
    
    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: 'Usuário não encontrado'})
    }
})

app.get('/usuarios/buscar/:nome', (req,res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: 'Usuário não encontrado'})
    }
})




//Inicia o servidor 
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})