/**
 * Advanced Rose Animations for Valentine's Website
 */

class RoseTrail {
    constructor() {
        this.container = document.body;
        this.lastX = 0;
        this.lastY = 0;
        this.distanceThreshold = 40; // Spacing between roses
        this.maxRoses = 50;
        this.roses = [];
        this.enabled = true;

        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleMouseMove(e) {
        if (!this.enabled) return;

        const dist = Math.hypot(e.clientX - this.lastX, e.clientY - this.lastY);

        if (dist > this.distanceThreshold) {
            this.spawnRose(e.clientX, e.clientY);
            this.lastX = e.clientX;
            this.lastY = e.clientY;
        }
    }

    spawnRose(x, y) {
        if (this.roses.length >= this.maxRoses) {
            const oldest = this.roses.shift();
            if (oldest && oldest.parentElement) {
                oldest.remove();
            }
        }

        const rose = document.createElement('div');
        rose.className = 'rose-element high-res-rose';

        // Random properties for realism
        const size = Math.random() * 80 + 60; // 60px to 140px
        const startRot = Math.random() * 360;
        const endRot = startRot + (Math.random() * 90 - 45);
        const depth = Math.random();

        let depthClass = 'depth-mid';
        if (depth < 0.3) depthClass = 'depth-back';
        else if (depth > 0.7) depthClass = 'depth-front';

        rose.classList.add(depthClass);

        rose.style.width = `${size}px`;
        rose.style.height = `${size}px`;
        rose.style.left = `${x}px`;
        rose.style.top = `${y}px`;
        rose.style.setProperty('--start-rot', `${startRot}deg`);
        rose.style.setProperty('--end-rot', `${endRot}deg`);
        rose.style.opacity = Math.random() * 0.4 + 0.6; // 0.6 to 1.0

        rose.style.animation = `rose-spawn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;

        this.container.appendChild(rose);
        this.roses.push(rose);

        // Petal chance
        if (Math.random() > 0.7) {
            this.spawnPetal(x, y);
        }

        // Float and fade out
        setTimeout(() => {
            if (rose.parentElement) {
                const floatX = (Math.random() - 0.5) * 40;
                const floatY = (Math.random() - 0.5) * 40;
                rose.style.transition = 'transform 5s linear, opacity 2s ease-out';
                rose.style.transform = `translate(calc(-50% + ${floatX}px), calc(-50% + ${floatY}px)) rotate(${endRot + 20}deg)`;
                rose.style.opacity = '0';

                setTimeout(() => {
                    if (rose.parentElement) rose.remove();
                    this.roses = this.roses.filter(r => r !== rose);
                }, 2000);
            }
        }, 3000);
    }

    spawnPetal(x, y) {
        const petal = document.createElement('div');
        const isDark = Math.random() > 0.5;
        petal.className = `petal-element ${isDark ? 'petal-dark' : 'petal-light'}`;
        petal.style.left = `${x}px`;
        petal.style.top = `${y}px`;

        const size = Math.random() * 15 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        const tx = (Math.random() - 0.5) * 300;
        const ty = Math.random() * 300 + 200;
        const rot = Math.random() * 1080;

        document.body.appendChild(petal);

        petal.animate([
            { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rot}deg) scale(0.5)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0, 0.3, 1)'
        }).onfinish = () => petal.remove();
    }
}

class BloomExplosion {
    constructor() {
        this.container = document.body;
        this.isExploded = false;
    }

    async start() {
        // 1. Create Bud
        const bud = document.createElement('div');
        bud.className = 'rose-element high-res-rose depth-front';
        bud.style.width = '100px';
        bud.style.height = '100px';
        bud.style.left = '50%';
        bud.style.top = '50%';
        // Simulate bud by scaling down and darkening
        bud.style.transform = 'translate(-50%, -50%) scale(0.05)';
        bud.style.filter = 'brightness(0.4) contrast(1.2) blur(1px)';
        this.container.appendChild(bud);

        // 2. Scale Up Bud
        await this.delay(800);
        bud.style.transition = 'transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 2.5s ease';
        bud.style.transform = 'translate(-50%, -50%) scale(1.2)';
        bud.style.filter = 'brightness(1) contrast(1) blur(0)';
        bud.style.animation = 'bloom-pulse 2s infinite ease-in-out';

        // 3. Wait for peak bloom
        await this.delay(2500);

        // 4. Explode
        this.explode(50, 50);
        bud.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out, filter 0.4s ease-out';
        bud.style.transform = 'translate(-50%, -50%) scale(3)';
        bud.style.filter = 'blur(10px) brightness(2)';
        bud.style.opacity = '0';
        setTimeout(() => bud.remove(), 400);
    }

    explode(xPercent, yPercent) {
        const count = 30;
        for (let i = 0; i < count; i++) {
            this.spawnExplosionRose(xPercent, yPercent);
        }

        // Sparkles
        for (let i = 0; i < 20; i++) {
            this.spawnSparkle(xPercent, yPercent);
        }
    }

    spawnExplosionRose(x, y) {
        const rose = document.createElement('div');
        rose.className = 'rose-element high-res-rose';

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 400 + 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity + 100; // Adding a bit of "gravity" feel
        const scale = Math.random() * 0.8 + 0.4;
        const rot = Math.random() * 360 + 360;

        rose.style.width = '100px';
        rose.style.height = '100px';
        rose.style.left = `${x}%`;
        rose.style.top = `${y}%`;
        rose.style.setProperty('--tx', `${tx}px`);
        rose.style.setProperty('--ty', `${ty}px`);
        rose.style.setProperty('--scale', scale);
        rose.style.setProperty('--rot', `${rot}deg`);

        rose.style.animation = `explosion-burst ${Math.random() * 2 + 1}s cubic-bezier(0.1, 0, 0.3, 1) forwards`;

        this.container.appendChild(rose);
        setTimeout(() => rose.remove(), 3000);
    }

    spawnSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;

        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 300;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        this.container.appendChild(sparkle);

        sparkle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 }
        ], {
            duration: Math.random() * 1000 + 500,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Global initialization
// Global initialization - Disabled as per user request (PNG effects ruining page)
window.addEventListener('DOMContentLoaded', () => {
    // window.roseTrail = new RoseTrail();

    // if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('restart/')) {
    //     const bloom = new BloomExplosion();
    //     setTimeout(() => bloom.start(), 1000);
    // }
});
