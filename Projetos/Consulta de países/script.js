const input = document.getElementById("paisInput");
const buscarBtn = document.getElementById("buscarBtn");
const container = document.getElementById("container");

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        buscarBtn.click()
    }
})


buscarBtn.addEventListener("click", () => {
    const nomePais = paisInput.value.trim();

    if (nomePais === "") {
        alert("Por favor, digite o nome de um país.")
        return;
    }

    const url = `https://restcountries.com/v3.1/translation/${nomePais}`

    container.innerHTML = "<p>Loading...</p>"

    fetch(url)
        .then(response => {
            if(!response.ok)
                throw new Error("PAÍS NÃO ENCONTRADO!!!")


            return response.json();

        })
        .then(data => {
            const pais = data[0]
            const moeda = Object.values(pais.currencies)[0].name;

            container.innerHTML = `
            <h2>${pais.translations.por.common}</h2>
            <img src="${pais.flags.svg}" alt="Bandeira ${pais.name.common}" width="150">
            <p>Capital: <strong>${pais.capital[0]}</strong></p>
            <p>População: <strong>${pais.population.toLocaleString()}</strong><p/>
            <p>Moeda: <strong>${moeda}</strong></p>
            <p><strong>

            
            
            
            `
            paisInput.value = ""
        })
        .catch(error => {
            console.error(error)
            container.innerHTML = `<p style="color: red;">ERRO: ${error.message}</p>`
            paisInput.value = "";
        })
})

