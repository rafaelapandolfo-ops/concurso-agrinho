// script.js

// Exemplo: alerta de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao site Agro Forte e Sustentável - Concurso Agrinho 2026!");
};

// Exemplo: abrir vídeo em modal (se quiser)
function openVideo(url) {
    const videoWindow = window.open("", "Video", "width=800,height=600");
    videoWindow.document.write(`<iframe width="800" height="600" src="${url}" frameborder="0" allowfullscreen></iframe>`);
}
