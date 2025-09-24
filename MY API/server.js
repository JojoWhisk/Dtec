//Importar o express 
const express = require("express")
const cors = require('cors')

// Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())
app.use(cors())

//Porta onde a API vai rodar
const PORT = 3001;

let usuarios = [
    {id: 1, nome: "Ana", idade: 25},
    {id: 2, nome: "Carlos", idade: 30},
    {id: 3, nome: "Maria", idade: 22},
    {id: 4, nome: "João Carlos", idade: 42},
    {id:10, nome: "Gael", idade: 25}
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

app.get('/usuarios/nome/:nome', (req,res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: 'Usuário não encontrado'})
    }
})

app.delete('/usuarios/:id', (req,res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id)
    res.json({mensagem: "Usuário Removido com sucesso"})
})

app.post('/usuarios', (req,res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };
    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)

})

app.put('/usuarios/:id', (req,res) => {
    const id = req.params.id;
    const nome = req.body.nome
    const idade = req.body.idade

    const usuario = usuarios.find(u => u.id == id)

    if (!usuario){
        return res.status(404).json({mensagem: "Usuário não encontrado"})
}

usuario.nome = nome || usuario.nome
usuario.idade = idade || usuario.idade 
res.json(usuario)

})

app.get('/usuarios/idade/:idade', (req,res) => {
    const buscarIdade = req.params.idade
    const resultado = usuarios.filter(u => u.idade == buscarIdade)

    if(resultado. length > 0){
        res.json(resultado)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }
})




//Inicia o servidor 
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})