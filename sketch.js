
class Grid {
	constructor() {
		this.cells = []
	}

	addCell (x, y, w, h) {
		this.cells.push({ row: (x / w), col: (y / h), w, h, shape: rect(x, y, w, h), pop: false })
	}

	colorAllCells () {
		this.cells.forEach(e => {
			fill(233, 0, 255)
			rect(e.x, e.y, e.w, e.h)
			e.pop = true
		})
	}

	nextGeneration () {
		this.cells.forEach(e => {




		})

	}

	startPattern () {

		this.cells.forEach(e => {

			if (e.y === 260) {
				this.colorCells(e);


			}

		})

	}

	colorCells (e) {
		fill(233, 0, 255)
		rect(e.x, e.y, e.w, e.h)
		e.painted = true
		fill(255, 255, 255)
	}

}

var grid = new Grid()
const width = 600;
const height = 600;

function setup () {

	createCanvas(600, 600);

	background(0, 0, 0)

}

let x = 0;
function draw () {


	let x = 0;
	cellDim = 20
	for (let y = 0; y < height; y += cellDim) {
		for (let x = 0; x < width; x += cellDim) {

			this.grid.addCell(x, y, cellDim, cellDim)
		}
	}

	this.grid.startPattern()
	setInterval(this.grid.nextGeneration(), 10000);

}