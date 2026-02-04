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

// Teddy Interactions
const teddy = document.getElementById('teddy');
const input = document.getElementById('answer-input');
const blushL = document.getElementById('blush-l');
const blushR = document.getElementById('blush-r');
const mouth = document.getElementById('mouth');

input.addEventListener('focus', () => {
    // Blush and hide slightly
    blushL.style.opacity = '0.6';
    blushR.style.opacity = '0.6';
    teddy.style.transform = 'translateY(40px) scale(0.9)';
});

input.addEventListener('blur', () => {
    blushL.style.opacity = '0';
    blushR.style.opacity = '0';
    teddy.style.transform = 'translateY(0) scale(1)';
});

input.addEventListener('input', () => {
    // Peek back and smile shyly
    teddy.style.transform = 'translateY(10px) scale(1.05)';
    mouth.setAttribute('d', 'M 40 62 Q 50 70 60 62'); // Wider smile
});

// Quiz Logic
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback-text');
const hintBR = document.getElementById('hint-br');
const hintBL = document.getElementById('hint-bl');
const hintTR = document.getElementById('hint-tr');

let wrongAttempts = 0;

checkBtn.addEventListener('click', () => {
    const val = input.value.trim().toLowerCase();

    if (val === 'sarulatha') {
        feedback.textContent = "You are right chellamm ❤️";
        successTransition();
    } else if (val === 'displayed') {
        feedback.textContent = "Of course it’s you… beauty like this can’t be hidden 💕";
        successTransition();
    } else {
        wrongAttempts++;
        if (wrongAttempts === 1) {
            feedback.textContent = "Hmm… that doesn’t feel right 🤭 Try again!";
            // Teddy confused
            mouth.setAttribute('d', 'M 45 65 Q 50 62 55 65');
        } else if (wrongAttempts >= 2) {
            feedback.innerHTML = `Pssst… if you need help,<br>look at the bottom right corner 👀👉`;
            hintBR.classList.remove('hidden');
        }
    }
});

function successTransition() {
    // Teddy jumps and waves
    teddy.style.animation = 'jump 0.5s infinite';
    setInterval(createHeart, 100); // More hearts

    setTimeout(() => {
        document.body.classList.add('page-transition');
        setTimeout(() => {
            window.location.href = 'journey.html';
        }, 800);
    }, 2500);
}

// Hint Sequence Logic
hintBR.addEventListener('click', () => {
    feedback.innerHTML = `Oops! Wrong side 🙈<br>Now check the bottom left corner 👇`;
    hintBL.classList.remove('hidden');
});

hintBL.addEventListener('click', () => {
    feedback.innerHTML = `Okay okay… last one 🤭<br>Look at the TOP RIGHT corner ⬆️➡️`;
    hintTR.style.opacity = '0.2'; // Start subtle
    hintTR.style.pointerEvents = 'auto'; // Make it clickable or just visible

    // Smoothly fade in more on interaction or after delay
    setTimeout(() => {
        hintTR.style.transition = 'opacity 2s';
        hintTR.style.opacity = '0.4';
    }, 100);
});

// Add jump animation to CSS via JS for Teddy
const style = document.createElement('style');
style.textContent = `
    @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
    }
`;
document.head.appendChild(style);
