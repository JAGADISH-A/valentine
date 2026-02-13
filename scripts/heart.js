/**
 * I Love You Heart Animation
 * Generates a heart shape using "I love you" text elements
 */

class LoveHeart {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.text = "I love you ";
        this.count = 150; // Total segments/words
        this.elements = [];
        this.speed = 0.0005; // Base speed of the train
        this.init();
    }

    init() {
        if (!this.container) return;
        this.createElements();
        this.animate();
    }

    createElements() {
        for (let i = 0; i < this.count; i++) {
            const wordContainer = document.createElement('div');
            wordContainer.className = 'love_horizontal';
            wordContainer.style.position = 'absolute';
            wordContainer.style.whiteSpace = 'nowrap';
            wordContainer.style.setProperty('--i', i);

            const word = document.createElement('span');
            word.className = 'love_word';
            word.textContent = this.text;

            wordContainer.appendChild(word);
            this.container.appendChild(wordContainer);

            // Store elements with their initial progress offset
            this.elements.push({
                el: wordContainer,
                progress: (i / this.count) // Value from 0 to 1
            });
        }
    }

    updatePosition(item) {
        const t = item.progress * 2 * Math.PI;

        // Heart equation
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const scale = 18; // Slightly larger heart
        const posX = x * scale;
        const posY = y * scale;

        // Apply position
        item.el.style.left = `calc(50% + ${posX}px)`;
        item.el.style.top = `calc(50% + ${posY}px)`;

        // Update progress
        item.progress += this.speed;
        if (item.progress > 1) item.progress -= 1;
    }

    animate() {
        this.elements.forEach(item => this.updatePosition(item));
        requestAnimationFrame(() => this.animate());
    }
}

// Initialized manually by map.js
window.LoveHeart = LoveHeart;
