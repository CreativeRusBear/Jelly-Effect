import Mouse from './mouse.js';
import Ball from './ball.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pos = new Mouse(canvas);
const balls = [];
const mouse = new Ball(0, 0, 30, 'green');

for (let i = 0; i < 30; i++) {
    balls.push(
        new Ball(
            300 + 200 * Math.cos(i * 2 * Math.PI / 30),
            300 + 200 * Math.sin(i * 2 * Math.PI / 30),
        )
    );
}

function connectDots(balls) {
    ctx.beginPath();
    ctx.moveTo(balls[0].x, balls[0].y);
    balls.forEach(ball => {
        ctx.lineTo(ball.x, ball.y);
    });
    ctx.closePath();
    ctx.fillStyle = 'orange';
    ctx.fill();
}

function ConnectDots1(dots) {
    ctx.beginPath();

    for (let i = 0, length = dots.length; i <= length; ++i) {
        let p0 = dots[i + 0 >= length ? i + 0 - length : i + 0];
        let p1 = dots[i + 1 >= length ? i + 1 - length : i + 1];
        ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }
    ctx.fillStyle = 'orange';
    ctx.fill();
}

function Render() {
    window.requestAnimationFrame(Render);
    ctx.clearRect(0, 0, 600, 600);
    mouse.setPos(pos.x, pos.y);
    mouse.draw(ctx);
    ConnectDots1(balls);
    balls.forEach(ball => ball.think(pos));
}

Render();