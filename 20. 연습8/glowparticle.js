const PI2 = Math.PI * 2;

export class GlowParticle {
    constructor(x, y, radius, rgb, rgb2) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;
        this.rgb2 = rgb2;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;
        
        this.sinValue = Math.random();
    }

    animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.01;

        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0) {
            this.vx *= -1;
            this.x += 10;
        } else if(this.x > stageWidth) {
            this.vx *= -1;
            this.x -= 10;
        }

        if(this.y < 0) {
            this.vy *= -1;
            this.y += 10;
        } else if(this.y > stageHeight) {
            this.vy *= -1;
            this.y -= 10;
        }

        ctx.beginPath();

        const g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.01, this.x, this.y, this.radius);
        g.addColorStop(0, this.rgb);
        g.addColorStop(1, this.rgb2);
        ctx.fillStyle = this.rgb;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }
}