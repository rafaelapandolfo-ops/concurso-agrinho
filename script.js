// =========================================================================
// SIMULADOR DE IMPACTO - CONCURSO AGRINHO 2026
// =========================================================================

// Mensagem de teste para o painel do programador (F12 no navegador)
console.log("O ficheiro script.js foi carregado com sucesso!");

// Variáveis globais do simulador
let arvoresContador = 0;
let toneladasCarbono = 0.0;
let taxaProdutividade = 100;

// Mapeamento dos elementos da interface (DOM)
const elArvores = document.getElementById("m-arvores");
const elCo2 = document.getElementById("m-co2");
const elProd = document.getElementById("m-prod");
const logSistema = document.getElementById("log-sistema");

// Função responsável por processar a tecnologia ativada
function activarTecnologia(tipo) {
    // Se algum elemento não existir na página, o código para aqui para não gerar erros
    if (!logSistema || !elArvores || !elCo2 || !elProd) return;

    if (tipo === 'ilpf') {
        arvoresContador += 350; 
        toneladasCarbono += 7.5; 
        taxaProdutividade += 20;
        logSistema.innerText = "[OK]: Sistema ILPF implementado. Nitrogênio fixado e pastagem recuperada.";
    } else if (tipo === 'biologicos') {
        toneladasCarbono += 2.8; 
        taxaProdutividade += 10;
        logSistema.innerText = "[OK]: Inoculantes biológicos ativos. Redução da dependência de químicos.";
    } else if (tipo === 'satelite') {
        arvoresContador += 800; 
        toneladasCarbono += 15.2;
        logSistema.innerText = "[ALERTA]: Rastreamento geoespacial em tempo real conectado com a fiscalização.";
    }

    // Atualização dos textos no ecrã
    elArvores.innerText = arvoresContador;
    elCo2.innerText = toneladasCarbono.toFixed(1) + " t";
    elProd.innerText = taxaProdutividade + "%";
}

// Ouvinte que deteta quando a página carregou para ativar os botões de forma segura
document.addEventListener("DOMContentLoaded", () => {
    const btnIlpf = document.getElementById("btn-ilpf");
    const btnBiologicos = document.getElementById("btn-biologicos");
    const btnSatelite = document.getElementById("btn-satelite");

    // Vincula o clique de cada botão à função correspondente
    if (btnIlpf) {
        btnIlpf.addEventListener("click", () => activarTecnologia('ilpf'));
        console.log("Botão ILPF configurado.");
    }
    if (btnBiologicos) {
        btnBiologicos.addEventListener("click", () => activarTecnologia('biologicos'));
        console.log("Botão Biológicos configurado.");
    }
    if (btnSatelite) {
        btnSatelite.addEventListener("click", () => activarTecnologia('satelite'));
        console.log("Botão Satélite configurado.");
    }
});

// =========================================================================
// ESTRUTURA DO INTERACTIVE QUIZ
// =========================================================================
const questoes = [
    {
        pergunta: "Qual sistema combina lavoura, pecuária e árvores na mesma área?",
        respostas: [
            { texto: "Monocultura intensiva", correta: false },
            { texto: "Sistema ILPF", correta: true },
            { texto: "Desmatamento planejado", correta: false },
            { texto: "Pecuária extensiva tradicional", correta: false }
        ]
    },
    {
        pergunta: "Por que o desmatamento ilegal prejudica diretamente as plantações?",
        respostas: [
            { texto: "Porque ele limpa o terreno", correta: false },
            { texto: "Não prejudica, ajuda no espaço", correta: false },
            { texto: "Altera o ciclo de chuvas e reduz a umidade", correta: true },
            { texto: "Aumenta os nutrientes naturais do solo", correta: false }
        ]
    },
    {
        pergunta: "O que o Código Florestal Brasileiro exige das propriedades rurais?",
        respostas: [
            { texto: "Desmatar 100% da área para produção", correta: false },
            { texto: "Manutenção de Reserva Legal e APPs", correta: true },
            { texto: "Uso exclusivo de defensivos químicos sintéticos", correta: false },
            { texto: "Plantio apenas de espécies exóticas", correta: false }
        ]
    }
];

let indexPerguntaAtual = 0;
