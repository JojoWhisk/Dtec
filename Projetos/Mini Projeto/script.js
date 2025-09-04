const input = document.getElementById("paisInput");
const buscarBtn = document.getElementById("buscarBtn");
const container = document.getElementById("container");

buscarBtn.addEventListener("click", () => {
    const nomePais = paisInput.value.trim();

    if (nomePais === "") {
        alert("Por favor, digite o nome de um país.")
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${nomePais}`

    fetch(url)
        .then(response => {
            return response.json();

        })
        .then(data => {
            const pais = data[0]

            container.innerHTML = `
            <h2>${pais.name.common}</h2>
            <img src="${pais.flags.svg}" alt="Bandeira ${pais.name.common}" width="150">

            
            
            
            `
        })
})

