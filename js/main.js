// Absolute starting line of GAME

// js/main.js
import { Engine } from './engine/Engine.js';

// Wait for the HTML to fully load before starting
window.addEventListener('DOMContentLoaded', () => {
    Engine.start(); // call the engine, which then starts up various fns in order
});