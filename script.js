// Garante o carregamento do DOM antes da execução
document.addEventListener("DOMContentLoaded", function () {
    
    // Variáveis de Controle do Estado do Jogo
    let nomeUsuario = "";
    let producao = 50;
    let ambiente = 50;
    let pontos = 0;
    let jogoAtivo = true;

    // Elementos da Interface capturados para manipulação do DOM
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

    // // Função para gerenciar recurso extra (Modo Escuro) via JS
    btnDarkMode.addEventListener("click", function () {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        if (temaAtual === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    // // Função para capturar dados do formulário e exibir saudação personalizada
    formUsuario.addEventListener("submit", function (evento) {
        evento.preventDefault(); 
        nomeUsuario = inputNome.value.trim();
        
        if (nomeUsuario !== "") {
            textoBoasVindas.textContent = `Olá, ${nomeUsuario}! Ajude-nos a encontrar o equilíbrio perfeito nesta simulação.`;
            textoBoasVindas.classList.remove("hidden");
            formUsuario.classList.add("hidden");
        }
    });

    // // Função para atualizar os elementos visuais e as barras do jogo no DOM
    function atualizarInterfaceJogo() {
        txtProducao.textContent = producao;
        txtAmbiente.textContent = ambiente;
        
        barraProducao.style.width = producao + "%";
        barraAmbiente.style.width = ambiente + "%";
        
        txtScore.textContent = pontos;

        // Validação das condições de fim de jogo ou estabilidade
        if (producao <= 0 || ambiente <= 0 || producao >= 100 || ambiente >= 100) {
            jogoAtivo = false;
            btnIntensificar.disabled = true;
            btnReflorestar.disabled = true;
            btnSustentavel.disabled = true;
            btnResetGame.classList.remove("hidden");
            
            msgStatus.textContent = "Fim de jogo! O ecossistema colapsou devido ao desequilíbrio.";
            msgStatus.className = "status-danger";
        } else {
            msgStatus.textContent = "Ecossistema Saudável e Estável.";
            msgStatus.className = "status-ok";
        }
    }

    // // Função para calcular os pontos de bônus por rodada equilibrada
    function somarPontos() {
        if (!jogoAtivo) return;
        const diferenca = Math.abs(producao - ambiente);
        if (diferenca <= 15) {
            pontos += 10;
        } else {
            pontos += 2;
        }
    }

    // Eventos de clique dos botões do simulador
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

    // // Função para resetar as variáveis e a tela do jogo
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

    // Inicialização da interface
    atualizarInterfaceJogo();
});
