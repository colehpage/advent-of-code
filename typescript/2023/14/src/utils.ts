export const transpose = (lines: string[]) => {
	const platform: string[] = [];
	const vlen = lines.length;
	for (let i = 0; i < vlen; i++) {
		platform.push(lines.reduce((acc, h) => acc + h[i], ''));
	}
	return platform;
};

export const tilt = (line: string) => {
	return line
		.split('#')
		.map((s) => s.split('').sort().reverse().join(''))
		.join('#');
};

export const load = (line: string) => {
	const len = line.length;
	let load = 0;
	for (let i = 0; i <= len; i++) {
		if (line[i] === 'O') {
			load = load + (len - i);
		}
	}
	return load;
};

export const loadP2 = (platform: string[][]) => {
	let res = 0;
	for (let row = 0; row < platform.length; ++row) {
		for (let col = 0; col < platform[0]!.length; ++col) {
			if (platform[row]![col] === 'O') res += platform.length - row;
		}
	}
	return res;
};

// clockwise 90deg (x, y) -> (y, -x)
const rotate = (grid: string[][]): string[][] => {
	const size = grid.length;
	const rotated: string[][] = [];

	for (let col = 0; col < size; col++) {
		const newRow: string[] = [];
		for (let row = 0; row < size; row++) {
			newRow.push(grid[size - 1 - row]![col]!);
		}
		rotated.push(newRow);
	}

	return rotated;
};

export const cycle = (platform: string[][]) => {
	for (let i = 0; i < 4; i++) {
		platform = rollNorth(platform);
		platform = rotate(platform);
	}
	return platform;
};

export const rollNorth = (platform: string[][]): string[][] => {
	for (let i = 0; i < platform.length; i++) {
		for (let j = 0; j < platform[i]!.length; j++) {
			if (platform[i]![j] == 'O') {
				for (let k = i - 1; k >= 0 && platform[k]![j] == '.'; k--) {
					platform[k]![j] = 'O';
					platform[k + 1]![j] = '.';
				}
			}
		}
	}
	return platform;
};
