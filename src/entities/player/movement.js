import { k } from '../../kaboomLoader.js';

export function addPlayerControls(player) {
    // jumps counter
    let jumps = 0;
    // max jumps counter
    const maxJumps = 2;

    // jump reset when player touch the ground
    player.onGround(() => {
        jumps = 0;
    });

    player.onUpdate(() => {
        // set camera on player
        k.camPos(player.pos.x, player.pos.y);
    });

    k.onKeyDown('a', () => {
        // move left
        player.move(-player.speed, 0);
    });

    k.onKeyDown('d', () => {
        // move right
        player.move(player.speed, 0);
    });

    k.onKeyPress('w', () => {
        // jumps (with double jump check)
        if (jumps < maxJumps) {
            // jump force
            player.jump(420);
            jumps++;
        };
    });

    // make player collect apple's
    k.onCollide('apple', 'player', (apple) => {
        // destroy the apple
        apple.destroy();
    });

    // make player respawn when touch void
    k.onCollide('player', 'levelVoid', (levelVoid) => {
        // respawn player
        player.pos.x = 128;
        player.pos.y = 128;
    });
};