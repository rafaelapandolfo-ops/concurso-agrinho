// Função para simular o cálculo de impacto ambiental positivo no campo
function calcularImpacto() {
    const resultadoDiv = document.getElementById("contador-resultado");
    
    // Simulação simples: cada clique representa um hectare de pastagem degradada recuperada
    if (!window.hectaresRecuperados) {
        window.hectaresRecuperados = 0;
    }
    
    window.hectaresRecuperados += 1;
    
    // Estimativa teórica de CO2 retido por hectare recuperado via ILPF
    const co2Sequestrado = (window.hectaresRecuperados * 2.5).toFixed(1);

    resultadoDiv.innerHTML = `
        <p>Você simulou a recuperação de <strong>${window.hectaresRecuperados} hectare(s)</strong> de terra!</p>
        <p>Isso ajuda a reter aproximadamente <strong>${co2Sequestrado} toneladas de CO2</strong> na natureza e evita novos desmatamentos. 🌳</p>
    `;
}

// Mensagem de boas-vindas no console para checar se o script carregou certo
console.log("Projeto Agrinho 2026: Código de sustentabilidade ativado com sucesso!");
