// Initialisation de la Telegram Web App pour la séance du 20/01
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function toggle(card) {
    const english = card.querySelector('.english');
    english.style.display = (english.style.display === 'block') ? 'none' : 'block';
}