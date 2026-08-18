// Define and injectc the ball's initial data it into the Store.js

import { Store } from "../engine/Store.js";

// ThreatBall object that handles the logic and setup for main enemy ball.
export const ThreatBall = {
    init() {
        // Set the initial state of the ball in the Store (over-wrote those zeros)
        Store.threatBall = {
            // Math: Divide the canvas width and height by 2
            x: Store.canvas.width / 2,   // Start in the middle of x-axis
            y: Store.canvas.height / 2,  // Start in the middle of y-axis

            // Velocity in each direction. +ve x -> RIGHT,  +y -> DOWN (in computer screen)
            vx: 5,   // Moves 5 pixels to the right every frame
            vy: 4,   // Moves 4 pixels down every frame
            radius: 20,
            speed: 6 // The overall movement speed settings.
        };
    }
};