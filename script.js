const perguntas = [

{
pergunta:"O que ajuda a preservar o solo?",
opcoes:[
"Queimada",
"Rotação de culturas",
"Desmatamento",
"Poluição"
],
correta:1
},

{
pergunta:"Qual energia é renovável?",
opcoes:[
"Petróleo",
"Diesel",
"Solar",
"Carvão"
],
correta:2
},

{
pergunta:"O que é agricultura sustentável?",
opcoes:[
"Produzir sem limites",
"Produzir preservando recursos naturais",
"Desmatar mais",
"Poluir menos rios"
],
correta:1
}

];

let indice = 0;
let pontos = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");

function carregarPergunta(){

const atual = perguntas[indice];

question.innerHTML =
`${indice + 1}/${perguntas.length} - ${atual.pergunta}`;

answers.innerHTML="";

atual.opcoes.forEach((texto,i)=>{

const btn=document.createElement("button");

btn.classList.add("answer");

btn.innerHTML=texto;

btn.onclick=()=>verificar(i);

answers.appendChild(btn);

});

}

function verificar(resposta){

const atual = perguntas[indice];

const botoes =
document.querySelectorAll(".answer");

botoes.forEach((btn,index)=>{

btn.disabled=true;

if(index===atual.correta){

btn.style.background="#00ff88";
btn.style.color="#000";

}

if(index===resposta &&
index!==atual.correta){

btn.style.background="#ff4444";

}

});

if(resposta===atual.correta){

pontos++;

}

}

document
.getElementById("next")
.addEventListener("click",()=>{

indice++;

if(indice<perguntas.length){

carregarPergunta();

}else{

question.innerHTML=
"🎉 Quiz Concluído!";

answers.innerHTML="";

result.innerHTML=`
<h2>${pontos}/${perguntas.length}</h2>

<p>
Você acertou ${pontos}
perguntas!
</p>
`;

}

});

carregarPergunta();
