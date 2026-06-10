// Aguarda o DOM carregar completamente antes de rodar os scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. VARIÁVEIS E GERENCIAMENTO DE ESTADO
    // ==========================================
    let nomeUsuario = "";
    let nívelProducao = 50;
    let nívelAmbiente = 50;
    let pontosEquilibrio = 0;
    let jogoAtivo = true;

    // Elementos da Interface (Manipulação do DOM)
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

    // ==========================================
    // 2. ACESSIBILIDADE E RECURSO EXTRA: MODO ESCURO
    // ==========================================
    btnDarkMode.addEventListener("click", function () {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        if (temaAtual === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    // ==========================================
    // 3. CAPTURA DE EVENTO E PROCESSAMENTO DE INPUT
    // ==========================================
    formUsuario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Impede o recarregamento padrão da página
        
        nomeUsuario = inputNome.value.trim();
        
        if (nomeUsuario !== "") {
            // Modifica o DOM injetando string personalizada estruturada
            textoBoasVindas.textContent = `Olá, ${nomeUsuario}! Bem-vindo ao simulador do Agrinho 2026. Almeje o equilíbrio máximo!`;
            textoBoasVindas.classList.remove("hidden");
            formUsuario.classList.add("hidden");
        }
    });

    // ==========================================
    // 4. LÓGICA DO SIMULADOR (JOGO INTERATIVO)
    // ==========================================
    function atualizarInterfaceJogo() {
        // Atualiza textos numéricos
        txtProducao.textContent = nívelProducao;
        txtAmbiente.textContent = nívelAmbiente;
        
        // Altera propriedades de estilo das barras dinamicamente
        barraProducao.style.width = nívelProducao + "%";
        barraAmbiente.style.width = nívelAmbiente + "%";
        
        // Atualiza pontuação
        txtScore.textContent = pontosEquilibrio;

        // Verifica regras de colapso ou vitória
        if (nívelProducao <= 0 || nívelAmbiente <= 0 || nívelProducao >= 100 || nívelAmbiente >= 100) {
            finalizarJogo(false);
        } else if (nívelProducao >= 70 && nívelAmbiente >= 70) {
            msgStatus.textContent = "Excelente! Alta produtividade com sustentabilidade real!";
            msgStatus.className = "status-ok";
        } else {
            msgStatus.textContent = "Ecossistema Estável. Busque elevar ambos com responsabilidade.";
            msgStatus.className = "status-ok";
        }
    }

    function calcularPontos() {
        if (!jogoAtivo) return;
        // Premia o usuário baseado na proximidade da igualdade ideal (50/50 ou superior)
        const diferenca = Math.abs(nívelProducao - nívelAmbiente);
        if (diferenca <= 10) {
            pontosEquilibrio += 20;
        } else {
            pontosEquilibrio += 5;
        }
    }

    function finalizarJogo(vitoria) {
        jogoAtivo = false;
        btnIntensificar.disabled = true;
        btnReflorestar.disabled = true;
        btnSustentavel.disabled = true;
        btnResetGame.classList.remove("hidden");
        
        msgStatus.textContent = "Fim da Simulação! O Ecossistema quebrou devido ao descompasso operacional.";
        msgStatus.className = "status-danger";
    }

    // Ouvintes de eventos para as interações do usuário no jogo
    btnIntensificar.addEventListener("click", function () {
        if (!jogoAtivo) return;
        nívelProducao += 15;
        nívelAmbiente -= 10;
        calcularPontos();
        atualizarInterfaceJogo();
    });

    btnReflorestar.addEventListener("click", function () {
        if (!jogoAtivo) return;
        nívelProducao -= 10;
        nívelAmbiente += 15;
        calcularPontos();
        atualizarInterfaceJogo();
    });

    btnSustentavel.addEventListener("click", function () {
        if (!jogoAtivo) return;
        // A tecnologia sustentável equilibra os fatores aumentando ambos de forma ponderada
        nívelProducao += 5;
        nívelAmbiente += 5;
        calcularPontos();
        atualizarInterfaceJogo();
    });

    btnResetGame.addEventListener("click", function () {
        nívelProducao = 50;
        nívelAmbiente = 50;
        pontosEquilibrio = 0;
        jogoAtivo = true;
        
        btnIntensificar.disabled = false;
        btnReflorestar.disabled = false;
        btnSustentavel.disabled = false;
        btnResetGame.classList.add("hidden");
        
        atualizarInterfaceJogo();
    });

    // Executa a montagem visual inicial do simulador
    atualizarInterfaceJogo();
});
