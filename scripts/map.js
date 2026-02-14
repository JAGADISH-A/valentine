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
        title: "GIFT 4 – LOYALTY COUPON",
        img: "👑",
        text: "Forever Devoted to My Queen",
        type: "coupon"
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
        if (unlockedStep === 3) {
            unlockedStep = 4;
            saveProgress();
            renderGifts();
        }
        openTimeline();
        return;
    }

    if (id === 4) {
        openLoyaltyCoupon();
        return;
    }

    if (id === 5) {
        openFinalLetterGift();
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
    if (unlockedStep === 3) unlockedStep = 5;
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




// --- Standalone Loyalty Coupon Logic ---

function openLoyaltyCoupon() {
    const modal = document.getElementById('gift-modal');
    const content = document.getElementById('gift-detail-content');

    content.innerHTML = `
        <div class="ticket-header-label" style="text-align: center; font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; color: #888; margin-bottom: 10px;">
            Swipe to view your collection
        </div>
        <div class="ticket-carousel">
            <!-- Ticket 1: Movie Marathon -->
            <div class="vintage-ticket ticket-red">
                <div class="ticket-stub">
                    <div class="stub-text">CINEMA ADMIT TWO</div>
                    <div class="void-text">VOID IF DETACHED</div>
                </div>
                <div class="ticket-main">
                    <div class="ticket-header">VINTAGE RED CINEMA</div>
                    <div class="ticket-title">MOVIE MARATHON NIGHT</div>
                    <div class="ticket-details">
                        <div class="detail-item"><span>Row</span>Couch</div>
                        <div class="detail-item"><span>Seat</span>Cuddle Position</div>
                        <div class="detail-item" style="grid-column: span 2;"><span>Duration</span>Until We Fall Asleep</div>
                    </div>
                    <div class="ticket-footer">
                        <div class="ticket-no">№ 0616-2024</div>
                        <div>🍿 FILM REEL SPECIAL</div>
                    </div>
                </div>
            </div>

            <!-- Ticket 2: One Day as Queen -->
            <div class="vintage-ticket ticket-gold">
                <div class="ticket-stub">
                    <div class="stub-text">ROYAL DECREE</div>
                    <div class="void-text">VOID IF DETACHED</div>
                </div>
                <div class="ticket-main">
                    <div class="ticket-header">PALACE SERVICES</div>
                    <div class="ticket-title">ONE DAY AS QUEEN</div>
                    <div class="ticket-details">
                        <div class="detail-item" style="grid-column: span 2;"><span>Entitlement</span>24 Hours of Pampered Royalty</div>
                        <div class="detail-item" style="grid-column: span 2;"><span>Valid</span>Any Day of Your Choice</div>
                    </div>
                    <div class="ticket-footer">
                        <div class="ticket-no">№ QUEEN-888</div>
                        <div>👑 ROYAL CREST</div>
                    </div>
                </div>
            </div>

            <!-- Ticket 3: Unlimited Hugs & Kisses -->
            <div class="vintage-ticket ticket-pink">
                <div class="ticket-stub">
                    <div class="stub-text">LIFETIME PASS</div>
                    <div class="void-text">VOID IF DETACHED</div>
                </div>
                <div class="ticket-main">
                    <div class="ticket-header">HEART TRANSIT CO.</div>
                    <div class="ticket-title">UNLIMITED HUGS & KISSES</div>
                    <div class="ticket-details">
                        <div class="detail-item"><span>Route</span>Heart to Heart</div>
                        <div class="detail-item"><span>Status</span>Non-transferable</div>
                        <div class="detail-item" style="grid-column: span 2;"><span>Expires</span>Never</div>
                    </div>
                    <div class="ticket-footer">
                        <div class="ticket-no">№ LOVE-143</div>
                        <div>❤️ LIFETIME PASS</div>
                    </div>
                </div>
            </div>

            <!-- Ticket 4: Adventure Day -->
            <div class="vintage-ticket ticket-teal">
                <div class="ticket-stub">
                    <div class="stub-text">TRAVEL VOUCHER</div>
                    <div class="void-text">VOID IF DETACHED</div>
                </div>
                <div class="ticket-main">
                    <div class="ticket-header">WANDERLUST AIRWAYS</div>
                    <div class="ticket-title">ADVENTURE AWAITS</div>
                    <div class="ticket-details">
                        <div class="detail-item" style="grid-column: span 2;"><span>Activity</span>One Spontaneous Adventure</div>
                        <div class="detail-item"><span>Destination</span>Your Choice</div>
                        <div class="detail-item"><span>Departure</span>Anytime</div>
                    </div>
                    <div class="ticket-footer">
                        <div class="ticket-no">№ ADV-555</div>
                        <div>📍 COMPASS ROSE</div>
                    </div>
                </div>
            </div>

            <!-- Ticket 5: Breakfast in Bed -->
            <div class="vintage-ticket ticket-mint">
                <div class="ticket-stub">
                    <div class="stub-text">DINER SPECIAL</div>
                    <div class="void-text">VOID IF DETACHED</div>
                </div>
                <div class="ticket-main">
                    <div class="ticket-header">SUNRISE CAFE</div>
                    <div class="ticket-title">BREAKFAST IN BED ROYALE</div>
                    <div class="ticket-details">
                        <div class="detail-item"><span>Chef's Special</span>Includes: Coffee, Kisses & Cuddles</div>
                        <div class="detail-item"><span>Service</span>Served with Love</div>
                    </div>
                    <div class="ticket-footer">
                        <div class="ticket-no">№ BFAST-101</div>
                        <div>☕ RETRO DINER</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 20px; display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <button class="classic-vintage-btn" onclick="closeModal(); unlockNextFromCoupon();">Accept with Love ❤️</button>
            <button class="classic-vintage-btn" style="background: var(--unsaid-burgundy); font-size: 0.9rem; padding: 10px 25px;" onclick="window.location.href='coupon-session.html'">✨ Enter Immersive Session ✨</button>
        </div>
    `;

    modal.classList.add('active');
}

function unlockNextFromCoupon() {
    // Funny Dramatic Message Trigger - Show it regardless of state for better experience
    showDramaticMessage("You have successfully availed all the Coupons of Love with 'The Product: Jagan'! \n\n With all my love, Jagan ❤️ (No refunds, no returns!) 😂");

    if (unlockedStep === 4) {
        unlockedStep = 5;
        saveProgress();
        renderGifts();
    }
}

function showDramaticMessage(text) {
    let overlay = document.getElementById('dramatic-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'dramatic-overlay';
        overlay.className = 'dramatic-overlay';
        overlay.innerHTML = `<div class="dramatic-message"></div>`;
        document.body.appendChild(overlay);

        overlay.onclick = () => {
            overlay.classList.remove('active');
        };
    }

    const messageEl = overlay.querySelector('.dramatic-message');
    messageEl.textContent = text;

    overlay.classList.add('active');

    // Automatically fade out after 5 seconds if not clicked
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 5000);
}

