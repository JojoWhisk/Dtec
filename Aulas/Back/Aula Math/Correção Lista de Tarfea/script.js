function adicionarTarefa() {
    const input =  document.getElementById("novaTarefa")
    const texto = input.value.trim()
    if (texto === "") return;
    
    const li = document.createElement("li");  //criar li do html dentro do javascript
    const p = document.createElement("p");
    p.textContent = texto; //valor em texto no p
    p.className = "tarefa" //criar uma classe para p 
    li.appendChild(p); //coloca o p dentro do li

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover"; // criar texto para o btnRemover (button)
    btnRemover.className = "remove";
    btnRemover.onclick = function () {
        li.remove();
    }
     li.onclick = function () {
        li.classList.toggle("feito");
     }

     li.appendChild(btnRemover)
     document.getElementById("lista").appendChild(li) //coloquei li na ul direto, id da ul é lista 

     input.value = ""
}
