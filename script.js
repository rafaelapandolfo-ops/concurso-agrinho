window.addEventListener("load", () => {

setTimeout(() => {
document.getElementById("loader").style.display = "none";
}, 1200);

});

const quiz = [

{
q:"O que ajuda a preservar o solo?",
a:["Queimada","Rotação de culturas","Desmatamento","Poluição"],
c:1
},

{
q:"Qual energia é renovável?",
a:["Petróleo","Diesel","Solar","Carvão"],
c:2
},

{
q:"O que é agricultura sustentável?",
a:[
"Produzir sem limites",
"Produzir preservando recursos",
"Desmatar mais",
"Usar mais combustível"
],
c:1
}

];

let atual = 0;
let score = 0;
let respondeu = false;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");

function loadQuestion(){

respondeu=false;

question.textContent = quiz[atual].q;

answers.innerHTML="";

quiz[atual].a.forEach((item,index)=>{

const div=document.createElement("div");

div.classList.add("answer");

div.textContent=item;

div.onclick=()=>{

if(respondeu) return;

respondeu=true;

if(index===quiz[atual].c){

score++;
div.style.background="#00ff88";

}else{

div.style.background="#ff4444";

}

};

answers.appendChild(div);

});

}

document.getElementById("next").onclick=()=>{

if(!respondeu) return;

atual++;

if(atual<quiz.length){

loadQuestion();

}else{

question.innerHTML="🌱 Quiz Finalizado";

answers.innerHTML="";

result.innerHTML=
`Você acertou ${score} de ${quiz.length} perguntas.`;

}

};

loadQuestion();

function animate(id,max){

let valor=0;

const elemento=document.getElementById(id);

const intervalo=setInterval(()=>{

valor++;

elemento.innerText=valor;

if(valor>=max){

clearInterval(intervalo);

}

},25);

}

animate("n1",120);
animate("n2",350);
animate("n3",95);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el => {
observer.observe(el);
});
