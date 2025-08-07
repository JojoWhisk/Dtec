const nome = "Maria"
const sobrenome1 = "Xavier"
const idade1 = 50

const pessoa1 = {
    nome: "Maria",
    sobrenome: "Xavier",
    idade: 50
}

//
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

//FUNÇÃO FÁBRICA
function criarPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
}

//UTILIZAR FUNÇÃO FÁBRICA
const pessoa2 = criarPessoa("José", "Antonio", 40)
console.log(pessoa2.nome)

//CRIAÇÃO DE MÉTODOS
function criarCachorro (nome, sono, fome){
    return{
        nome,
        sono,
        fome,

        latir(){
            console.log("au, au")
        }, 

        dormir(){
            if(this.sono){
                this.sono = false
            }
                
        }
    }
}
    const cachorro1 = criarCachorro("Bob", true, 10)
    cachorro1.latir()
    cachorro1.dormir()
    console.log(cachorro1.nome)
    console.log(cachorro1.sono)
    console.log(cachorro1.fome)

