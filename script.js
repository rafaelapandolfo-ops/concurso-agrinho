// ANIMAÇÕES

AOS.init({
  duration:1200,
  once:true
});

// MENU ESCURO

window.addEventListener("scroll", () => {

  const header = document.getElementById("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.9)";

  }else{

    header.style.background = "rgba(0,0,0,0.5)";

  }

});

// CONTADOR

let numero = document.getElementById("numero");

let contador = 0;

let intervalo = setInterval(() => {

  contador += 25;

  numero.innerHTML = contador;

  if(contador >= 5000){

    clearInterval(intervalo);

  }

}, 20);

// DIGITAÇÃO

const texto =
"Tecnologia, inovação e sustentabilidade transformando o futuro do agro.";

let i = 0;

function escrever(){

  if(i < texto.length){

    document.getElementById("digitacao").innerHTML += texto.charAt(i);

    i++;

    setTimeout(escrever, 50);

  }

}

escrever();
