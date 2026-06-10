const perguntas = [

{
pergunta:"Qual prática ajuda a preservar o solo?",
respostas:[
"Queimadas",
"Rotação de culturas",
"Desmatamento",
"Uso excessivo de agrotóxicos"
],
correta:1
},

{
pergunta:"O que é agricultura sustentável?",
respostas:[
"Produzir sem se preocupar com o ambiente",
"Produzir preservando recursos naturais",
"Parar toda produção agrícola",
"Usar apenas máquinas"
],
correta:1
},

{
pergunta:"Qual fonte de energia é renovável?",
respostas:[
"Carvão",
"Petróleo",
"Solar",
"Diesel"
],
correta:2
}

];

let atual=0;
let pontos=0;

const pergunta=document.getElementById("pergunta");
const respostas=document.getElementById("respostas");
const pontuacao=document.getElementById("pontuacao");

function carregarPergunta(){

pergunta.innerHTML=perguntas[atual].pergunta;

respostas.innerHTML="";

perguntas[atual].respostas.forEach((resp,index)=>{

const btn=document.createElement("div");

btn.classList.add("opcao");

btn.innerHTML=resp;

btn.onclick=()=>{

if(index===perguntas[atual].correta){
pontos++;
}

document.querySelectorAll(".opcao").forEach(o=>{
o.style.pointerEvents="none";
});

};

respostas.appendChild(btn);

});

}

document.getElementById("proximo").onclick=()=>{

atual++;

if(atual<perguntas.length){
carregarPergunta();
}
else{

pergunta.innerHTML="Quiz Finalizado!";

respostas.innerHTML="";

pontuacao.innerHTML=
`Você acertou ${pontos} de ${perguntas.length} perguntas. 🌱`;

}

};

carregarPergunta();

function contador(id,final){

let atual=0;

let intervalo=setInterval(()=>{

atual+=Math.ceil(final/100);

if(atual>=final){
atual=final;
clearInterval(intervalo);
}

document.getElementById(id).innerHTML=atual;

},30);

}

contador("num1",320);
contador("num2",5000);
contador("num3",70);
