const questions = [
    { 
        q: "Comment dit-on 'An air plane' ?", 
        a: ["Un avion", "Un bateau", "Une voiture"], 
        correct: 0 
    },
    { 
        q: "Que signifie 'guichet' ?", 
        a: ["Office", "Counter", "Entrance"], 
        correct: 1 
    },
    { 
        q: "Traduisez : 'La dernière fois que j'ai visité la France j'ai loué un appartement'", 
        a: [
            "Last time I visited France I have borrowed an apartment", 
            "During my last visit in France I bought an apartment", 
            "Last time I visited France I rented an apartement"
        ], 
        correct: 2 
    },
    { 
        q: "Quelle est la différence entre clair et obscur ?", 
        a: [
            "C'est pareil", 
            "Clair c'est lorsqu'il y a de la lumière, obscur c'est le contraire", 
            "Obscur c'est pour la force"
        ], 
        correct: 1 
    },
    { 
        q: 'Comment traduire "The manager took my arm"?', 
        a: [
            "Le manager m'a donné son bras", 
            "Le manager m'a pris le bras", 
            "Le manager m'a tiré le bras"
        ], 
        correct: 1 
    },
    { 
        q: 'Comment traduire "Il devait faire quelque chose" ?', 
        a: [
            "He had to do something", 
            "He owed something", 
            "He did something"
        ], 
        correct: 0 
    },
    { 
        q: 'Comment traduire "Learning French goes far beyond memorizing words" ?', 
        a: [
            "Etudier le français c'est aller loin dans la mémorisation des mots", 
            "Apprendre le français va loin dans la mémorisation des mots", 
            "Apprendre le français va bien au-delà de la mémorisation de mots"
        ], 
        correct: 2 
    }
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