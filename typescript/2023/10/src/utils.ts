const Tile = {
	// | is a vertical pipe connecting north and south.
	NS: 'NorthSouth',
	// - is a horizontal pipe connecting east and west.
	EW: 'EastWest',
	// L is a 90-degree bend connecting north and east.
	NE: 'NorthEast',
	// J is a 90-degree bend connecting north and west.
	NW: 'NorthWest',
	// 7 is a 90-degree bend connecting south and west.
	SW: 'SouthWest',
	// F is a 90-degree bend connecting south and east.
	SE: 'SouthEast',
	// . is ground; there is no pipe in this tile.
	G: 'Ground',
	// S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn’t show what shape the pipe has.
	S: 'Start',
};

const symbolMap: { [key: string]: Tile } = {
	'|': Tile.NS,
	'-': Tile.EW,
	L: Tile.NE,
	J: Tile.NW,
	'7': Tile.SW,
	F: Tile.SE,
	'.': Tile.G,
	S: Tile.S,
};

interface Coord {
	row: number;
	col: number;
}

export const parseLines = (lines: string[]): string[][] => {
	return lines.map((line) => {
		return line.split('');
	});
};

export const getStart = (parsedLines: string[][]): Coord => {
	for (let i = 0; i < parsedLines.length; i++) {
		for (let j = 0; j < parsedLines[i].length; j++) {
			if (parsedLines[i][j] === 'S') {
				return { row: i, col: j };
			}
		}
	}
	return { row: -1, col: -1 };
};

export const getTiles = (lines: string[][]): Tile[][] => {
	return lines.map((line) => {
		return line.map((c) => {
			return symbolMap[c] as Tile;
		});
	});
};

const getValidNeighbors = (tiles: Tile[][], coord: Coord): Coord[] => {
	let maxHeight = tiles.length - 1;
	let maxWidth = tiles[0].length - 1;
	const neighbors: Coord[] = [];
	const currType = tiles[coord.row][coord.col];

	switch (currType) {
		case Tile.G:
			break;
		case Tile.S:
			// NORTH
			if (coord.row > 0) {
				const tile = tiles[coord.row - 1][coord.col];
				if (tile === Tile.NS || tile === Tile.SE || tile === Tile.NE) {
					neighbors.push({ row: coord.row - 1, col: coord.col });
				}
			}
			// SOUTH
			if (coord.row < maxHeight) {
				const tile = tiles[coord.row + 1][coord.col];
				if (tile === Tile.NS || tile === Tile.NW || tile === Tile.NE) {
					neighbors.push({ row: coord.row + 1, col: coord.col });
				}
			}
			// WEST
			if (coord.col > 0) {
				const tile = tiles[coord.row][coord.col - 1];
				if (tile === Tile.EW || tile === Tile.NE || tile === Tile.SE) {
					neighbors.push({ row: coord.row, col: coord.col - 1 });
				}
			}
			// EAST
			if (coord.col < maxWidth) {
				const tile = tiles[coord.row][coord.col + 1];
				if (tile === Tile.EW || tile === Tile.NW || tile === Tile.SW) {
					neighbors.push({ row: coord.row, col: coord.col + 1 });
				}
			}
			break;
		case Tile.NS:
			// NORTH
			if (coord.row > 0) {
				const tile = tiles[coord.row - 1][coord.col];
				if ([Tile.NS, Tile.SW, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row - 1, col: coord.col });
				}
			}
			// SOUTH
			if (coord.row < maxHeight && tiles[coord.row + 1][coord.col] !== Tile.G) {
				const tile = tiles[coord.row + 1][coord.col];
				if ([Tile.NS, Tile.NW, Tile.NE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row + 1, col: coord.col });
				}
			}
			break;
		case Tile.EW:
			// WEST
			if (coord.col > 0) {
				const tile = tiles[coord.row][coord.col - 1];
				if ([Tile.EW, Tile.NE, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col - 1 });
				}
			}
			// EAST
			if (coord.col < maxWidth) {
				const tile = tiles[coord.row][coord.col + 1];
				if ([Tile.EW, Tile.NW, Tile.SW, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col + 1 });
				}
			}
			break;
		case Tile.NE:
			// NORTH
			if (coord.row > 0) {
				const tile = tiles[coord.row - 1][coord.col];
				if ([Tile.NS, Tile.SW, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row - 1, col: coord.col });
				}
			}
			// EAST
			if (coord.col < maxWidth) {
				const tile = tiles[coord.row][coord.col + 1];
				if ([Tile.EW, Tile.NW, Tile.SW, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col + 1 });
				}
			}
			break;
		case Tile.NW:
			// NORTH
			if (coord.row > 0) {
				const tile = tiles[coord.row - 1][coord.col];
				if ([Tile.NS, Tile.SW, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row - 1, col: coord.col });
				}
			}
			// WEST
			if (coord.col > 0) {
				const tile = tiles[coord.row][coord.col - 1];
				if ([Tile.EW, Tile.NE, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col - 1 });
				}
			}
			break;
		case Tile.SW:
			// SOUTH
			if (coord.row < maxHeight) {
				const tile = tiles[coord.row + 1][coord.col];
				if ([Tile.NS, Tile.NW, Tile.NE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row + 1, col: coord.col });
				}
			}
			// WEST
			if (coord.col > 0) {
				const tile = tiles[coord.row][coord.col - 1];
				if ([Tile.EW, Tile.NE, Tile.SE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col - 1 });
				}
			}
			break;
		case Tile.SE:
			// SOUTH
			if (coord.row < maxHeight) {
				const tile = tiles[coord.row + 1][coord.col];
				if ([Tile.NS, Tile.NW, Tile.NE, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row + 1, col: coord.col });
				}
			}
			// EAST
			if (coord.col < maxWidth) {
				const tile = tiles[coord.row][coord.col + 1];
				if ([Tile.EW, Tile.NW, Tile.SW, Tile.S].includes(tile)) {
					neighbors.push({ row: coord.row, col: coord.col + 1 });
				}
			}
			break;
	}
	return neighbors;
};

export const getLoop = (tiles: (typeof Tile)[][], start: Coord): Coord[] => {
	const loopCoords: Coord[] = [];
	const toVisit: Coord[] = getValidNeighbors(tiles, start);

	loopCoords.push(start);

	while (toVisit.length > 0) {
		const curr = toVisit.pop()!;
		const currNeighbors = getValidNeighbors(tiles, curr);
		for (const neighbor of currNeighbors) {
			if (
				!loopCoords.some(
					(coord) => coord.row === neighbor.row && coord.col === neighbor.col,
				)
			) {
				toVisit.push(neighbor);
				loopCoords.push(neighbor);
			}
		}
	}

	return loopCoords;
};
