// my custom imports
import { k } from './kaboomLoader.js';
import { createPlayer } from './entities/player/player.js';
import { createEnemy } from './entities/enemy/enemy.js';
import { createFloor } from './objects/floor.js';

// player instance object
const playerInstance = createPlayer();

// enemy instance object
const enemyInstance = createEnemy();

// floor instance object
const floorInstance = createFloor();