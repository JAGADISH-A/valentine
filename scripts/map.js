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
const nicknames = ["muyalkutty 🐰", "konda vecha madam 👑", "my cutie pie 🥧", "I am youholic 💘", "en thangakutty💕", "en chellameyy 😘", "manguni amaicahreyy 😂"];
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

// Timeline Data
const milestones = [
    {
        id: 1,
        title: "How We Met 💫",
        date: "12 Oct 2022",
        icon: "✨",
        photo: "assets/2.jpg",
        location: "Virtual Spark",
        description: "The moment our worlds collided. It started with a simple hello and turned into our beautiful story."
    },
    {
        id: 2,
        title: "First Date 🌹",
        date: "24 Nov 2022",
        icon: "❤️",
        photo: "assets/3.jpg",
        location: "Dream Cafe",
        description: "I was so nervous, but the moment I saw your smile, everything felt right. The coffee was cold, but our conversation was magical."
    },
    {
        id: 3,
        title: "Became Official 💕",
        date: "01 Jan 2023",
        icon: "💍",
        photo: "assets/ours.png",
        location: "Under the Stars",
        description: "Starting the new year by promising to be yours. Best decision of my life."
    },
    {
        id: 4,
        title: "First Trip Together ✈️",
        date: "15 May 2023",
        icon: "🏔️",
        photo: "assets/latha1.png",
        location: "The Mountains",
        description: "Exploring new horizons with you. Every view was more beautiful because you were by my side."
    },
    {
        id: 5,
        title: "First 'I Love You' 💖",
        date: "14 Feb 2024",
        icon: "💌",
        photo: "assets/latha3.gif",
        location: "Home Sweet Home",
        description: "Three words, eight letters, and a lifetime of meaning. I finally said what my heart had known for so long."
    },
    {
        id: 6,
        title: "Present Day & Beyond 🌟",
        date: "Ongoing journey",
        icon: "♾️",
        photo: "assets/rose.png",
        location: "With You",
        description: "Our story is my favorite, and I can't wait to see what the future holds for us. To be continued..."
    }
];

