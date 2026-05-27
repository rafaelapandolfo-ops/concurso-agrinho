// =========================
// ARQUIVO: script.js
// =========================

// Inicializa animações
AOS.init({
  duration:1200,
  once:true
});

// Efeito no menu ao rolar

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,0.9)";
  }else{
    header.style.background = "rgba(0,0,0,0.6)";
  }

});
