// Heart Animation (common)
function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// Floating Nicknames Logic
const nicknames = ["muyalkutty 🐰", "konda vecha madam 👑", "my cutie pie 🥧", "I am youholic 💘"];
function showNickname() {
    const container = document.getElementById('nicknames-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'floating-nickname';
    el.textContent = nicknames[Math.floor(Math.random() * nicknames.length)];
    el.style.left = Math.random() * 80 + 10 + '%';
    el.style.top = Math.random() * 80 + 10 + '%';
    el.style.animation = 'fadePulse 4s forwards';
    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}
setInterval(showNickname, 5000);

// Gift Data
const gifts = {
    1: {
        title: "GIFT 1 – PHOTO FRAME",
        img: "🖼️",
        text: "Addiction was not my type until I found the beauty of your eyes and the melody of your voice 💕",
        type: "photo"
    },
    2: {
        title: "GIFT 2 – OUR MOMENTS",
        img: "📸",
        text: "You are a poetry written by God himself, and I am the reader who falls for every lineee ❤️",
        type: "moments"
    },
    3: {
        title: "GIFT 3 – HER BEAUTY CHAPTER",
        img: "✨",
        text: "If beauty had a language, it would sound exactly like your smile 🥺❤️",
        type: "beauty"
    },
    4: {
        title: "GIFT 4 – UNSAID FEELINGS",
        img: "🌙",
        text: "I may not be perfect… But every version of me… Chooses you.",
        type: "feelings"
    },
    5: {
        title: "GIFT 5 – PROMISE LETTER (FINAL)",
        img: "💌",
        text: "This is not just a gift… This is a promise.<br><br>To choose you in chaos, in silence, and in forever.<br><br><b>Happy Valentine’s Day, my everything 💖</b>",
        type: "promise"
    }
};

let unlockedStep = 1;

function openGift(id) {
    if (id > unlockedStep) {
        showLockedFeedback();
        return;
    }

    const gift = gifts[id];
    const modal = document.getElementById('gift-modal');
    const content = document.getElementById('gift-detail-content');

    let html = `<h2 class="romantic-font" style="font-size: 2rem; color: var(--primary-pink); margin-bottom: 20px;">${gift.title}</h2>`;

    if (gift.type === 'feelings') {
        html += `<div style="background: #1a1a1a; color: #fff; padding: 30px; border-radius: 20px; font-family: 'Courier New', monospace; text-align: left;">
                    <p id="typed-feelings"></p>
                 </div>`;
    } else {
        html += `<div class="gift-img-placeholder">${gift.img} [Photo Placeholder]</div>`;
        html += `<p class="romantic-font" style="font-size: 1.5rem; line-height: 1.6;">${gift.text}</p>`;
    }

    content.innerHTML = html;
    modal.classList.add('active');

    if (gift.type === 'feelings') {
        typeWriter(gift.text, "typed-feelings");
    }

    // Unlock next gift if this was the latest one
    if (id === unlockedStep && id < 5) {
        unlockedStep++;
    }
}

function showLockedFeedback() {
    const modal = document.getElementById('gift-modal');
    const content = document.getElementById('gift-detail-content');

    content.innerHTML = `
        <img src="assets/angry.gif" style="width: 200px; margin-bottom: 20px;" alt="Angry Bear">
        <h2 class="romantic-font" style="color: var(--romantic-red);">Wait! Not so fast! 😤</h2>
        <p class="romantic-font" style="font-size: 1.3rem;">You have to open them in order, silly! 🤭❤️</p>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('gift-modal').classList.remove('active');
}

function typeWriter(text, elementId) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}
