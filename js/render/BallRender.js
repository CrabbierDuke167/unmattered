// DRAWS THE BALL HERE !!!
//Reads the data from the store and draws a circle on the canvas.

import { Store } from '../engine/Store.js';
import { Canvas } from './Canvas.js';

const ballFill = '#222'

export const BallRender = {
    // The draw function runs every frame to paint & repaint the ball onto the screen
    draw() {
        const ball = Store.threatBall;
        const ctx = Canvas.ctx;

        ctx.beginPath(); // clear all previous path and start brand new one
        // arc(x, y, radius, startAngle, endAngle)
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.fillStyle = ballFill; // Dark grey ball, might change later
        ctx.fill()
        ctx.closePath(); // Wraps up the drawing instruction for this shape
    }
};


// ---DRAW THE CIRCLE ---
   // arc(x, y, radius, startAngle, endAngle)
 // - ball.x & ball.y: Places the center of the circle exactly where the physics engine says it is.
 // - ball.radius: Uses the ball's size.
 // - 0 to Math.PI * 2: Tells it to draw a full 360-degree circle (a complete loop).