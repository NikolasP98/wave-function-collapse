import Grid from './classes/grid.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let grid;

const setup = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	grid = new Grid(canvas.width, canvas.height, 9);

	window.requestAnimationFrame(animate);
};

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	grid.update(ctx);
	window.requestAnimationFrame(animate);
};

/* ---------------------------
   ----- EVENT LISTENERS -----
   --------------------------- */

// run setup function
window.onload = () => {
	setup();
};

// change canvas size as browser window resizes
window.addEventListener('resize', () => {
	setup();
});
