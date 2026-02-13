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

// Popup Elements
const dramaticPopup = document.getElementById('dramatic-popup');
const popupMessage = document.getElementById('popup-message');
const closePopupBtn = document.getElementById('close-popup'); // This is now "Try Again"
const popupGif = document.getElementById('popup-gif');
const hintConfirmBtns = document.getElementById('hint-confirm-btns');
const hintYesBtn = document.getElementById('hint-yes');
const hintNoBtn = document.getElementById('hint-no');

let wrongAttempts = 0;

checkBtn.addEventListener('click', () => {
    const val = input.value.trim().toLowerCase();

    if (val === 'sarulatha') {
        feedback.textContent = "You are right chellamm ❤️";
        successTransition();
    } else {
        wrongAttempts++;
        bearGif.src = (wrongAttempts % 2 === 0) ? Gifs.angry2 : Gifs.angry;
        handleWrongAnswer();
    }
});

function handleWrongAnswer() {
    const motivationalMessages = [
        "Maa... try again! You're so close! ❤️",
        "Don't give up, my love! You can do it! ✨",
        "It's okay, cutie! Try one more time? 🥺",
        "Almost there! Your heart knows the answer! 💖"
    ];

    const randomMsg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    popupMessage.textContent = randomMsg;
    popupGif.src = (wrongAttempts % 2 === 0) ? Gifs.angry2 : Gifs.angry;

    // Show dynamic buttons based on attempts
    if (wrongAttempts >= 3) {
        popupMessage.textContent = "Maa... do you want a hint? 🥺";
        closePopupBtn.classList.add('hidden');
        hintConfirmBtns.classList.remove('hidden');
    } else {
        closePopupBtn.classList.remove('hidden');
        hintConfirmBtns.classList.add('hidden');
    }

    dramaticPopup.classList.remove('hidden');
}

closePopupBtn.addEventListener('click', () => {
    dramaticPopup.classList.add('hidden');
    // Always reset button text to "Try Again ❤️" after closing a teaser popup
    setTimeout(() => {
        closePopupBtn.textContent = "Try Again ❤️";
    }, 400);
});

hintNoBtn.addEventListener('click', () => {
    dramaticPopup.classList.add('hidden');
    feedback.textContent = "I know you can do it without hints! 💪";
});

hintYesBtn.addEventListener('click', () => {
    dramaticPopup.classList.add('hidden');
    feedback.textContent = "Check the corners, azhagi! 😉";
    hintBR.classList.remove('hidden');
});

function showDramaticPopup(isAngry = true, customMsg = "") {
    if (isAngry) {
        popupGif.src = (Math.random() > 0.5) ? Gifs.angry : Gifs.angry2;
    } else {
        popupGif.src = Gifs.happy;
    }

    if (customMsg) popupMessage.textContent = customMsg;

    // Default to "Try Again" button for simple popups
    closePopupBtn.classList.remove('hidden');
    if (!isAngry) {
        closePopupBtn.textContent = "ok 🥺"; // "Yes/Okay" in Tamil for teaser popups
    } else {
        closePopupBtn.textContent = "Try Again ❤️";
    }

    hintConfirmBtns.classList.add('hidden');
    dramaticPopup.classList.remove('hidden');
}

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


// Hint Sequence Logic
hintBR.addEventListener('click', () => {
    showDramaticPopup(false, "answer venumaaaa 😜 Check the left corner!");
    hintBL.classList.remove('hidden');
    hintBR.style.transform = "scale(1.2)";
});

hintBL.addEventListener('click', () => {
    showDramaticPopup(false, "inga illaiye azhagi 😏 Now look at the TOP RIGHT!");
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
