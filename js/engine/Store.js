// Master control center |  keeps track of everything happening right now

export const Store = {
    game: {
        status: 'playing' // possible values: 'menu', 'playing', 'paused', 'gameover'
    },

    canvas: {
        // (in pixels)
        width: 800,
        height: 600
    },

    mouse: {
        // Tracks where the player's mouse cursor is on the screen.
        x: -100, // Start offscreen so the player doesn't die instantly on load
        y: -100
    },
    
    threatBall: {
        // populated by ThreatBall.js
        // set to 0 now, get filled in dynamically
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,
        speed: 0,
    }
};