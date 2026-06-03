// Valores globais reativos
let variavelArvores = 0;
let pesoCarbono = 0.0;
let indiceProducao = 100;

function activarTecnologia(tipo) {
    const log = document.getElementById("log-sistema");
    
    if (tipo === 'ilpf') {
        variavelArvores += 320;
        pesoCarbono += 8.4;
        indiceProducao += 15;
        log.innerText = "[OK]: Sistema de Integração Lavoura-Pecuária-Floresta consolidado no bioma.";
    } 
    else if (tipo === 'biologicos') {
        pesoCarbono += 3.1;
        indiceProducao += 10;
        log.innerText = "[OK]: Substituição de defensivos químicos por agentes biológicos ativa.";
    } 
    else if (tipo === 'satelite') {
        variavelArvores += 750;
        pesoCarbono += 18.2;
        log.innerText = "[ALERTA]: Rastreamento via satélite integrado à rede de fiscalização local.";
    }

    // Renderização dos dados nos elementos correspondentes
    document.getElementById("m-arvores").innerText = variavelArvores;
    document.getElementById("m-co2").innerText = pesoCarbono.toFixed(1) + " t";
    document.getElementById("m-prod").innerText = indiceProducao + "%";
}
