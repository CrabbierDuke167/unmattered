// Tracks the real mouse
// Calc its position relative to the canvas


// Store to save the mouse coordinates, 
// Canvas module to know where canvas is on the screen.
import { Store } from "./Store.js";
import { Canvas } from "../render/Canvas.js";

export const Mouse = {
    // (runs once when the game starts)
    init() {
        // listen 'mousemove' event
        window.addEventListener('mousemove', (e) => {
            if (!Canvas.element) return; // return if canvas not loaded yet

            // Get canvas position relative to the viewport data (browser data)
            const rect = Canvas.element.getBoundingClientRect();

            // Convert browser coordinates to canvas coordinates and save to Store
            // math: x Position of canvas - rect.left mean x dimesion INSIDE the canvas
            Store.mouse.x = e.clientX - rect.left;
            Store.mouse.y = e.clientY - rect.top;
        });
    }
};