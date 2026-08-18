// Setting up the <canvas> element and provides the 2D context for drawing.
// element: physical canvas (the board):  actual HTML tag (<canvas id="gameCanvas">)
// ctx: here, 2d toolkits

import { Store } from "../engine/Store.js";


// The Canvas object handles all visual setup and drawing tools
export const Canvas = {
    element: null, // hold the actual <canvas> HTML tag
    ctx: null, // context, like a : paintbrush/toolbox

    // (Runs once when the game starts)
    init() {
        // update null values with data of gameCanvas in index.html
        this.element = document.getElementById('gameCanvas');
        this.ctx = this.element.getContext('2d'); // 2d rendering 'ctx' object, contains all the drawing functions

        // Set canvas dimensions based on width and height defined in Store
        this.element.width = Store.canvas.width;
        this.element.height = Store.canvas.height;
    },

    // (Runs every single frame)
    clear() {
       // total clear of canvas for next frame
       this.ctx.clearRect(0, 0, this.element.width, this.element.height); 
    }
};