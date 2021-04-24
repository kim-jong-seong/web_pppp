const PI2 = Math.PI * 2;

export class GlowParticle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.xspeed = Math.random() * 2;
        this.yspeed = Math.random() * 3;

        this.vx = this.xspeed;
        this.vy = this.yspeed;
        
        this.sinValue = Math.random();
        this.createsnow = Math.random() * 4;
    }

    animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.002;
        this.x += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if(this.x > stageWidth + this.radius || this.y > stageHeight + this.radius) {
            if( this.createsnow < 4 ) {
                this.x = Math.random() * stageWidth;
                this.y = 0; 
                this.vx = this.xspeed;
                this.vy = this.yspeed;
                this.createsnow++;
            } else {
                this.x = 0;
                this.y = Math.random() * ( stageHeight / 2 ); 
                this.vx = this.xspeed;
                this.vy = this.yspeed;
                this.createsnow = 0;
            }
        }

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.radius, 0, PI2);
        ctx.fill();
        ctx.closePath();
    }
}