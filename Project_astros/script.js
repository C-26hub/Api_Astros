async function getAstro(){
    if (navigator.vibrate) {
        navigator.vibrate(200)
    }

    let dataEscolhida = document.getElementById("data").value
    let url = `https://api.nasa.gov/planetary/apod?api_key=GXENpU9NgLw1HIMubvUgxNAVrcbRNdWg4LDaW2bb`

    if(dataEscolhida){
        url += `&date=${dataEscolhida}`
    }
        
    let response = await fetch(url)
    let data = await response.json()

    document.getElementById("imagem").innerHTML = `
        <h2>${data.title}</h2>

        ${
            data.media_type === "image"
            ? `<img src="${data.url}" alt="${data.title}">`
            : `<iframe src="${data.url}"></iframe>`
        }

        <button onclick="abrirTelaCheia()">Ver em tela cheia</button>

        <p><strong>Data:</strong> ${data.date}</p>
        <p>${data.explanation}</p>
    `
}

function abrirTelaCheia(){
    const elemento = document.getElementById("imagem")
    elemento.requestFullscreen()
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
}