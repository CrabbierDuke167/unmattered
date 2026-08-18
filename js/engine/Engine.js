// Coordinator
// Starts up all the different systems in the right order.

// import various systems
import { Canvas } from '../render/Canvas.js';
import { ThreatBall } from '../objects/ThreatBall.js';
import { Mouse } from './Mouse.js';
import { Loop } from './Loop.js';

export const Engine = {
    start() {
        console.log("Starting Engine.js...");
        Canvas.init();         // 1. Get the canvas ready
        ThreatBall.init();     // 2. Put ball data in the Store
        Mouse.init();          // 3. Start tracking the mouse
        Loop.start();          // 4. Start the game loop
    }
};