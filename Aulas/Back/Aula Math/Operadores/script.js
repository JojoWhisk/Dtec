// OPERADORES AND(&&) será "true" se as duas condições forem "true"
/* const temDinheiro = true;
const estaSol = true;
const tenhoTempo = true;

const vouSair = temDinheiro && estaSol && tenhoTempo;
console.log(vouSair)
 */

//OPERADORES OR (||) duas condições se uma delas for true o resultado será true
/* const temDinheiro = false;
const estaSol = true;

const vouSair = temDinheiro || estaSol;
console.log(vouSair)

//OPERADORES NOT (!) inverte o booleano
const estaChovendo = false;
console.log(estaChovendo)  */// true 

//DUPLA OPERAÇÃO (!!) - Conversão de dados para booleano
console.log(!!"texto") // string não vazias retornam "true"
console.log(!!"") //string vazia retorna false;
console.log(!!0) //Número zero retorna false 
console.log(!!23) //Qualquer número != de 0 retorna true
console.log(!!undefined) //Retorna false

const email = "";
if(!!email) {
    console.log("Email Preenchido")
 } else {
    console.log("Campo de email vazio")
 }

 //PRIORIDADE DE OPERADORES
  const resultado = true || false && false;
  console.log(resultado) //true

  const resultado2 = (true || false) && false
  console.log(resultado2) //false

  const resultado3 = !true && true || false && (!false || !true) && false;
  console.log(resultado3) //false

// EXEMPLO PRATICO LOGIN E SENHA 
const usuario = "pedro"
const senha = "1234"

const usuarioDigitado = "pedro"
const senhaDigitada = "1234"

const logado = usuarioDigitado === usuario && senhaDigitada === senha;
console.log(logado) //true

//OPERADORES TERNÁRIOS (?:)
const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario < 1000 ? "Usuário Normal" : "Usuário VIP";
console.log(nivelUsuario) //"Usuario normal"

//AVALIAÇÃO CURTO CIRCUITO
//o operador logico || pode ser usado para definir
// valores padrão quando uma variavel é nula, indefinida ou falsa
const corUsuario = null;
const corPadrao = corUsuario || "verde"
console.log(corPadrao)


