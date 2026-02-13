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
        title: "Where It All Started 📚",
        date: "16 Jun 2025",
        icon: "📚✨",
        photo: "assets/fight.gif",
        location: "EEE Exam Day",
        description: "na thanks solla dhan vandhen ana enna neenga thititeengaa 🫠😓, but indha tube light ku adhu terila 😁, nanum seri okay sarulatha nu reply panni conversation ah mudichachu.adhuku aprm namba pesavey illai  , yeah for a couple of weeks , then angel stepped into my life ,  blessing me with your prescence  ,at that moment who know that  was the beginning of everything.",
        chapter: "Chapter 1: The Unexpected Beginning"
    },
    {
        id: 2,
        title: "She Came to Speak 💬",
        date: "08 Jul 2025",
        icon: "💬",
        photo: "assets/entry.gif",
        location: "NPTEL Exam Message",
        description: "MY ANGEL , YOU ! came for asking about nptel and na knjm terinjadha sonnen ,then our friendship begans , na limit ah irukanum nu plan potten , but you came into my life and broke all of my plans , mayakari ",
        chapter: "Chapter 1: The Unexpected Beginning",
        styleType: "whatsapp"
    },
    {
        id: 3,
        title: "The Friendship Blossoms 🌱",
        date: "Jul - Aug 2025",
        icon: "🌱",
        photo: "assets/frd2.webp",
        location: "Semester Holidays",
        description: "first doubt,  studies la start pannom , then rendu pera pathi , mindset pathi terinjikitom , A healthy friendship developed through semester holidays.neenga enna encourage panna vidham , care panadhu , advantage eduthu pesu da nu sonnadhu , en manasukulla oru kadhal chediya vedhachudhu , but na andha feelings ah ignore pannen 🤦‍♂️ .",
        chapter: "Chapter 2: Friendship Blooms",
        styleType: "whatsapp"
    },
    {
        id: 4,
        title: "Butterflies 🦋",
        date: "Mid-Aug 2025",
        icon: "🦋",
        photo: "assets/butterfly.gif",
        location: "Favorite Series",
        description: "one fine day , namba summa pesitu irukara apo frd nu mention pannenga , that words meant a lot to me  . then all of us are dead series suggest pannenga , i watched ,enaku ungala pathi neraiya terinjikanum nu thonuchii ...... .",
        chapter: "Chapter 2: Friendship Blooms"
    },
    {
        id: 5,
        title: "Happy Friendship Day 🎊",
        date: "04 Aug 2025",
        icon: "🎊",
        photo: "assets/frd2.webp",
        location: "Friendship Greetings",
        description: "I got butterflies when enkitta happy friendship day nu sonna apo . for the first time , na oru special person mari feel pannen ma , your charm and clinginess made me fall for you ... I didn't tell you yet.",
        chapter: "Chapter 2: Friendship Blooms"
    },
    {
        id: 6,
        title: "The Silent Week 🤐",
        date: "Late Aug 2025",
        icon: "🌙",
        photo: "assets/cry.gif",
        location: "Distance & Realization",
        description: "I didn't speak for a week, tirupi nagercoil poren nu feeling la oru orama irundhalum , unga kooda one week pesala nu vandha feeling adhuku mela adhigama irundhuchu but tirupi na vandhu pesi , adhu ungaluku pudikama enmela thapana intention vandhudumo nu na pesala , train la vara apo ungala pathi yosichen , msg pannalam nu thonuchi , but class poitu irukum , vendam nu vituten . Then suddenly, adutha naal , you  came to sit close to me in the classroom. I ignored... but my heart didn't.",
        chapter: "Chapter 2: Friendship Blooms"
    },
    {
        id: 7,
        title: "Hackathon - New Beginnings 💻",
        date: "12 Sep 2025",
        icon: "💻",
        photo: "assets/hackathon.jpeg",
        location: "Hackathon Event",
        description: "Hackathon namba rendu peraiyum tirupi sethu vechudhu . our  friendship phase took a new turn.",
        chapter: "Chapter 2: Friendship Blooms"
    },
    {
        id: 8,
        title: "The Little misunderstanding  💔",
        date: "Early Sep 2025",
        icon: "💔",
        photo: "assets/cry2.gif",
        location: "neenga oru pachai mannu ah kaya paduthuna naal 😒",
        description: "na vilayatuku 90925 nu send pannen but adhu vera meaning la poiduchi , it was a dreadful sleepless night for me  . ana adutha naal , dont feel ,smile my frd word changed my entire mood .....",
        chapter: "Chapter 2: Friendship Blooms"
    },
    {
        id: 9,
        title: "2:00 AM - you  Proposed 🌙✨",
        date: "08 Sep 2025",
        time: "02:00 AM",
        icon: "🌙💖",
        photo: "assets/bear.gif",
        location: "The Night Everything Changed",
        description: "At 2:00 AM, neenga propose pannenga ,enaku adhuku minnadi neenga hint kudutha apovey pathi purinjiduchi , ana enaku neenga sollanum nu asai patten  . I loved you  but said 'let's put a hold, after 2 years I will come for you.but ' My heart was already yours .",
        specialEffect: "stars",
        chapter: "Chapter 3: The Confession",
        isQuote: true,
        quote: "After 2 years, I'll come for you."
    },
    {
        id: 10,
        title: "8:00 PM - I Said Yes 💕",
        date: "08 Sep 2025",
        time: "08:00 PM",
        icon: "💑",
        photo: "assets/bear3.webp",
        location: "Love Accepted",
        description: "The same day, near 8:00 PM, I accepted the love, ennala en feelings ah adhuku mela adaki vekka mudila,en chellam azhara apo katti pudichi azhadha en thangam , vairam nu konjanum nu thonuchi but ..something stopped me at the moment and  We became 'us'.",
        specialEffect: "confetti",
        chapter: "Chapter 3: The Confession"
    },
    {
        id: 11,
        title: "first time kaiya pudichen ",
        date: "Sep 2025",
        icon: "🤝",
        photo: "assets/id11.gif",
        location: "Statathon Event",
        description: "first time kaiya pudichen , heart beat raised to its peak , but i didn't let it go of your hand..... .",
        chapter: "Chapter 4: Together & Beyond"
    },
    {
        id: 12,
        title: "First Monthly Anniversary 🎂",
        date: "08 Oct 2025",
        icon: "🎂",
        images: ["assets/firstanniversary.jpeg", "assets/firstanniversary2.jpeg"],
        location: "One Month of Love",
        description: "We celebrated our first love anniversary. One month of officially being together, a very special day with my pondatti .",
        specialEffect: "celebration",
        chapter: "Chapter 4: Together & Beyond"
    },
    {
        id: 13,
        title: "First Date 💑",
        date: "16 Nov 2025",
        icon: "🌹",
        photo: "assets/date1.jpeg",
        location: "Our First Official Date",
        description: "Five months after it all started at the EEE exam, we had our first date. Everything came full circle, enaku romba happy ah irundhuchu , one of the memorable moments in my entire life , you came to me at vallioor bus stand carrying heavy bags like a walking flower in the rain , but with anger 😂.",
        specialEffect: "hearts",
        chapter: "Chapter 4: Together & Beyond"
    },
    {
        id: 14,
        title: "Second Date 🌹",
        date: "02 Dec 2025",
        icon: "🌹🌹",
        photo: "assets/date2.jpeg",
        location: "Making More Memories",
        description: "Our second date. Each moment together is a treasure , adutha 1 month meet panna matom nu ekkathoda , valiuoda travel panna naal but you made my heart lighter not heavier.",
        chapter: "Chapter 4: Together & Beyond"
    },
    {
        id: 15,
        title: "Present Day 💖",
        date: "Feb 2026",
        icon: "♾️",
        photo: "assets/last.jpeg",
        location: "Our Journey Continues",
        description: "From a cold message on June 16 to a love that warms my soul. This is just the beginning...ini neraiya sandai , neriya moments , neraiya memories create pannanum , pannuvom. be my forever , be my infinite source of love ",
        chapter: "Chapter 4: Together & Beyond"
    }
];

