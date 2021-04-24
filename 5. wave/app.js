class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.fillStyle = '#cddb49';
        this.ctx.beginPath();
        this.ctx.arc(
            this.stageWidth / 2,
            this.stageHeight / 2,
            300,
            0, 2 * Math.PI
        );
        this.ctx.fill();
    }
}

window.onload = () => {
    new App();
}










// import { 
//     Wave
// } from './wave.js';



// class App {
//     constructor() {
//         this.canvas = document.createElement('canvas');
//         this.ctx = this.canvas.getContext('2d');
//         document.body.appendChild(this.canvas);

//         this.wave = new Wave();

//         window.addEventListener('resize', this.resize.bind(this), false);
//         this.resize();

//         requestAnimationFrame(this.animate.bind(this));
//     }

//     resize() {
//         this.stageWidth = document.body.clientWidth;
//         this.stageHeight = document.body.clientHeight;

//         this.canvas.width = this.stageWidth * 2;
//         this.canvas.height = this.stageHeight * 2;
//         this.ctx.scale(2, 2);

//         this.wave.resize(this.stageWidth, this.stageHeight);
//     }

//     animate(t) {
//         this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

//         this.wave.draw(this.ctx);

//         requestAnimationFrame(this.animate.bind(this));
//     }
// }

// window.onload = () => {
//     new App();
// };