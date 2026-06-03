// CONTADORES ANIMADOS

const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero=>{

let inicio = 0;
const fim = parseInt(numero.dataset.num);

const timer = setInterval(()=>{

inicio++;

numero.textContent = inicio;

if(inicio >= fim){
clearInterval(timer);
}

},20);

});


// QUIZ

const perguntas = [

{
pergunta:"Qual é o objetivo da arborização?",
respostas:[
"Poluir rios",
"Melhorar o meio ambiente",
"Aumentar queimadas",
"Destruir florestas"
],
correta:1
},

{
pergunta:"O que reduz o desmatamento?",
respostas:[
"Queimadas",
"Preservação ambiental",
"Poluição",
"Lixo"
],
correta:1
},

{
pergunta:"Qual prática é sustentável?",
respostas:[
"Reciclagem",
"Desmatamento",
"Poluição",
"Queimadas"
],
correta:0
},

{
pergunta:"O que protege a biodiversidade?",
respostas:[
"Preservação dos habitats",
"Queimadas",
"Caça ilegal",
"Poluição"
],
correta:0
}

];

let atual = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const resultado = document.getElementById("resultado");

function carregarPergunta(){

if(atual >= perguntas.length){

resultado.innerHTML = `
<h2>🏆 Resultado Final</h2>
<p>Você acertou ${pontos} de ${perguntas.length}</p>
`;

pergunta.style.display = "none";
respostas.style.display = "none";

return;
}

let questao = perguntas[atual];

pergunta.textContent = questao.pergunta;

respostas.innerHTML = "";

questao.respostas.forEach((texto,index)=>{

const btn = document.createElement("button");

btn.textContent = texto;

btn.onclick = ()=>{

if(index === questao.correta){
pontos++;
}

atual++;
carregarPergunta();

};

respostas.appendChild(btn);

});

}

carregarPergunta();


// EFEITO SCROLL

window.addEventListener("scroll",()=>{

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const pos = card.getBoundingClientRect().top;

if(pos < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});
