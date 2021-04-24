const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 4,
    dy: 3
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    circle.x += circle.dx;
    circle.y += circle.dy;

    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
    }
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }


    requestAnimationFrame(update);
}

update();




// Paths

// ctx.beginPath();

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(0, 200);
// ctx.lineTo(50, 50);

// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();

// ctx.stroke();

// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2, false);

// ctx.moveTo(centerX + 100, centerY);
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// ctx.moveTo(centerX - 60, centerY - 80);
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2, false);

// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2, false);

// ctx.stroke();













// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);


// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// ctx.clearRect(25, 25, 140, 90);

// // fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);

// // stokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World', 400, 100);

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);