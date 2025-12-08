import { k } from '../../kaboomLoader.js';

export function addPlayerControls(player) {
    player.onUpdate(() => {
        // get player velocity
        let vel = player.vel.x;

        // set camera on player
        camPos(player.pos.x, player.pos.y);

        // if player is on air don't play idle animation
        if (!player.isGrounded()) return;

        // set idle animation when player touch the ground
        if (vel == 0 && player.curAnim() != 'idle') {
            player.play('idle');
        };
    });

    k.onKeyDown('a', () => {
        // move left
        player.move(-player.speed, 0);
    });

    k.onKeyDown('d', () => {
        // move right
        player.move(player.speed, 0);
    });

    k.onKeyDown('w', () => {
        // jump
        if (player.isGrounded()) {
            // play jump animation when "w" is pressed
            player.play('jump');
            // jump force
            player.jump(420);
        };
    });
};