// Gift Data
const gifts = {
    1: {
        title: "GIFT 1 – PHOTO FRAME",
        img: "assets/mylove2.jpeg",
        text: "Addiction was not my type until I found the beauty of your eyes and the melody of your voice 💕",
        type: "photo"
    },
    2: {
        title: "GIFT 2 – OUR MOMENTS",
        images: [
            "assets/our date.gif",
            "assets/2.jpg",
            "assets/3.jpg",
            "assets/latha1.png",
            "assets/ours.png",
            "assets/latha3.gif"
        ],
        text: "You are a poetry written by God himself, and I am the reader who falls for every lineee ❤️",
        type: "gallery"
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

    if (id === 3) {
        openTimeline();
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
    } else if (gift.type === 'gallery') {
        html += `<div class="gallery-container">
                    <div class="gallery-main">
                        <img id="gallery-main-img" src="${gift.images[0]}" alt="Gallery">
                    </div>
                    <div class="gallery-controls">
                        <button class="gallery-btn" onclick="prevGalleryImage()">← Previous</button>
                        <button class="gallery-btn" onclick="nextGalleryImage()">Next →</button>
                    </div>
                    <div class="gallery-thumbs" id="gallery-thumbs"></div>
                    <div class="gallery-counter">
                        <span id="gallery-counter">1</span> / <span id="gallery-total">${gift.images.length}</span>
                    </div>
                </div>
                <p class="romantic-font" style="font-size: 1.3rem; line-height: 1.6; margin-top: 20px;">${gift.text}</p>`;
    } else if (gift.type === 'photo') {
        html += `<div class="gift-img-placeholder"><img src="${gift.img}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px;" alt="Photo"></div>`;
        html += `<p class="romantic-font" style="font-size: 1.5rem; line-height: 1.6;">${gift.text}</p>`;
    } else {
        if (gift.img.includes('<img')) {
            html += `<div class="gift-img-placeholder">${gift.img}</div>`;
        } else {
            html += `<div class="gift-img-placeholder">${gift.img} [Photo Placeholder]</div>`;
        }
        html += `<p class="romantic-font" style="font-size: 1.5rem; line-height: 1.6;">${gift.text}</p>`;
        if (id === 5) {
            html += `<button class="gallery-btn" style="margin-top: 30px; font-size: 1.2rem; padding: 15px 30px; background: linear-gradient(45deg, #ff4d6d, #c9184a);" onclick="startHeartSurprise()">Unlock Final Infinite Surprise ✨❤️</button>`;
        }
    }

    content.innerHTML = html;
    modal.classList.add('active');

    // Initialize gallery if needed
    if (gift.type === 'gallery') {
        window.currentGalleryId = id;
        window.currentGalleryIndex = 0;
        initializeGallery(id);
    }

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
        <h2 class="romantic-font" style="color: var(--romantic-red);">Wait! avlo avasaram vendam chellamm ! 😤</h2>
        <p class="romantic-font" style="font-size: 1.3rem;">porumaiya order la open pannunga ma  🤭❤️</p>
    `;
    modal.classList.add('active');
}

function initializeGallery(giftId) {
    const gift = gifts[giftId];
    const thumbsContainer = document.getElementById('gallery-thumbs');

    thumbsContainer.innerHTML = '';
    gift.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = 'thumb-img' + (index === 0 ? ' active' : '');
        thumb.onclick = () => selectGalleryImage(index);
        thumbsContainer.appendChild(thumb);
    });
}

function selectGalleryImage(index) {
    const giftId = window.currentGalleryId;
    const gift = gifts[giftId];
    const mainImg = document.getElementById('gallery-main-img');
    const counter = document.getElementById('gallery-counter');

    mainImg.src = gift.images[index];
    window.currentGalleryIndex = index;

    // Update counter
    counter.textContent = index + 1;

    // Update thumbnails
    document.querySelectorAll('.thumb-img').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextGalleryImage() {
    const giftId = window.currentGalleryId;
    const gift = gifts[giftId];
    const nextIndex = (window.currentGalleryIndex + 1) % gift.images.length;
    selectGalleryImage(nextIndex);
}

function prevGalleryImage() {
    const giftId = window.currentGalleryId;
    const gift = gifts[giftId];
    const prevIndex = (window.currentGalleryIndex - 1 + gift.images.length) % gift.images.length;
    selectGalleryImage(prevIndex);
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
            const randomDelay = Math.random() * 50 + 30; // Random delay between 30ms and 80ms
            setTimeout(type, randomDelay);
        }
    }
    type();
}

function startHeartSurprise() {
    closeModal();
    const ui = document.getElementById('ui');
    const container = document.getElementById('heart-ui-container');
    container.innerHTML = ''; // Clear previous if any

    ui.style.display = 'flex';
    setTimeout(() => ui.style.opacity = '1', 50);

    // Start animation
    window.activeHeart = new LoveHeart('heart-ui-container');

    // Global listener to close
    setTimeout(() => {
        window.onclick = closeHeartSurprise;
    }, 1000);
}

function closeHeartSurprise() {
    const ui = document.getElementById('ui');
    ui.style.opacity = '0';
    setTimeout(() => {
        ui.style.display = 'none';
        document.getElementById('heart-ui-container').innerHTML = '';
        window.onclick = null;
    }, 1000);
}

// Timeline Functions
function openTimeline() {
    renderTimeline();
    const overlay = document.getElementById('timeline-overlay');
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.classList.add('active');
        animateMilestones();
    }, 10);

    // Unlock next step
    if (unlockedStep === 3) unlockedStep = 4;
}

function closeTimeline() {
    const overlay = document.getElementById('timeline-overlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const counter = document.getElementById('memory-counter');
    container.innerHTML = '';

    milestones.forEach((m, index) => {
        const milestoneEl = document.createElement('div');
        milestoneEl.className = `milestone ${index % 2 === 0 ? 'left' : 'right'}`;
        milestoneEl.innerHTML = `
            <div class="date-badge">${m.date}</div>
            <div class="milestone-content" onclick="toggleMilestone(this)">
                <div class="milestone-icon">${m.icon}</div>
                <div class="milestone-photo-frame">
                    <img src="${m.photo}" alt="${m.title}">
                </div>
                <h3 class="milestone-title">${m.title}</h3>
                <div class="memory-expand">
                    <p class="memory-description">${m.description}</p>
                    <div class="location-tag">📍 ${m.location}</div>
                </div>
            </div>
        `;
        container.appendChild(milestoneEl);
    });

    counter.textContent = `${milestones.length} Beautiful Moments Together`;
}

function toggleMilestone(element) {
    element.classList.toggle('expanded');
}

function animateMilestones() {
    const items = document.querySelectorAll('.milestone');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
}

function addNewMilestone() {
    const title = prompt("Enter memory title:");
    if (!title) return;

    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const description = prompt("Enter a short description:");
    const location = prompt("Enter location:");

    const newMilestone = {
        id: milestones.length + 1,
        title: title + " ✨",
        date: date,
        icon: "🌟",
        photo: "assets/rose.png", // Default placeholder
        location: location || "Someplace Special",
        description: description || "Another beautiful chapter in our story..."
    };

    milestones.push(newMilestone);
    renderTimeline();

    // Scroll to new milestone
    setTimeout(() => {
        const items = document.querySelectorAll('.milestone');
        items[items.length - 1].scrollIntoView({ behavior: 'smooth' });
    }, 100);
}