// Helper to calculate days
function getDaysSince(dateString) {
    const start = new Date(dateString);
    const now = new Date();
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

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

    if (id === 4) {
        openUnsaidOverlay();
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
    } else if (gift.type === 'infinity') {
        html += `<div class="infinity-container" id="infinity-container">
                    <svg class="infinity-path-svg" viewBox="0 0 500 300">
                        <path d="M150,150 C150,50 50,50 50,150 C50,250 150,250 250,150 C350,50 450,50 450,150 C450,250 350,250 250,150" fill="none" stroke="#FF9B85" stroke-width="2" stroke-dasharray="5,5" />
                    </svg>
                    <!-- Photos injected by JS -->
                </div>
                <p class="romantic-font" style="font-size: 1.3rem; line-height: 1.6; margin-top: 20px;">${gift.text}</p>`;
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

    if (gift.type === 'infinity') {
        renderInfinityMoments(gift.images);
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
    const statsContainer = document.getElementById('timeline-stats');
    container.innerHTML = '';

    // Update stats
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-item"><span>Days Since We Met:</span> ${getDaysSince("2025-06-16")}</div>
            <div class="stat-item"><span>Days Since Success:</span> ${getDaysSince("2025-09-08")}</div>
            <div class="stat-item"><span>Beautiful Moments:</span> ${milestones.length}+</div>
        `;
    }

    let currentChapter = "";

    milestones.forEach((m, index) => {
        // Add chapter header if it changes
        if (m.chapter && m.chapter !== currentChapter) {
            currentChapter = m.chapter;
            const chapterEl = document.createElement('div');
            chapterEl.className = 'timeline-chapter';
            chapterEl.textContent = currentChapter;
            container.appendChild(chapterEl);
        }

        const milestoneEl = document.createElement('div');
        milestoneEl.className = `milestone ${index % 2 === 0 ? 'left' : 'right'}`;
        if (m.specialEffect) milestoneEl.classList.add(`effect-${m.specialEffect}`);
        if (m.styleType) milestoneEl.classList.add(`style-${m.styleType}`);

        milestoneEl.innerHTML = `
            <div class="date-badge">${m.date} ${m.time ? `<span class="time-stamp">${m.time}</span>` : ''}</div>
            <div class="milestone-content" onclick="toggleMilestone(this)">
                ${m.isQuote ? `<div class="quote-tag">"${m.quote}"</div>` : ''}
                <div class="milestone-icon">${m.icon}</div>
                <div class="milestone-photo-frame">
                    ${m.images ? `
                        <div class="milestone-gallery">
                            ${m.images.map(img => `<img src="${img}" class="gallery-item" alt="${m.title}">`).join('')}
                        </div>
                    ` : `<img src="${m.photo}" alt="${m.title}">`}
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

    if (counter) counter.textContent = `${milestones.length} Beautiful Moments Together`;
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




// --- Unsaid Feelings Digital Gift Logic (Redesigned for IG Stories) ---

const unsaidData = [
    {
        photo: "assets/saree.jpeg",
        audio: "assets/audio/page-1.mp3",
        message: "From the moment I saw you, I knew my heart had found its home.\n\nEvery second since then has been a blessing I never expected.",
        signature: "- Your Jagadish"
    },
    {
        photo: "assets/latha1.png",
        audio: "assets/audio/page-2.mp3",
        message: "June 16, 2025\nEEE Exam Day\n\nYou sent a cold message. I never talked to you.\n\nI had no idea this was the beginning of everything beautiful in my life.",
        signature: "- Your Love"
    },
    {
        photo: "assets/firstanniversary.jpeg",
        audio: "assets/audio/page-3.mp3",
        message: "July - August 2024\n\nYou reached out for 'doubts'. We talked about studies, then about life, family, dreams...\n\nYou said 'You're my friend'. I got butterflies 🦋",
        signature: "- Your Friend (then more)"
    },
    {
        photo: "assets/firstanniversary2.jpeg",
        audio: "assets/audio/page-4.mp3",
        message: "September 8, 2:00 AM\n\nYou proposed. In the quiet of the night, you changed everything.\n\nI loved you, but I said 'After 2 years, I'll come for you'.",
        signature: "- That Vulnerable Night"
    },
    {
        photo: "assets/mylove2.jpeg",
        audio: "assets/audio/page-5.mp3",
        message: "September 8, 2:00 PM\n\nThe same day, I couldn't wait. I accepted your love.\n\nBest decision I ever made. We became 'us' ❤️",
        signature: "- Our Official Day"
    },
    {
        photo: "assets/latha3.gif",
        audio: "assets/audio/page-6.mp3",
        message: "November 16 - First Date\nDecember 2 - Second Date\n\nEvery moment with you is a treasure I'll cherish forever.\n\nYour laugh, your smile, your soul.",
        signature: "- Forever Yours"
    },
    {
        photo: "assets/ours.png",
        audio: "assets/audio/page-7.mp3",
        message: "These words I've never said...\n\nYou are my home. You are my peace. You are my forever.\n\n[Every unsaid feeling is for you]",
        signature: "- Your Everything"
    },
    {
        photo: "assets/last.jpeg",
        audio: "assets/audio/page-8.mp3",
        message: "February 2026 and beyond\n\nThis is just the beginning. Our love story continues...\n\nThank you for being mine. I love you more than words.\n\n- my cutie pie 💕",
        signature: "- Always & Forever"
    }
];

let currentUnsaidPage = 0;
let progressInterval = null;

function openUnsaidOverlay() {
    const overlay = document.getElementById('unsaid-overlay');
    const envelope = document.getElementById('envelope-wrapper');
    const player = document.getElementById('gift-player');

    overlay.classList.add('active');
    envelope.classList.remove('open');
    envelope.style.display = 'flex';
    player.classList.remove('active');
    currentUnsaidPage = 0;

    // Stop any playing audio
    const audio = document.getElementById('unsaid-audio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function startUnsaidGift() {
    const envelope = document.getElementById('envelope-wrapper');
    const player = document.getElementById('gift-player');

    envelope.classList.add('open');

    setTimeout(() => {
        envelope.style.display = 'none';
        player.classList.add('active');
        initUnsaidGift();
    }, 1200);
}

function initUnsaidGift() {
    currentUnsaidPage = 0;
    renderUnsaidPage();
    setupKeyboardNav();
}

function renderUnsaidPage() {
    const msgContent = document.getElementById('message-content');
    const vinylContainer = document.getElementById('vinyl-container');
    const progressContainer = document.getElementById('stories-progress');
    const audio = document.getElementById('unsaid-audio');
    const data = unsaidData[currentUnsaidPage];

    // Render Story Progress Bars
    progressContainer.innerHTML = unsaidData.map((_, i) => `
        <div class="story-bar ${i < currentUnsaidPage ? 'completed' : ''}">
            <div class="story-bar-fill" id="bar-fill-${i}"></div>
        </div>
    `).join('');

    // Render Message Panel
    msgContent.innerHTML = `
        <div class="personal-message">${data.message}</div>
        <div class="message-signature">${data.signature}</div>
    `;

    // Render Vinyl Panel
    vinylContainer.innerHTML = `
        <div class="vinyl-record playing" id="vinyl-record">
            <div class="vinyl-shine"></div>
            <div class="vinyl-photo-label">
                <img src="${data.photo}" class="vinyl-photo" alt="Moment">
            </div>
        </div>
    `;

    // Set Audio
    audio.src = data.audio;
    audio.play().catch(e => {
        console.log("Autoplay blocked or audio missing:", e);
        document.getElementById('play-pause-btn').textContent = '▶';
        const vinylRec = document.getElementById('vinyl-record');
        if (vinylRec) vinylRec.classList.remove('playing');
    });

    document.getElementById('play-pause-btn').textContent = '⏸';
    const vinylRec = document.getElementById('vinyl-record');
    if (vinylRec) vinylRec.classList.add('playing');

    // Handle audio events
    audio.onended = () => {
        if (currentUnsaidPage < unsaidData.length - 1) {
            nextUnsaidPage();
        } else {
            const vinylRec = document.getElementById('vinyl-record');
            if (vinylRec) vinylRec.classList.remove('playing');
            document.getElementById('play-pause-btn').textContent = '▶';
        }
    };

    // Update Progress Bar
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (!audio.paused && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            const barFill = document.getElementById(`bar-fill-${currentUnsaidPage}`);
            if (barFill) barFill.style.width = `${progress}%`;
        }
    }, 100);
}

function toggleAudio() {
    const audio = document.getElementById('unsaid-audio');
    const vinyl = document.getElementById('vinyl-record');
    const btn = document.getElementById('play-pause-btn');

    if (audio.paused) {
        audio.play();
        if (vinyl) vinyl.classList.add('playing');
        btn.textContent = '⏸';
    } else {
        audio.pause();
        if (vinyl) vinyl.classList.remove('playing');
        btn.textContent = '▶';
    }
}

function nextUnsaidPage() {
    if (currentUnsaidPage < unsaidData.length - 1) {
        currentUnsaidPage++;
        renderUnsaidPage();
    }
}

function prevUnsaidPage() {
    if (currentUnsaidPage > 0) {
        currentUnsaidPage--;
        renderUnsaidPage();
    }
}

function closeUnsaidGift() {
    const overlay = document.getElementById('unsaid-overlay');
    const audio = document.getElementById('unsaid-audio');
    clearInterval(progressInterval);
    if (audio) audio.pause();
    overlay.classList.remove('active');
}

function setupKeyboardNav() {
    if (window.unsaidKeyboardSetup) return;
    document.addEventListener('keydown', (e) => {
        const overlay = document.getElementById('unsaid-overlay');
        if (!overlay || !overlay.classList.contains('active')) return;

        if (e.key === 'ArrowRight') nextUnsaidPage();
        if (e.key === 'ArrowLeft') prevUnsaidPage();
        if (e.key === ' ') {
            e.preventDefault();
            toggleAudio();
        }
        if (e.key === 'Escape') closeUnsaidGift();
    });
    window.unsaidKeyboardSetup = true;
}

function renderInfinityMoments(images) {
    const container = document.getElementById('infinity-container');
    if (!container) return;

    // Clear any existing photos
    const existingPhotos = container.querySelectorAll('.infinity-photo');
    existingPhotos.forEach(p => p.remove());

    images.forEach((img, index) => {
        const photoEl = document.createElement('img');
        photoEl.src = img;
        photoEl.className = 'infinity-photo';
        // Distribute photos along the 100% path
        const delay = (index / images.length) * -20; // 20s is total duration
        photoEl.style.animationDelay = `${delay}s`;

        container.appendChild(photoEl);
    });
}
