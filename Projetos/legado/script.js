//Referencias aos elementos do HTML
const paisInput = document.getElementById("paisInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        buscarBtn.click()
    }
})


buscarBtn.addEventListener('click', () => {
    const nomePais = paisInput.value.trim();

    if (nomePais === "") {
        alert("Por favor, digite o nome de um país")
        return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(nomePais)}&format=jsonv2`

    container.innerHTML = "<p>Buscando...</p>";

    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error("País Não Encontrado")
            }
            /*luis*/
            return response.json();
        })
        .then(data => {
            const pais = data[0]
            const displayName = pais.display_name
            const latitude = pais.lat
            const longitude = pais.lon


            const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}2&longitude=${longitude}&current=temperature_2m,is_day`

            fetch(url2)
                .then(response => {

                    if (!response.ok) {
                        throw new Error("Não Encontrado")
                    }

                    return response.json()
                })
                .then(data => {
                    const cidade = data;
                    const tempo = cidade.current.temperature_2m;
                    const dia = cidade.current.is_day;


                    /* nicolas e castiel colocamos if/else */
                    if (dia === 1) {
                        const diatrue = "Dia";
                    }
                    else {
                        const diafalse = "Noite";
                    }

                    container.innerHTML = ` <p><strong>Nome:</strong> ${displayName}</p><p><strong>Temperatura:</strong> ${tempo}C°</p><p>${diatrue}<p>   `

                })


        })


    paisInput.value = "";
})
    .catch(error => {
        console.error(error)
        container.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`
        paisInput.value = "";
    })


