export class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        if(Math.random() < 0.5) {
            this.vx = -1;
        } else {
            this.vx = 1;
        }

        if(Math.random() < 0.5) {
            this.vy = -1;
        } else {
            this.vy = 1;
        }
    }
    
    animate(ctx, stageWidth, stageHeight) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        ctx.beginPath();
        ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.closePath();
    }

    bounceWindow(stageWidth, stageHeight) {
        if(this.x < this.radius || this.x > stageWidth - this.radius) {
            this.vx *= -1;
            this.x += this.vx;
        }
        if(this.y < this.radius || this.y > stageHeight - this.radius) {
            this.vy *= -1;
            this.y += this.vy;
        }
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