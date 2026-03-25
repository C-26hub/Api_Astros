async function getAstro(){
        let dataEscolhida = document.getElementById("data").value
        let url = `https://api.nasa.gov/planetary/apod?api_key=GXENpU9NgLw1HIMubvUgxNAVrcbRNdWg4LDaW2bb`

        if(dataEscolhida){
            url += `&date=${dataEscolhida}`
        }
        
        let response = await fetch(url)
        let data = await response.json()

        document.getElementById("imagem").innerHTML = `
            <h3>${data.title}</h3>

            ${
                data.media_type === "image"
                ? `<img src="${data.url}">`
                : `<iframe src="${data.url}"></iframe>`
            }

            <p><strong>Data:</strong> ${data.date}</p>
            <p>${data.explanation}</p>
        `
}