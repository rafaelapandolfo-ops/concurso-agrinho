// ===== Loader =====
window.addEventListener("load", () => {
  setTimeout(()=>document.getElementById("loader").style.display="none",1200);
});

// ===== Contadores =====
function iniciarContador(id,final){
  let valor=0;
  const el=document.getElementById(id);
  const incremento=Math.ceil(final/100);
  const timer=setInterval(()=>{
    valor+=incremento;
    if(valor>=final){valor=final; clearInterval(timer);}
    el.innerText=valor;
  },20);
}
const observerContador = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      iniciarContador("n1",120);
      iniciarContador("n2",350);
      iniciarContador("n3",95);
      obs.disconnect();
    }
  });
});
observerContador.observe(document.querySelector(".numeros"));

// ===== Fade efeito =====
const observerFade = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
document.querySelectorAll(".fade").forEach(el=>observerFade.observe(el));

// ===== Quiz =====
const perguntas = [
  {pergunta:"O que ajuda a preservar o solo?", opcoes:["Queimada","Rotação de culturas","Desmatamento","Poluição"], correta:1},
  {pergunta:"Qual energia é renovável?", opcoes:["Petróleo","Diesel","Solar","Carvão"], correta:2},
  {pergunta:"O que é agricultura sustentável?", opcoes:["Produzir sem limites","Produzir preservando recursos naturais","Desmatar mais","Poluir rios"], correta:1}
];
let indice
