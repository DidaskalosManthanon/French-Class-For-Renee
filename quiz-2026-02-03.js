const questions = [
    { q: "Comment dit-on 'An item' ?", a: ["Un article", "Une mode", "Un veau"], correct: 0 },
    { q: "Que signifie 'Divertissant' ?", a: ["Boring", "Entertaining", "Rare"], correct: 1 },
    { q: "Traduisez : 'J'ai cuisiné'", a: ["I ate", "I cooked", "I whistled"], correct: 1 },
    { q: "Quelle est la différence entre façon et mode ?", a: ["C'est pareil", "Mode est lié au style, Façon au geste/manière", "Façon est pour la nourriture"], correct: 1 }
];

let currentIdx = 0;

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById("question").innerText = q.q;
    const optContainer = document.getElementById("options");
    optContainer.innerHTML = "";
    document.getElementById("feedback").innerText = "";

    q.a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "btn-date"; // On réutilise ton style de bouton
        btn.onclick = () => checkAnswer(i);
        optContainer.appendChild(btn);
    });
}

function checkAnswer(i) {
    const feedback = document.getElementById("feedback");
    if (i === questions[currentIdx].correct) {
        feedback.innerText = "✅ Bravo !";
        feedback.style.color = "green";
        setTimeout(() => {
            currentIdx++;
            if (currentIdx < questions.length) loadQuestion();
            else document.getElementById("quiz-container").innerHTML = "<h2>QCM terminé ! 🎉</h2>";
        }, 1500);
    } else {
        feedback.innerText = "❌ Réessaie !";
        feedback.style.color = "red";
    }
}

window.Telegram.WebApp.ready();
loadQuestion();