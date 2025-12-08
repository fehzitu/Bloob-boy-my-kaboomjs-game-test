// my custom imports// import { k } from './kaboomLoader.js'; // use after to import itens and implements using "k."
import { playerMovementSpeed } from './kaboomLoader.js';
import { createPlayer } from './entities/player/player.js';
import { addPlayerControls } from './entities/player/movement.js';
import { createEnemy } from './entities/enemy/enemy.js';
import { createFloor } from './objects/floor.js';

// player instance object
const playerInstance = createPlayer();
addPlayerControls(playerInstance, playerMovementSpeed);

// enemy instance object
const enemyInstance = createEnemy();

// floor instance object
const floorInstance = createFloor();