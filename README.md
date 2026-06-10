# 🌾 Agro Forte, Futuro Sustentável - Portal Informativo e Simulador Interativo

Projeto desenvolvido exclusivamente para a **Subcategoria 3 (Programação Front-End: HTML, CSS e JavaScript)** do **Concurso Agrinho 2026**, destinado aos estudantes do Ensino Médio da Rede Estadual de Ensino do Paraná.

O objetivo desta aplicação web é conscientizar sobre o equilíbrio entre a produção agrícola e a preservação do meio ambiente, trazendo dados relevantes do agronegócio sustentável paranaense combinados a um ecossistema interativo de simulação gamificada.

## 🚀 Tecnologias Utilizadas

Para atender estritamente aos critérios do **Nível 4** de avaliação do regulamento, o projeto foi desenvolvido usando **código nativo puro**, sem adição de qualquer biblioteca externa ou framework (como Bootstrap, React ou Tailwind):

*   **HTML5 Semântico**: Uso rigoroso de tags estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) e elementos nativos de formulários e interação.
*   **CSS3 Customizado & Responsivo**: Estilização modular feita de forma externa (proibindo códigos inline ou internos). Implementação de propriedades avançadas de layout como Flexbox e variáveis nativas do CSS (`:root`), além de **CSS Media Queries** garantindo adaptação dinâmica para smartphones, tablets e desktops.
*   **JavaScript (ES6+) Assíncrono e Orientado a Eventos**: Lógica estruturada para manipulação do DOM de forma limpa, escuta de eventos nativos de clique e envio, e controle estrito das variáveis de estado do simulador de ecossistema.

## 🛠️ Funcionalidades e Recursos Implementados

1. **Sistema Accordion (Caixas Expansíveis)**: As seções de "Novidades" e "Dicas" contêm títulos interativos que expandem e recolhem as explicações detalhadas por meio do clique do usuário.
2. **Identificação e Saudação Dinâmica**: Captura de dados textuais através de formulário integrado com injeção de saudações personalizadas no DOM utilizando variáveis de controle JavaScript.
3. **Mecanismo Adaptativo (Modo Escuro)**: Inclusão de recurso extra de acessibilidade para alternar o tema do portal de maneira instantânea clicando no botão do cabeçalho.
4. **Simulador de Ecossistema Ponderado**: Jogo interativo focado no tema central do concurso. O usuário manipula botões que influenciam nas barras de progresso de Produção Agrícola e Preservação Ambiental. O objetivo é manter o sistema equilibrado (distância de margem controlada por script), acumulando bônus de pontos enquanto evita o colapso estrutural (valores em 0% ou 100%).

## 📁 Estrutura do Repositório

O repositório é mantido "limpo", contendo apenas os arquivos necessários para execução integral da aplicação na raiz:

```text
├── index.html   # Estrutura de conteúdo e marcação semântica do portal
├── style.css    # Arquivo contendo as definições de design, temas e responsividade
├── script.js    # Motor lógico da aplicação, interações e simulador do jogo
└── README.md    # Documentação técnica de diretrizes e especificações do projeto
```

## 📋 Critérios de Validação Atendidos

*   Nenhuma estilização inline ou interna presente nos arquivos HTML.
*   Código fonte legível, identado e com comentários técnicos breves explicando os propósitos das funções JavaScript.
*   Publicado e funcional via GitHub Pages, configurado como público e listando a tag oficial `agrinho` nos tópicos (*Topics*) do repositório.
