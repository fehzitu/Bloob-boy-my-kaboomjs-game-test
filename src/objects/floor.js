export const floor = add([
    // rect is to make a rectangle
    rect(width(), 32),
    // on pos the first num is to horizontal, and the second is to vertical
    pos(0, height() - 32),
    area(),
    // color is only used if the object don't have sprite
    color(127, 200, 255),
    body({ isStatic: true })
]);