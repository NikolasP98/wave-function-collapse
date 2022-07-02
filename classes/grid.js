export default class Grid {
	constructor(width, height, cells) {
		this.width = width;
		this.height = height;

		this.resHeight = height / cells;
		this.resWidth = width / cells;
	}

	draw(ctx) {
		ctx.fillStyle = '#fff';
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 3;
		for (let i = 0; i < this.width; i += this.resWidth) {
			for (let j = 0; j < this.height; j += this.resHeight) {
				ctx.rect(i, j, this.resWidth, this.resHeight);
				ctx.fill();
				ctx.stroke();
			}
		}
	}

	update(ctx) {
		this.draw(ctx);
	}
}
