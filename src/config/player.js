import { sprites } from './sprites.js';

// player object
export let player = [
    // pos is the position where will create this object
    pos(0, 0),
    // sprite defines the sprite for this object
    sprite(sprites.bean),
    // defines a player area to check collision
    area(),
    // its a physical body thats responds to gravity
    body(),
    // 'player' is a tag to ref a player obj in case of have two of the same
    'player'
];