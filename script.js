// =========================
// ARQUIVO: script.js
// =========================

// ANIMAÇÕES

AOS.init({
  duration:1200,
  once:true
});

// MENU ESCURO AO ROLAR

window.addEventListener("scroll", () => {

  const header = document.getElementById("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.9)";

  }else{

    header.style.background = "rgba(0,0,0,0.4)";

  }

});

// CONTADOR ANIMADO

let numero = document.getElementById("numero");

let contador = 0;

let intervalo = setInterval(() => {

  contador += 25;

  numero.innerHTML = contador;

  if(contador >= 5000){

    clearInterval(intervalo);

  }

}, 20);
