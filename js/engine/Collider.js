// Checks point-circle collision between the mouse and the ball.

import { Store } from './Store.js';

export const Collider = {
    update() {
        const ball = Store.threatBall; // get threatBall data from Store
        const mouse = Store.mouse; // get mouse data from Store

        // Pythagorean theorem to find distance between mouse and ball center
        // (A² + B² = C²) to find HYPOTENUSE
        const dx = mouse.x - ball.x;
        const dy = mouse.y - ball.y;
        const distance = Math.hypot(dx, dy); // Math.hypot calculates the hypotenuse {C}
        
        // If distance  b/w mouseTip &  center of  ball is <= radius, they are touching
        if (distance <= ball.radius) {
            // trigger DEATH
            Store.game.status = 'gameover';
            console.log("PLAYER_DIED Event: Mouse hit the ball.");
        }
    }
};