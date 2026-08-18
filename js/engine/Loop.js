// It updates state (if playing), clears the canvas, and renders the current state.
// HEARTBEAT

//import every thing that is gonna be handled
import { Store } from './Store.js';
import { Physics } from './Physics.js';
import { Collider } from './Collider.js';
import { Canvas } from '../render/Canvas.js';
import { BallRender } from '../render/BallRender.js';


export const Loop = {
    start() {
        const tick = () => { // runs over and over again lwk heartbeat of game?
            // UPDATE
            // Only update game logic if the status is "playing"
            if (Store.game.status === 'playing') {
                Physics.update(); // Takes the ball's current velocity (vx, vy) and adds it to the ball's current position (x, y) to get the new position for the next frame.
                Collider.update(); // Calculates the straight-line distance between the mouseTip & ball centre and handle collisions (its purpose)
            }

            // DRAW 
            // Always clear the screen and draw, even if the game is over
            Canvas.clear(); // clear everything 1st
            BallRender.draw(); // then draw ball

            // Draw game over text if applicable
            if (Store.game.status === 'gameover') { // temporary untill UI codes are not written
                const ctx = Canvas.ctx;
                ctx.fillStyle = 'red';
                ctx.font = 'bold 48px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('GAME OVER', Store.canvas.width / 2, Store.canvas.height / 2);
                
                ctx.fillStyle = 'black';
                ctx.font = '24px sans-serif';
                ctx.fillText('Refresh page to restart', Store.canvas.width / 2, Store.canvas.height / 2 + 40);
            }

            // REPEAT as animation 60FPS ig
            requestAnimationFrame(tick);
        };

        // Draw the first frame (1st iteration of the code as game starts)
        requestAnimationFrame(tick);
    }
};