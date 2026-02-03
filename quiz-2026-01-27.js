const questions = [
    { 
        q: "En France, quand les parents en ont marre des caprices des enfants, ils disent : ça suffit ! Comment le traduire ?", 
        a: ["That's correct!", "That's not yet!", "That's enough!"], 
        correct: 2
    },
    { 
        q: "En France, quand il y a une grève, les travailleurs vont dans la rue pour ...", 
        a: ["Draguer", "Manifester", "Faire le marché"], 
        correct: 1 
    },
    { 
        q: 'Traduisez : "Au marché aux puces, il y a parfois de bonnes affaire à saisir"', 
        a: [
            "At the flea market, there are sometimes good deals to be had.", 
            "At the flea market, there are often bad deals to be had.", 
            "At the supermarket, there are no good deals to be had."
        ], 
        correct: 0 
    },
    { 
        q: `Que signifie l'expression "vendre la mèche" ?`, 
        a: [
            "Mentir", 
            "Dévoiler un secret", 
            "Cacher une information"
        ], 
        correct: 1 
    },
    { 
        q: "Dans certains quartiers chaud de la ville il ne vaut mieux pas baisser la vitre quand on est au feu rouge en voiture. Comment traduire 'vitre' ?", 
        a: [
            "window", 
            "glass", 
            "frame"
        ], 
        correct: 1 
    },
    { 
        q: `Que signifie la chanson : "J'ai bien mangé, j'ai bien bu, j'ai la peau du ventre bien tendue" ?`,
        a: [
            "I'm full", 
            "I'm starving", 
            "I'm hungry"
        ], 
        correct: 0 
    },
    { 
        q: `Quelle expression est synonyme de "je suis fâché(e)" ?`, 
        a: [
            "Je suis content(e)", 
            "Je suis triste", 
            "Je suis en colère"
        ], 
        correct: 2 
    },
    { 
        q: `Comment traduire "ludique" ?`, 
        a: [
            "playful", 
            "boring", 
            "dull"
        ], 
        correct: 0 
    },
    { 
        q: `Quel est l'enfant de la vache ?`, 
        a: [
            "l'agneau", 
            "le poulet", 
            "le veau"
        ], 
        correct: 2 
    },
    { 
        q: `Comment traduire : "She plays with a strand of hair to seduce him." ?`, 
        a: [
            "Elle touche ses cheveux pour le séduire.", 
            "Elle joue avec une mèche de cheveux pour le séduire.", 
            "Elle joue avec ses cheveux pour le séduire."
        ], 
        correct: 1 
    },
    { 
        q: `Comment traduire : "Le procureur s'est saisi de l'affaire." ?`, 
        a: [
            "The prosecutor has taken the deal.", 
            "The prosecutor has made the deal.", 
            "The prosecutor has taken up the case."
        ], 
        correct: 2 
    },
    { 
        q: `Comment traduire : "He canceled the meeting" ?`, 
        a: [
            "Il a annulé la réunion", 
            "Il est allé à la réunion", 
            "Il a reporté la réunion"
        ], 
        correct: 0 
    },
    { 
        q: `Comment traduire : "Allume la mèche de la bougie" ?`, 
        a: [
            "Put the lighter up", 
            "Light the candle wick", 
            "Turn on the light"
        ], 
        correct: 1 
    },
    { 
        q: `Comment traduire : "We beat the visiting team three nil" ?`, 
        a: [
            "On s'est fait battre par les visiteurs trois à zéro", 
            "On a fait match nul avec les visiteurs", 
            "On a battu les visiteurs trois à zéro"
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