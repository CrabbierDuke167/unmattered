// WONT DRAW ball here !!!!
// Moves the ball and handles bouncing


import { Store } from './Store.js';

export const Physics = {
    // update fn handles movement rules and calculations
    update() {
        const ball = Store.threatBall;
        const canvasSize = Store.canvas


        // Apply velocity to position
        ball.x += ball.vx;
        ball.y += ball.vy;


        // Bounce off left and right walls
        if (ball.x - ball.radius <= 0) {
            ball.x = ball.radius; // Prevent getting stuck in the wall
            ball.vx *= -1; // Reverse direction
        } else if (ball.x + ball.radius >= canvasSize.width) { // Check if the right edge of the ball hits or goes past the right wall (width)
            ball.x = canvasSize.width - ball.radius;
            ball.vx *= -1; // Reverse direction
        }


        // Bounce off top and bottom walls
        if (ball.y - ball.radius <= 0) {
            ball.y = ball.radius; // Prevent getting stuck in the wall
            ball.vy *= -1; // Reverse direction
        } else if (ball.y + ball.radius >= canvasSize.height) { // Check if the bottom edge of the ball hits or goes past the bottom wall (height)
            ball.y = canvasSize.height - ball.radius;
            ball.vy *= -1; // Reverse direction
        }
    }
};


/*
--MOVEMENT CALCULATION--
// Add the velocity (vx, vy) to the current position (x, y) every frame.
// ie add some px to RIGHT and some px to DOWN 


--LEFT & RIGHT WALL BOUNCING--
// Check if the left edge of the ball hits or goes past the left wall (0)


--TOP & BOTTOM WALL BOUNCING--
// Check if the top edge of the ball hits or goes past the top wall (0)
*/


/*
---How X and Y Positions are Calculated by JavaScript---
game screen: like a big graph paper.
top left corner is (0,0)
right goes up to 800, and down goes to 600 (as of now)

ball.x += ball.vx; // Same as: ball.x = ball.x + 5px;
ball.y += ball.vy; // Same as: ball.y = ball.y + 4px;
*/


/*
---How the Wall Collision Detection Calculation Works---
(ball.x, ball.y) = (x,y) : coordinates of centre of circle at any point in graph during its motion: eg: (If ball.x = 10, it means the center of the ball is sitting 10 pixels away from the left wall of the canvas.)

The Left Wall Check (0)
if (ball.x - ball.radius <= 0)
ball.x: The center point of the ball.
We subtract {radius} px to find the leftmost outer edge of the ball
if that calc gives <=0 then collision detected
so we reverse direction of velocity (bounce)

The Right Wall Check ({width of canvas})
else if (ball.x + ball.radius >= s.width)
ball.x + ball.radius: Here we add {raduis}px from centre to find the rightmost outer edge of the ball.
>= s.width: Has the right edge touched or crossed the right boundary
*/