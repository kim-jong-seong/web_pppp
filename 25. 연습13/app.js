import { Ball } from "./ball.js";

const COLORS = ['rgba(251, 152, 152, 0.7)', 'rgba(251, 193, 152, 0.7)', 'rgba(251, 241, 152, 0.7)', 'rgba(206, 251, 152, 0.7)', 'rgba(152, 251, 203, 0.7)', 'rgba(152, 208, 251, 0.7)', 'rgba(155, 152, 251, 0.7)', 'rgba(213, 152, 251, 0.7)', 'rgba(251, 152, 231, 0.7)'];

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.maxBall = 20;
        this.radius = 40;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = [];

        let curColor = 0;

        for(let i = 0; i < this.maxBall; i++) {

            const item = new Ball((Math.random() * (this.stageWidth - this.radius)) + this.radius, (Math.random() * (this.stageHeight - this.radius)) + this.radius, this.radius, COLORS[curColor]);
            this.ball[i] = item;
        
            if(++curColor > COLORS.length) {
                curColor = 0;
            }
        }

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        for(let i = 0; i < this.maxBall; i++) {
            const item = this.ball[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }

        window.requestAnimationFrame(this.animate.bind(this));
    }
}

function delay(gap) {
    var then, now;

    then = new Date().getTime();
    now = then;
    
    while(now - then < gap) {
        now = new Date().getTime();
    }
}

window.onload = () => {
    new App();
}