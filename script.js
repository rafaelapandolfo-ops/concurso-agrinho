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

// EFEITO DIGITAÇÃO

const texto =
"Tecnologia e sustentabilidade transformando o agro.";

let i = 0;

function escrever(){

  if(i < texto.length){

    document.getElementById("digitacao").innerHTML += texto.charAt(i);

    i++;

    setTimeout(escrever, 50);

  }

}

escrever();
