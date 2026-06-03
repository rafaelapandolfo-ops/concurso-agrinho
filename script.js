// Variáveis do Estado do Minijogo
let totalArvores = 0;
let hectaresEvitados = 0;
let experienciaSustentavel = 100;

function jogarTurno(acao) {
    const consoleOutput = document.getElementById("game-console");
    
    if (acao === 'ilpf') {
        totalArvores += 240;
        hectaresEvitados += 35;
        experienciaSustentavel += 50;
        consoleOutput.innerHTML = `> [ACAO CONCLUIDA]: Implementando sistemas ILPF. Você otimizou a produção de grãos e carnes sem derrubar nenhuma nova árvore. +240 Árvores Protegidas e +50 XP!`;
    } 
    else if (acao === 'satelite') {
        totalArvores += 500;
        hectaresEvitados += 110;
        experienciaSustentavel += 75;
        consoleOutput.innerHTML = `> [SISTEMA ALERTA]: Sensores de satélite detectaram atividade suspeita na fronteira agrícola. O desmatamento ilegal foi contido imediatamente. +110 Hectares Protegidos!`;
    } 
    else if (acao === 'codigo') {
        totalArvores += 850;
        hectaresEvitados += 70;
        experienciaSustentavel += 100;
        consoleOutput.innerHTML = `> [CONSERVAÇÃO ATIVADA]: Reserva Legal mapeada e delimitada conforme as regras federais. A biodiversidade local agradece. +850 Árvores Salvas e +100 XP!`;
    }

    // Aplica efeito visual de atualização nos elementos gráficos da tela
    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById("txt-arvores").innerText = totalArvores;
    document.getElementById("txt-desmatamento").innerText = hectaresEvitados + " ha";
    document.getElementById("txt-pontos").innerText = experienciaSustentavel + " XP";
    
    // Altera dinamicamente a cor da fonte do painel de controle conforme ganha pontos
    if(experienciaSustentavel >= 300) {
        document.getElementById("txt-pontos").style.color = "#00ff66";
    }
}
