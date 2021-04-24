import { Ball } from "./ball.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth / 2, this.stageHeight / 2, 450, 7);

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

        this.ball.animate(this.ctx, this.stageWidth, this.stageHeight);

        window.requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}