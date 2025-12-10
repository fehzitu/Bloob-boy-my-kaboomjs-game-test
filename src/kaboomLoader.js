// default kaboom import
import kaboom from 'kaboom';

// kaboom() is to initialize an new canvas
export const k = kaboom({
	// default window screen scale
	scale: 1.5,
	// width & height default canvas props
	width: 640,
	height: 360
});

// set the game gravity
k.setGravity(1500);