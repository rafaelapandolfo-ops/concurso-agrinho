// Variáveis iniciais do Estado do Jogo
let arvoresSalvas = 0;
let taxaDesmatamento = 100;
let eficienciaProducao = 100;

function jogarAcao(tipoAcao) {
    const feedback = document.getElementById("game-feedback");
    
    if (tipoAcao === 'ilpf') {
        arvoresSalvas += 150;
        eficienciaProducao += 25;
        taxaDesmatamento -= 15;
        feedback.innerHTML = `> [SUCESSO]: Sistema ILPF ativado! Você integrou árvores e gado na mesma área. A produção subiu para ${eficienciaProducao}% e poupou novas áreas de desmatamento! 🌾🌲`;
    } 
    else if (tipoAcao === 'satelite') {
        arvoresSalvas += 300;
        taxaDesmatamento -= 40;
        feedback.innerHTML = `> [ALERTA DE PRECISÃO]: Satélites ligados. Focos de desmatamento ilegal foram identificados e parados pelas autoridades. Taxa caiu para ${taxaDesmatamento < 0 ? 0 : taxaDesmatamento}%! 🛰️🛑`;
    } 
    else if (tipoAcao === 'reserva') {
        arvoresSalvas += 500;
        eficienciaProducao -= 5; // Simula o isolamento da área
        taxaDesmatamento -= 20;
        feedback.innerHTML = `> [CONSERVAÇÃO]: Reserva Legal cercada e protegida. Mais 500 árvores nativas estão seguras fornecendo biodiversidade e água. 🌳💧`;
    }

    // Correção para não negativar a taxa de desmatamento
    if (taxaDesmatamento < 0) taxaDesmatamento = 0;

    // Atualiza os valores na interface gráfica do usuário
    document.getElementById("score-arvores").innerText = arvoresSalvas;
    document.getElementById("score-desmatamento").innerText = taxaDesmatamento + "%";
    document.getElementById("score-producao").innerText = eficienciaProducao + "%";

    // Vitória total do jogador
    if (taxaDesmatamento === 0) {
        feedback.innerHTML += `<br><br>🏆 <strong>MISSÃO CUMPRIDA!</strong> Você alcançou o equilíbrio perfeito: Agro forte e Desmatamento Ilegal ZERO!`;
        feedback.style.borderColor = "#4fec7a";
    }
}
