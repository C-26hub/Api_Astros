# 🌌 Astros

Aplicação web simples que consome a API pública da NASA (APOD - Astronomy Picture of the Day) para exibir imagens e vídeos astronômicos com base em uma data selecionada pelo usuário.

---

## 📱 Sobre o projeto

O **Astros** é um projeto desenvolvido com foco em aprendizado de desenvolvimento web moderno, incluindo consumo de APIs, acessibilidade e Progressive Web Apps, utilizando **HTML, CSS e JavaScript puro**.

A aplicação permite que o usuário escolha uma data específica e visualize a imagem astronômica daquele dia, junto com sua descrição oficial fornecida pela NASA.

---

## 🚀 Funcionalidades

- 🔍 Buscar imagem por data
- 🌌 Exibir imagem ou vídeo do dia
- 📅 Mostrar data da publicação
- 📖 Exibir explicação completa da NASA
- 📱 Layout responsivo (mobile-first)
- 📲 Instalação como aplicativo (PWA)
- ⚡ Funcionamento offline com cache
- 📳 Vibração ao buscar imagem (recurso hardware)
- 🖥️ Visualização em tela cheia

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API pública da NASA (APOD)
- Service Worker
- Web App Manifest

---

## 🔗 API utilizada

- NASA Astronomy Picture of the Day (APOD)  
- Endpoint: https://api.nasa.gov/planetary/apod

- É necessário utilizar uma API Key gratuita, disponível em:  
https://api.nasa.gov/

---

## 📲 Progressive Web App (PWA)

O projeto foi configurado como uma PWA, permitindo:

- Instalação no dispositivo do usuário
- Funcionamento offline (cache de arquivos e requisições)
- Melhor desempenho e experiência de uso

### 📁 Arquivos principais:

- `manifest.json`
- `service-worker.js`

---

## ⚙️ Service Worker

O Service Worker foi implementado com duas estratégias:

- **Cache First** → para arquivos estáticos (HTML, CSS, JS)
- **Network First** → para a API da NASA (garante dados atualizados)

---

## 💻 Como executar o projeto

1. Clone/baixe este repositório ou acesse: https://astros-api.netlify.app/ 
2. Abra o arquivo `index.html` em um navegador  
3. Insira uma data no campo disponível  
4. Clique em **Buscar**

---

## 📂 Estrutura do projeto

```
📁/Project_astros       
┣ 📄index.html
┣ 📄style.css
┣ 📄script.js
┣ 📄manifest.json
┣ 📄service-worker.js
┣ 📂assets/
┃ ┣ 🖼️ Astros logo (branca).png
┃ ┗ 🖼️ Astros logo (preta).png
┣ 📂icons/
┃ ┣ 🖼️ astro_icon 48x48.png
┃ ┣ 🖼️ astro_icon 72x72.png
┃ ┣ 🖼️ astro_icon 96x96.png
┃ ┣ 🖼️ astro_icon 144x144.png
┃ ┗ 🖼️ astro_icon 192x192.png    
         
```

---

## 📸 Exemplo de uso

1. O usuário seleciona uma data  
2. O sistema faz uma requisição para a API da NASA  
3. A imagem ou vídeo do dia é exibido na tela
4. O usuário pode visualizar a imagem em tela cheia  

---

## ⚠️ Observações

- A API da NASA possui limite de requisições diárias
- A data mínima disponível é **16/06/1995**
- Alguns dias podem retornar vídeos ao invés de imagens
- A vibração pode não funcionar em todos os dispositivos

---

## 🎯 Objetivo educacional

Este projeto foi desenvolvido com o objetivo de:

- Praticar consumo de APIs
- Trabalhar com JavaScript assíncrono (`async/await`)
- Manipular o DOM
- Criar interfaces responsivas
- Implementar conceitos de PWA

---

## 👩‍💻 Autoria

Projeto desenvolvido por Maria Cecília para fins acadêmicos.

---

## 🌠 Créditos

Dados fornecidos pela NASA através da API oficial APOD:
https://api.nasa.gov/
