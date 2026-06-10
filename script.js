    // ==========================================
    // 5. SISTEMA DE CAIXAS EXPANSÍVEIS (ACCORDION) + LINKS ANCORA
    // ==========================================
    const titulosAccordion = document.querySelectorAll(".accordion-header");
    const linksMenu = document.querySelectorAll(".main-nav a");

    // Função padrão para abrir/fechar clicando direto no título
    titulosAccordion.forEach(function (titulo) {
        titulo.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    // Função nova: Abre as caixas automaticamente ao clicar nos links do Menu Superior
    linksMenu.forEach(function (link) {
        link.addEventListener("click", function (evento) {
            // Pega o id da seção destino (ex: #noticias ou #dicas)
            const destinoId = this.getAttribute("href"); 
            const secaoDestino = document.querySelector(destinoId);

            if (secaoDestino) {
                // Busca todas as caixas de explicação que estão especificamente dentro dessa seção
                const accordionsDaSecao = secaoDestino.querySelectorAll(".accordion-header");
                
                // Força a abertura de todas as caixas daquela seção correspondente
                accordionsDaSecao.forEach(function (accordion) {
                    accordion.classList.add("active");
                });
            }
        });
    });
