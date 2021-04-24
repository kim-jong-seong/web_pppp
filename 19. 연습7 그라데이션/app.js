import { GlowParticle } from "./glowparticle.js";

const COLORS = ['rgba(45, 74, 227, 1)', 'rgba(250, 255, 89, 1)', 'rgba(255, 104, 248, 1)', 'rgba(44, 209, 252, 1)', 'rgba(54, 233, 84, 1)'];
const COLORS2 = ['rgba(45, 74, 227, 0)', 'rgba(250, 255, 89, 0)', 'rgba(255, 104, 248, 0)', 'rgba(44, 209, 252, 0)', 'rgba(54, 233, 84, 0)'];

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation = 'saturation';
        
        this.createParticles();
    }

    createParticles() {
        let curColor = 0;

        for(let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth, 
                Math.random() * this.stageHeight, 
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor],
                COLORS2[curColor]
            );

            if(++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for(let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload = () => {
    new App();
}