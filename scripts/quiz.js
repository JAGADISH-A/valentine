// Heart Animation (common)
function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// Bear GIF Interactions
const bearGif = document.getElementById('bear-gif');
const input = document.getElementById('answer-input');

// GIF States
const Gifs = {
    idle: 'assets/bear.gif',
    shy: 'assets/bear2.gif',
    peek: 'assets/bear4.gif',
    happy: 'assets/bear5.gif',
    angry: 'assets/angry.gif',
    angry2: 'assets/angry2.webp'
};

input.addEventListener('focus', () => {
    bearGif.src = Gifs.shy;
});

input.addEventListener('blur', () => {
    if (bearGif.src.indexOf(Gifs.happy) === -1) {
        bearGif.src = Gifs.idle;
    }
});

input.addEventListener('input', () => {
    if (bearGif.src.indexOf(Gifs.peek) === -1 && bearGif.src.indexOf(Gifs.happy) === -1) {
        bearGif.src = Gifs.peek;
    }
});

// Quiz Logic
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback-text');
const hintBR = document.getElementById('hint-br');
const hintBL = document.getElementById('hint-bl');
const hintTR = document.getElementById('hint-tr');
const quizCard = document.getElementById('quiz-card');

let wrongAttempts = 0;

checkBtn.addEventListener('click', () => {
    const val = input.value.trim().toLowerCase();

    if (val === 'sarulatha') {
        feedback.textContent = "You are right chellamm ❤️";
        successTransition();
    } else {
        wrongAttempts++;
        // Toggle between angry1 and angry2 for variety
        bearGif.src = (wrongAttempts % 2 === 0) ? Gifs.angry2 : Gifs.angry;

        if (wrongAttempts === 1) {
            feedback.textContent = "Hmm… that doesn’t feel right 🤭 Try again!";
        } else if (wrongAttempts >= 2) {
            feedback.innerHTML = `Not here yet 😜<br>Try checking the bottom right corner 👀👉`;
            hintBR.classList.remove('hidden');
        }
    }
});

function successTransition() {
    // Celebration GIF
    bearGif.src = Gifs.happy;

    setTimeout(() => {
        // Hide Quiz Card
        quizCard.classList.add('fade-out');

        setTimeout(() => {
            quizCard.style.display = 'none';
            startRoseBlossom();
        }, 1500);
    }, 2000);
}

function startRoseBlossom() {
    const roseContainer = document.getElementById('rose-container');
    const linesContainer = document.getElementById('romantic-lines');
    const lines = document.querySelectorAll('.romantic-line');

    roseContainer.style.display = 'block';
    linesContainer.style.display = 'block';
    setTimeout(() => linesContainer.style.opacity = '1', 50);

    // Spawn all roses at once
    for (let i = 0; i < 40; i++) {
        createRose();
    }

    // Show Romantic Lines Sequentially
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
        }, index * 2500);
    });

    // Final Redirect
    setTimeout(() => {
        document.body.classList.add('page-transition');
        setTimeout(() => {
            window.location.href = 'journey.html';
        }, 800);
    }, (lines.length * 2500) + 2000);
}

function createRose() {
    const container = document.getElementById('rose-container');
    const rose = document.createElement('img');
    rose.className = 'rose-img';
    rose.src = 'assets/rose.png';
    rose.alt = 'Rose';

    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.top = Math.random() * 100 + 'vh';
    rose.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(rose);
    setTimeout(() => rose.remove(), 4000);
}

// Hint Sequence Logic
hintBR.addEventListener('click', () => {
    feedback.innerHTML = `Not here yet 😜<br>Try checking the bottom left corner 👇`;
    hintBL.classList.remove('hidden');
    hintBR.style.transform = "scale(1.2)";
});

hintBL.addEventListener('click', () => {
    feedback.innerHTML = `Almost there 😏<br>Now look at the TOP RIGHT corner ⬆️➡️`;
    hintTR.style.opacity = '0.1';
    hintTR.style.pointerEvents = 'auto';
    hintBL.style.transform = "scale(1.2)";
});

hintTR.addEventListener('click', () => {
    feedback.innerHTML = "Yes it's you my dear ❤️";
    input.value = "sarulatha";
    hintTR.style.transform = "scale(1.5)";
    hintTR.style.opacity = "1";

    setTimeout(() => {
        successTransition();
    }, 1000);
});
