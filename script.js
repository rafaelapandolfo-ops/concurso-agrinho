// Aguarda o DOM carregar para iniciar a lógica
document.addEventListener("DOMContentLoaded", function () {
    
    // Variáveis globais para gerenciar o estado interno
    let nomeUsuario = "";
    let producao = 50;
    let ambiente = 50;
    let pontos = 0;
    let jogoAtivo = true;

    // Captura ordenada dos elementos do DOM
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    const formUsuario = document.getElementById("form-usuario");
    const inputNome = document.getElementById("input-nome");
    const textoBoasVindas = document.getElementById("texto-boas-vindas");
    
    const txtProducao = document.getElementById("val-producao");
    const txtAmbiente = document.getElementById("val-ambiente");
    const barraProducao = document.getElementById("barra-producao");
    const barraAmbiente = document.getElementById("barra-ambiente");
    
    const btnIntensificar = document.getElementById("btn-intensificar");
    const btnReflorestar = document.getElementById("btn-reflorestar");
    const btnSustentavel = document.getElementById("btn-sustentavel");
    const btnResetGame = document.getElementById("btn-reset-game");
    
    const txtScore = document.getElementById("score-pontos");
    const msgStatus = document.getElementById("mensagem-status");

    // Alternador de Modo Claro/Escuro por manipulação de atributo
    btnDarkMode.addEventListener("click", function () {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        if (temaAtual === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    // Processamento do formulário de boas-vindas
    formUsuario.addEventListener("submit", function (evento) {
        evento.preventDefault(); 
        nomeUsuario = inputNome.value.trim();
        
        if (nomeUsuario !== "") {
            textoBoasVindas.textContent = `Olá, ${nomeUsuario}! Busque o equilíbrio perfeito para salvar a simulação.`;
            textoBoasVindas.classList.remove("hidden");
            formUsuario.classList.add("hidden");
        }
    });

    // Função interna para renderizar o estado do jogo nas barras e textos
    function atualizarInterfaceJogo() {
        txtProducao.textContent = producao;
        txtAmbiente.textContent = ambiente;
        
        barraProducao.style.width = producao + "%";
        barraAmbiente.style.width = ambiente + "%";
        
        txtScore.textContent = pontos;

        // Validação de colapso do sistema (Cenário de derrota/fim)
        if (producao <= 0 || ambiente <= 0 || producao >= 100 || ambiente >= 100) {
            jogoAtivo = false;
            btnIntensificar.disabled = true;
            btnReflorestar.disabled = true;
            btnSustentavel.disabled = true;
            btnResetGame.classList.remove("hidden");
            
            msgStatus.textContent = "Fim de jogo! O ecossistema colapsou pelo desequilíbrio estrutural.";
            msgStatus.className = "status-danger";
        } else {
            msgStatus.textContent = "Ecossistema Saudável e Estável.";
            msgStatus.className = "status-ok";
        }
    }

    // Calcula bonificação incremental baseada no nível de igualdade dos fatores
    function somarPontos() {
        if (!jogoAtivo) return;
        const diferenca = Math.abs(producao - ambiente);
        if (diferenca <= 15) {
            pontos += 10;
        } else {
            pontos += 2;
        }
    }

    // Ouvintes de ação para cliques nos controles do jogo
    btnIntensificar.addEventListener("click", function () {
        if (!jogoAtivo) return;
        producao += 10;
        ambiente -= 10;
        somarPontos();
        atualizarInterfaceJogo();
    });

    btnReflorestar.addEventListener("click", function () {
        if (!jogoAtivo) return;
        producao -= 10;
        ambiente += 10;
        somarPontos();
        atualizarInterfaceJogo();
    });

    btnSustentavel.addEventListener("click", function () {
        if (!jogoAtivo) return;
        producao += 5;
        ambiente += 5;
        somarPontos();
        atualizarInterfaceJogo();
    });

    // Reseta o estado inicial do motor do jogo
    btnResetGame.addEventListener("click", function () {
        producao = 50;
        ambiente = 50;
        pontos = 0;
        jogoAtivo = true;
        
        btnIntensificar.disabled = false;
        btnReflorestar.disabled = false;
        btnSustentavel.disabled = false;
        btnResetGame.classList.add("hidden");
        
        atualizarInterfaceJogo();
    });

    // Inicialização da interface na primeira execução
    atualizarInterfaceJogo();
});
