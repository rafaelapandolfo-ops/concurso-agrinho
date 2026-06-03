// Função para simular o cálculo de impacto ambiental positivo no campo
function calcularImpacto() {
    const resultadoDiv = document.getElementById("contador-resultado");
    
    if (!window.hectaresRecuperados) {
        window.hectaresRecuperados = 0;
    }
    
    window.hectaresRecuperados += 1;
    
    // Estimativa matemática: cada hectare recuperado fixa carbono no solo/árvores
    const co2Sequestrado = (window.hectaresRecuperados * 2.5).toFixed(1);

    resultadoDiv.innerHTML = `
        <p>Você simulou a recuperação de <strong>${window.hectaresRecuperados} hectare(s)</strong> de pastagem degradada!</p>
        <p>Isso ajuda a reter aproximadamente <strong>${co2Sequestrado} toneladas de CO2</strong> na natureza através de sistemas sustentáveis e otimiza o uso da terra. 🌳</p>
    `;
}