// --- Final Promise Letter Logic ---

function openFinalLetterGift() {
    const overlay = document.getElementById('unsaid-overlay');
    const envelope = document.getElementById('envelope-wrapper');
    const player = document.getElementById('gift-player');

    overlay.classList.add('active');
    envelope.classList.remove('open');
    envelope.style.display = 'flex';
    player.classList.remove('active');
}

function startFinalLetter() {
    const envelope = document.getElementById('envelope-wrapper');
    const player = document.getElementById('gift-player');
    const content = document.getElementById('final-letter-content');

    envelope.classList.add('open');

    // Prepare letter content - COUPON REMOVED
    content.innerHTML = `
        <h2 class="romantic-font" style="font-size: 2.5rem; color: var(--unsaid-burgundy); margin-bottom: 20px;">My Dearest Latha,</h2>
        <div class="letter-text" style="font-family: 'Poppins', sans-serif; line-height: 1.8; font-size: 1.1rem; color: #444; text-align: left;">
            <p>From a simple EEE exam message to the most beautiful love story of my life, every moment with you has been a treasure. You are my home, my peace, and my forever.</p>
            <p>I promise to choose you every single day, to hold your hand through every storm, and to love you more than words, more than songs, and more than forever. ♾️❤️</p>
        </div>
        
        <div id="anti-gravity-container" class="gravity-text"></div>
    `;

    setTimeout(() => {
        envelope.style.display = 'none';
        player.classList.add('active');

        // Generate anti-gravity text
        createAnimatedText("Happy Valentine's Day", "anti-gravity-container");

        setupLetterKeyboardNav();
    }, 1200);
}

function createAnimatedText(text, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'gravity-letter';
        span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces

        // Random organic properties as requested
        const baseDelay = index * 100; // 100ms sequential delay
        const randomDelay = Math.random() * 50; // Extra variation
        const totalDelay = baseDelay + randomDelay;

        const startRot = Math.random() * 20 - 10; // -10 to 10 range (gentle) 
        const midRot = Math.random() * 30 - 15;   // -15 to 15 range (bobbing)
        const bobY = Math.random() * 10 - 5;
        const bobRot = Math.random() * 10 - 5;     // 5-15 degree requested, let's use ~10 for bob
        const breatheSpeed = Math.random() * 2 + 2; // 2-4s breathing interval

        span.style.animationDelay = `${totalDelay}ms, ${totalDelay + 2500}ms`;
        span.style.setProperty('--start-rot', `${startRot}deg`);
        span.style.setProperty('--mid-rot', `${midRot}deg`);
        span.style.setProperty('--bob-y', `${bobY}px`);
        span.style.setProperty('--bob-rot', `${bobRot}deg`);
        span.style.animationDuration = `2.5s, ${breatheSpeed}s`;

        container.appendChild(span);
    });
}

function closeUnsaidGift() {
    const overlay = document.getElementById('unsaid-overlay');
    overlay.classList.remove('active');
}

function setupLetterKeyboardNav() {
    if (window.letterKeyboardSetup) return;
    document.addEventListener('keydown', (e) => {
        const overlay = document.getElementById('unsaid-overlay');
        if (!overlay || !overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeUnsaidGift();
    });
    window.letterKeyboardSetup = true;
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
