export class Ball {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        this.xspeed = speed;
        this.yspeed = speed;
    }

    animate(ctx, stageWidth, stageHeight) {
        this.x += this.xspeed;
        this.y += this.yspeed;

        this.bounceWindow(stageWidth, stageHeight);

        ctx.beginPath();
        ctx.fillStyle = 'gray';

        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();
    }

    bounceWindow(stageWidth, stageHeight) {
        if(this.x <= this.radius || this.x >= stageWidth - this.radius) {
            this.xspeed *= -1;
            this.x += this.xspeed;
        }
        if(this.y <= this.radius || this.y >= stageHeight - this.radius) {
            this.yspeed *= -1;
            this.y += this.yspeed;
        }
    }
}