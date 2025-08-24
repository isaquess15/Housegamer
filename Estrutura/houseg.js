// Inicializa a biblioteca de animação ao rolar
AOS.init();
// Inicializa a biblioteca de animação ao rolar (código que já temos)
AOS.init();

// --- NOVO CÓDIGO PARA MOSTRAR/ESCONDER JOGOS ---
const toggleButtons = document.querySelectorAll('.toggle-games-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gameList = button.nextElementSibling; // Pega a div .game-list que vem depois do botão
        gameList.classList.toggle('visible');
    });
});