interface Galaxy {
	row: number;
	col: number;
}

export const parseLines = (lines: string[]): string[][] => {
	const universe = lines.map((line) => line.split(''));
	return universe;
};

const getEmptyRows = (universe: string[][]): number[] => {
	const emptyRows: number[] = [];

	for (let i = 0; i < universe.length; i++) {
		if (universe[i]?.every((col) => col === '.')) {
			emptyRows.push(i);
		}
	}

	return emptyRows;
};

const getEmptyCols = (universe: string[][]): number[] => {
	const emptyCols: number[] = [];

	for (let i = 0; i < (universe[0]?.length || 0); i++) {
		for (let j = 0; j < universe.length; j++) {
			if (universe[j]?.[i] === '#') {
				break;
			}
			if (j === universe.length - 1) {
				emptyCols.push(i);
			}
		}
	}

	return emptyCols;
};

export const getGalaxies = (universe: string[][]): Galaxy[] => {
	const galaxies: Galaxy[] = [];
	const emptyRows = getEmptyRows(universe);
	const emptyCols = getEmptyCols(universe);

	let currRow = 0;
	let currCol = 0;

	universe.forEach((row, index) => {
		if (emptyRows.includes(index)) {
			currRow += 2;
			return;
		}
		row.forEach((col, index) => {
			if (emptyCols.includes(index)) {
				currCol += 2;
				return;
			}
			if (col === '#') {
				galaxies.push({ row: currRow, col: currCol });
			}
			currCol++;
		});
		currCol = 0;
		currRow++;
	});

	return galaxies;
};

export const getManhattanDistance = (a: Galaxy, b: Galaxy): number => {
	return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
};

export const getGalaxyPairs = (galaxies: Galaxy[]): [Galaxy, Galaxy][] => {
	const pairs: [Galaxy, Galaxy][] = [];

	for (let i = 0; i < galaxies.length; i++) {
		for (let j = i + 1; j < galaxies.length; j++) {
			pairs.push([galaxies[i]!, galaxies[j]!]);
		}
	}

	return pairs;
};
