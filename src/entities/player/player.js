import { k } from '../../kaboomLoader.js';
import { spriteList } from '../../sprites/spriteList.js';

// player object
export function createPlayer() {
    return k.add([
        // pos is the position where will create this object, the first is a horizontal position and the second is vertical ((0, 0) is the top left point)
        k.pos(0, 0),
        // sprite defines the sprite for this object
        k.sprite(spriteList.player),
        // defines a player area to check collision
        k.area(),
        // its a physical body thats responds to gravity
        k.body(),
        // 'player' is a tag to ref a player obj in case of have two of the same
        'player'
    ]);
};