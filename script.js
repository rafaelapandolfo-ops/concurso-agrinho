    document.addEventListener("DOMContentLoaded", function () {
    let nomeUsuario = "";
    let producao = 50;
    let ambiente = 50;
    let pontos = 0;
    let jogoAtivo = true;
    let tamanhoFonteAtual = 100;

    // Estados do Clima para Simulação Dinâmica
    const estadosClimaticos = [
        { icone: "☀️", temp: "28°C", condicao: "Ensolarado ideal para colheita", umidade: "45%", risco: "Baixo", corPixel: "#2ecc71" },
        { icone: "🌧️", temp: "21°C", condicao: "Chuva moderada benéfica", umidade: "85%", risco: "Médio (Fungos)", corPixel: "#1b4d3e" },
        { icone: "🍂", temp: "19°C", condicao: "Estiagem prolongada em curso", umidade: "20%", risco: "Alto (Incêndio)", corPixel: "#f1c40f" }
    ];
    let indiceClima = 0;

    const btnDarkMode = document.getElementById("toggle-dark-mode");
    const btnAumentarFonte = document.getElementById("btn-aumentar-fonte");
    const btnDiminuirFonte = document.getElementById("btn-diminuir-fonte");
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

    // Elementos do Clima e Mapa
    const btnMudarClima = document.getElementById("btn-mudar-clima");
    const climaIcone = document.getElementById("clima-icone");
    const climaTemp = document.getElementById("clima-temp");
    const climaCondicao = document.getElementById("clima-condicao");
    const climaUmidade = document.getElementById("clima-umidade");
    const climaRisco = document.getElementById("clima-risco");
    const pixelsMapa = document.querySelectorAll(".map-pixel.crop");

    // Lógica Dinâmica da Previsão do Tempo e Mudança de Cores do Mapa
    btnMudarClima.addEventListener("click", function () {
        indiceClima = (indiceClima + 1) % estadosClimaticos.length;
        const climaAtual = estadosClimaticos[indiceClima];

        // Altera dados textuais da previsão no DOM
        climaIcone.textContent = climaAtual.icone;
        climaTemp.textContent = climaAtual.temp;
        climaCondicao.textContent = climaAtual.condicao;
        climaUmidade.textContent = climaAtual.umidade;
        climaRisco.textContent = climaAtual.risco;

        // Manipula cores dos pixels do mapa de acordo com o clima simulado
        pixelsMapa.forEach(function (pixel) {
            pixel.style.backgroundColor = climaAtual.corPixel;
        });
    });

    // Controle de Modo Escuro
    btnDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Controle de Acessibilidade (Tamanho de Fonte)
    btnAumentarFonte.addEventListener("click", function () {
        if (tamanhoFonteAtual < 140) {
            tamanhoFonteAtual += 10;
            document.body.style.fontSize = tamanhoFonteAtual + "%";
        }
    });

    btnDiminuirFonte.addEventListener("click", function () {
        if (tamanhoFonteAtual > 80) {
            tamanhoFonteAtual -= 10;
            document.body.style.fontSize = tamanhoFonteAtual + "%";
        }
    });

    formUsuario.addEventListener("submit", function (evento) {
        evento.preventDefault(); 
        nomeUsuario = inputNome.value.trim();
        
        if (nomeUsuario !== "") {
            textoBoasVindas.textContent = `Olá, ${nomeUsuario}! Mantenha o equilíbrio produtivo e salve nosso ambiente.`;
            textoBoasVindas.classList.remove("hidden");
            formUsuario.classList.add("hidden");
        }
    });

    // Accordion + Abertura automática ao clicar nos Links do Menu Superior
    const titulosAccordion = document.querySelectorAll(".accordion-header");
    const linksMenu = document.querySelectorAll(".main-nav a");

    titulosAccordion.forEach(function (titulo) {
        titulo.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            const destinoId = this.getAttribute("href"); 
            const secaoDestino = document.querySelector(destinoId);

            if (secaoDestino) {
                const accordionsDaSecao = secaoDestino.querySelectorAll(".accordion-header");
                accordionsDaSecao.forEach(function (accordion) {
                    accordion.classList.add("active");
                });
            }
        });
    });

    // Motor do Jogo Simulador
    function atualizarInterfaceJogo() {
        txtProducao.textContent = producao;
        txtAmbiente.textContent = ambiente;
        
        barraProducao.style.width = producao + "%";
        barraAmbiente.style.width = ambiente + "%";
        
        txtScore.textContent = pontos;

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

    function somarPontos() {
        if (!jogoAtivo) return;
        const diferenca = Math.abs(producao - ambiente);
        if (diferenca <= 15) {
            pontos += 10;
        } else {
            pontos += 2;
        }
    }

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

    atualizarInterfaceJogo();
});
