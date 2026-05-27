// ============================================
// ARQUIVO: script.js
// AGRO FORTE - FUTURO SUSTENTÁVEL
// VERSÃO CORRIGIDA SEM ERROS
// ============================================


// ============================================
// TEXTO AUTOMÁTICO
// ============================================

const texto =
"🌱 Tecnologia e sustentabilidade construindo o futuro do agro.";

const digitacao = document.getElementById("digitacao");

let contadorTexto = 0;

function escrever() {

  if (!digitacao) return;

  if (contadorTexto < texto.length) {

    digitacao.innerHTML += texto.charAt(contadorTexto);

    contadorTexto++;

    setTimeout(escrever, 50);

  }

}

escrever();


// ============================================
// CONTADOR DE ÁRVORES
// ============================================

const numero = document.getElementById("numero");

let valor = 0;

function animarContador() {

  if (!numero) return;

  const intervalo = setInterval(() => {

    valor += 50;

    numero.innerHTML = valor;

    if (valor >= 5000) {

      numero.innerHTML = "5000";

      clearInterval(intervalo);

    }

  }, 40);

}

animarContador();


// ============================================
// EFEITO NO MENU
// ============================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {

    header.style.background = "rgba(0,0,0,0.9)";

  } else {

    header.style.background = "rgba(0,0,0,0.5)";

  }

});


// ============================================
// EFEITO NOS CARDS
// ============================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 0 20px #00ff88";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";
    card.style.boxShadow = "none";

  });

});


// ============================================
// EFEITO NAS TECNOLOGIAS
// ============================================

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((tech) => {

  tech.addEventListener("mouseenter", () => {

    tech.style.transform = "scale(1.05)";
    tech.style.transition = "0.4s";
    tech.style.boxShadow = "0 0 25px #00ff88";

  });

  tech.addEventListener("mouseleave", () => {

    tech.style.transform = "scale(1)";
    tech.style.boxShadow = "none";

  });

});


// ============================================
// EFEITO NAS IMAGENS DA GALERIA
// ============================================

const imagens = document.querySelectorAll(".galeria-grid img");

imagens.forEach((img) => {

  img.addEventListener("mouseenter", () => {

    img.style.transform = "scale(1.05)";
    img.style.transition = "0.4s";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform = "scale(1)";

  });

});


// ============================================
// FRASES SOBRE O AGRO
// ============================================

const frases = [

  "🌎 Agricultura sustentável protege a natureza.",
  "🚜 Tecnologia aumenta a produção agrícola.",
  "💧 Economia de água reduz desperdícios.",
  "☀️ Energia solar transforma o campo.",
  "🤖 IA revoluciona a agricultura moderna."

];

let fraseAtual = 0;

const caixaFrase = document.createElement("div");

caixaFrase.style.position = "fixed";
caixaFrase.style.bottom = "20px";
caixaFrase.style.right = "20px";
caixaFrase.style.background = "#00ff88";
caixaFrase.style.color = "black";
caixaFrase.style.padding = "15px";
caixaFrase.style.borderRadius = "15px";
caixaFrase.style.fontWeight = "bold";
caixaFrase.style.zIndex = "9999";
caixaFrase.style.boxShadow = "0 0 20px #00ff88";

document.body.appendChild(caixaFrase);

function trocarFrases() {

  caixaFrase.innerHTML = frases[fraseAtual];

  fraseAtual++;

  if (fraseAtual >= frases.length) {

    fraseAtual = 0;

  }

}

trocarFrases();

setInterval(trocarFrases, 4000);


// ============================================
// REVELAR ELEMENTOS AO ROLAR
// ============================================

const revelar = document.querySelectorAll(
  ".card, .tech-card, .galeria-grid img"
);

function mostrarElementos() {

  const topoTela = window.innerHeight;

  revelar.forEach((elemento) => {

    const topoElemento =
      elemento.getBoundingClientRect().top;

    if (topoElemento < topoTela - 100) {

      elemento.style.opacity = "1";
      elemento.style.transform = "translateY(0px)";

    }

  });

}

revelar.forEach((elemento) => {

  elemento.style.opacity = "0";
  elemento.style.transform = "translateY(50px)";
  elemento.style.transition = "1s";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


// ============================================
// MENSAGENS IMPORTANTES
// ============================================

console.log("🌱 Agro Forte carregado com sucesso.");

console.log("🚜 Agricultura sustentável ativa.");

console.log("🤖 Tecnologias do futuro funcionando.");

console.log("💧 Economia de água monitorada.");

console.log("☀️ Energia limpa conectada.");


// ============================================
// PROTEÇÃO CONTRA ERROS
// ============================================

window.addEventListener("error", function (erro) {

  console.log("Erro detectado:");
  console.log(erro.message);

});
