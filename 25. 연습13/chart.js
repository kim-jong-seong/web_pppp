export class Chart {
    constructor(x, y) {
        this.maxChart = 1;
        this.chart = [];

        this.x = x;
        this.y = y;
    }

    animate(ctx) {
        ctx.beginPath();

        for(let i = 0; i < this.maxChart; i++) {
            let sx = this.x;
            let sy = this.y;

            px += 1;

            if(Math.random() < 0.5) {
                px += 1;
            } else {
                py -= 1;
            }

            this.chart[i] = py;

            ctx.moveTo(i, this.chart[i]);
            ctx.lineTo(px, py);
            ctx.stroke();

            this.x = px;
            this.y = py;
        }

        ctx.closePath();
    }
}