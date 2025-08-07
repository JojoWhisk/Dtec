// ----->FUNÇÕES DECLARADAS<-----

//Criação da função
function saudacao(){
    console.log("Bom dia!")
}

//Utilizando a função 
saudacao();

//Função com parâmetros
function soma (a,b){
    return a + b;
}
//Utilizar função soma 
console.log(soma(8,2))

//Função com parâmetros padrão
function somapadrao(x = 1, y = 1){
    return x + y;
}

console.log(somapadrao()) //2
console.log(somapadrao(5)) //6
console.log(somapadrao(5,5)) //10


//----->FUNÇÕES ANONIMAS<-----

const raiz = function(n){
    return n ** 0.5
}

//Utilizar da função 
console.log(raiz(9)) 


//----->ARROW FUNCTION<-----
const sqrt = (n) => n ** 0.5;
