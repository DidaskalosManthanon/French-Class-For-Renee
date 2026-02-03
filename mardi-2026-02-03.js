const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function toggle(card) {
    const english = card.querySelector('.english');
    english.style.display = (english.style.display === 'block') ? 'none' : 'block';
}