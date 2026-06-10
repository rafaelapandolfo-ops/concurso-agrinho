document.addEventListener("DOMContentLoaded", function () {
    let nomeUsuario = "";
    let producao = 50;
    let ambiente = 50;
    let pontos = 0;
    let jogoAtivo = true;
    let tamanhoFonteAtual = 100; // Porcentagem do tamanho da fonte

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

    // Controle de Modo Escuro
    btnDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Controle de Acessibilidade: Alteração de tamanho de fonte via JS (Exigência Rubrica)
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

    // Accordion das Caixas de Explicação
    const titulosAccordion = document.querySelectorAll(".accordion-header");
    titulosAccordion.forEach(function (titulo) {
        titulo.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

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
