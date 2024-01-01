import { task } from '../../../lib/src/platform';
import { isDigit } from './utils';

export const p2 = (input: string) => {
	const lines = input.split('\n') as string[];

	const m = lines.length; // height
	const n = lines[0]?.length as number; // width

	const gears: number[][][] = Array.from(Array(n), () => Array.from(Array(m), () => []));

	const isSymbol = (i: number, j: number, num: number) => {
		if (i < 0 || i >= m || j < 0 || j >= n || (!lines[i] ?? !lines[i]?.[j])) return false;

		if (lines?.[i]?.[j] == '*') {
			gears[i][j] = [...gears[i][j], num] || [num];
		}

		return lines[i]?.[j] !== '.' && !isDigit(lines[i]?.[j]);
	};

	let ans: number = 0;

	for (let i: number = 0; i < m; i++) {
		let start: number = 0;
		let j: number = 0;
		const line = lines[i];

		while (j < m && line) {
			start = j;
			let num: string = '';
			let numi: number = 0;

			while (j < m && isDigit(line[j])) {
				num += line[j];
				j++;
			}

			if (num === '') {
				j++;
				continue;
			}

			numi = parseInt(num);

			// Number ended, check left/right
			isSymbol(i, start - 1, numi) || isSymbol(i, j, numi);

			// Check up/down and diagonals
			for (let k: number = start - 1; k <= j; k++) {
				isSymbol(i - 1, k, numi) || isSymbol(i + 1, k, numi);
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (lines[i]?.[j] == '*' && gears[i][j].length === 2) {
				ans += gears[i][j][0] * gears[i][j][1];
			}
		}
	}

	return ans;
};

await task(p2, {
	year: 2023,
	day: 3,
	part: 2,
});
