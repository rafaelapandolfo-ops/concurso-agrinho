// VARIÁVEIS DO SIMULADOR DE IMPACTO
let arvoresContador = 0;
let toneladasCarbono = 0.0;
let taxaProdutividade = 100;

function activarTecnologia(tipo) {
    const log = document.getElementById("log-sistema");
    if (tipo === 'ilpf') {
        arvoresContador += 350; toneladasCarbono += 7.5; taxaProdutividade += 20;
        log.innerText = "[OK]: Sistema ILPF implementado. Nitrogênio fixado e pastagem recuperada.";
    } else if (tipo === 'biologicos') {
        toneladasCarbono += 2.8; taxaProdutividade += 10;
        log.innerText = "[OK]: Inoculantes biológicos ativos. Redução da dependência de químicos.";
    } else if (tipo === 'satelite') {
        arvoresContador += 800; toneladasCarbono += 15.2;
        log.innerText = "[ALERTA]: Rastreamento geoespacial em tempo real conectado com a fiscalização.";
    }
    document.getElementById("m-arvores").innerText = arvoresContador;
    document.getElementById("m-co2").innerText = toneladasCarbono.toFixed(1) + " t";
    document.getElementById("m-prod").innerText = taxaProdutividade + "%";
}

// LOGÍSTICA DO INTERACTIVE QUIZ
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
