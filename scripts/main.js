// Heart Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Countdown Timer Logic
const targetDate = new Date('February 14, 2026 00:00:00').getTime();
const timerElement = document.getElementById('timer');
const countdownSection = document.getElementById('countdown-section');
const inviteSection = document.getElementById('invite-section');
const startBtn = document.getElementById('start-btn');

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00:00:00";
        showInviteSection();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent =
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

function showInviteSection() {
    document.body.classList.add('page-transition');
    setTimeout(() => {
        window.location.href = 'gift.html';
    }, 500);
}

startBtn.addEventListener('click', showInviteSection);

// "NO" Button Behavior
const noBtn = document.getElementById('no-btn');
const teaseText = document.getElementById('tease-text');
const messages = [
    "Are you sure? 🧐",
    "Really sure? 🤨",
    "Thiripi yosichu paru maa 😧",
    "En chellam la pleaseeee 🥺",
    "Please thangammmeyyyy 🥺"
];

let messageIndex = 0;

function moveButton() {
    // Switch to fixed positioning to ensure it stays in viewport accurately
    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
    }

    // Change text inside the button first so we can calculate the new width correctly
    if (messageIndex < messages.length) {
        noBtn.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        // Stay on the last message if they keep trying
        noBtn.textContent = messages[messages.length - 1];
    }

    const padding = 20;
    // Calculate available space based on the current button size after text change
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Ensure coordinates are at least 'padding' distance from the edges
    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Clear the teaseText as requested (text is now in the button)
    if (teaseText) teaseText.textContent = "";
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

// "YES" Button Behavior
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', () => {
    inviteSection.innerHTML = `
        <h1 class="romantic-font">I am also madly in love with you, my angel 💖</h1>
        <p class="romantic-font">Knew you will say yes 😁😁</p>
        <div style="margin-top: 2rem;">
            <h2 class="romantic-font">Maa… shall we celebrate our first Valentine’s Day?</h2>
            <button class="btn btn-primary next-page-btn" id="yes-roses">YES 🌹</button>
            <button class="btn btn-primary next-page-btn" id="infinity-yes">INFINITY YES ♾️❤️</button>
        </div>
    `;

    document.querySelectorAll('.next-page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.add('page-transition');
            setTimeout(() => {
                window.location.href = 'quiz.html';
            }, 500);
        });
    });
});
