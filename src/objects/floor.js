import { k } from '../kaboomLoader.js';

// floor object
export function createFloor() {
    return k.add([
        // rect is to make a rectangle
        k.rect(750, 16),
        // on pos the first num is to horizontal, and the second is to vertical
        k.pos(-50, 150),
        k.area(),
        // color is only used if the object don't have sprite
        k.color(127, 200, 255),
        k.body({ isStatic: true })
    ]);
};