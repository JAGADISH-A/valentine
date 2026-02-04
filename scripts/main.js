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
let timeLeft = 3; // Setting to 3 seconds for demo/testing. Update to set date if needed.
const timerElement = document.getElementById('timer');
const countdownSection = document.getElementById('countdown-section');
const inviteSection = document.getElementById('invite-section');

const countdownInterval = setInterval(() => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownSection.classList.add('hidden');
        inviteSection.classList.remove('hidden');
    }
    timeLeft--;
}, 1000);

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
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    if (messageIndex < messages.length) {
        teaseText.textContent = messages[messageIndex];
        noBtn.textContent = `NO 😈 (${messageIndex + 1})`;
        messageIndex++;
    } else {
        // Loop back or stay on last message
        teaseText.textContent = messages[messages.length - 1];
    }
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
            <button class="btn btn-primary next-page-btn">YES 🌹</button>
            <button class="btn btn-primary next-page-btn">INFINITY YES ♾️❤️</button>
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
