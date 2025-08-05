const nome = prompt("Digite o seu nome:");

document.body.innerHTML += `<p><strong>Seu nome é: </strong>${nome}</p>`
document.body.innerHTML += `<p><strong>Seu nome tem: </strong> ${nome.length} letras</p>`
document.body.innerHTML += `<p><strong>A segunda letra do seu nome é: </strong> ${nome[1]}</p>`
document.body.innerHTML += `<p><strong>Primeiro índice de O: </strong> ${nome.indexOf("o")}</p>`
document.body.innerHTML += `<p><strong>Último índice de O: </strong> ${nome.lastIndexOf("o")}</p>`
document.body.innerHTML += `<p><strong>As três últimas letras do seu nome é : </strong> ${nome.slice(-3)}</p>`
document.body.innerHTML += `<p><strong>As letras do seu nome é : </strong> ${nome.split(" ")}</p>`
document.body.innerHTML += `<p><strong>As três últimas letras do seu nome é : </strong> ${nome.toUpperCase()}</p>`
document.body.innerHTML += `<p><strong>As três últimas letras do seu nome é : </strong> ${nome.toLowerCase()}</p>`
