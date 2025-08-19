let num = 10;
const num2 = 9;

let preco = 10.6754
//toFixed Arredonda e transforma em String
console.log(preco.toFixed(2))
const preco2 = Number(preco.toFixed(2))

//Verificar se o valor é um número (Not a Number)
console.log(Number.isNaN(preco2))

//Conversão coercitiva
let numero3 = "5"
let numero4 = 5
console.log(numero3 + numero4)

//Imprecisão Numérica
let total = 0.7 + 0.1
console.log(total)
total = Number(total.toFixed(2))
console.log(total)
 