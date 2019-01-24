import Mouse from "./mouse.js";
import Ball from "./ball.js";
let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    pos = new Mouse(canvas),
    balls = [],
    mouse = new Ball(0,0,30,"green");
//drawCircle(100,100,50);

for (var i=0;i<30;i++){
    balls.push(
        new Ball(
            300+200*Math.cos(i*2*Math.PI/30),
            300+200*Math.sin(i*2*Math.PI/30),
        )
    );
}
function connectDots(balls) {
    ctx.beginPath();
    ctx.moveTo(balls[0].x, balls[0].y);
    balls.forEach(ball=>{
        ctx.lineTo(ball.x, ball.y);
    });
    ctx.closePath();
    ctx.fillStyle='orange';
    ctx.fill();
}

function ConnectDots1(dots) {
    ctx.beginPath();

    for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
        var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
        var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
        ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }
    ctx.fillStyle='orange';
    ctx.fill();
}
function Render() {
    window.requestAnimationFrame(Render);
    ctx.clearRect(0,0,600,600);
    // drawCircle(pos.x, pos.y, 20);
    mouse.setPos(pos.x,pos.y);
    mouse.draw(ctx);
    ConnectDots1(balls);
    balls.forEach(ball=>{
        ball.think(pos);
        // ball.draw(ctx);
        }
    );
}

Render();

import '../css/style.css';
