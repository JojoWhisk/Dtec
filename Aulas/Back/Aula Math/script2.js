const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>É Inteiro?: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É Nan?: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendonda para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Duas casas decimais acima: <strong>${numero.toFixed(2)}</strong></p>`;
