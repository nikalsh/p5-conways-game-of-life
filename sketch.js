const width = 600
const height = 600
const cellDim = 20
const rowLen = width / cellDim
const coLen = height / cellDim

class Grid {
	constructor() {
		this.cells = []
		this.dirs = [
			1,
			-1,
			-rowLen,
			rowLen,
			1 - rowLen,
			-1 - rowLen,
			1 + rowLen,
			-1 + rowLen,
		]
	}

	addCell(x, y, w, h) {
		this.cells.push({
			x,
			y,
			row: x / w,
			col: y / h,
			w,
			h,
			shape: rect(x, y, w, h),
			populated: false,
			lives: false,
		})
	}

	tick() {
		this.nextGeneration()
		this.cells.forEach(e => {
			e.lives ? this.birthCell(e) : this.killCell(e)
		})
	}

	nextGeneration() {
		this.cells.forEach(e => {
			let index = this.cells.indexOf(e)
			let adjacent = 0

			try {
				for (let i = 0; i < this.dirs.length; i++) {
					if (this.cells[index + this.dirs[i]].populated) {
						adjacent++
					}
				}
			} catch (err) {
				// out of array bounds
			}
			//ruleset -
			//living cells
			if (e.populated) {
				if (adjacent < 2) {
					e.lives = false
				} else if (adjacent > 3) {
					e.lives = false
				} else if (adjacent === 2 || adjacent === 3) {
					e.lives = true
				}
				//dead cells
			} else {
				if (adjacent === 3) {
					e.lives = true
				}
			}
		})
	}

	birthCell(e) {
		fill(233, 0, 255)
		rect(e.x, e.y, e.w, e.h)
		e.populated = true
		fill(255, 255, 255)
	}

	killCell(e) {
		fill(255, 255, 255)
		rect(e.x, e.y, e.w, e.h)
		e.populated = false
		fill(255, 255, 255)
	}

	initPattern() {
		this.cells.forEach(e => {
			if (e.col === 10) {
				if (e.row > 10 && e.row < 20) {
					this.birthCell(e)
				}
			}
		})
	}
}

var grid = new Grid()

function setup() {
	createCanvas(width, height)
	background(0, 0, 0)
	let x = 0
	for (let y = 0; y < height; y += cellDim) {
		for (let x = 0; x < width; x += cellDim) {
			this.grid.addCell(x, y, cellDim, cellDim)
		}
	}
	this.grid.initPattern()
}

function draw() {
	this.grid.initPattern()
	this.grid.tick()
}
