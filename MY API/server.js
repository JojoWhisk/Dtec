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
    {id: 2, nome: "Carlos", idade: 25},
    {id: 3, nome: "Maria", idade: 25}
]

app.get('/usuarios', (req,res) => {
    res.json(usuarios)
})

//Inicia o servidor 
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})