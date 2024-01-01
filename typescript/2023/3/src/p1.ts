import { task } from '../../../lib/src/platform';
import { isDigit } from './utils';

export const p1 = (input: string) => {
	const lines = input.split('\n') as string[];

	const m = lines.length; // height
	const n = lines[0]?.length as number; // width

	const isSymbol = (i: number, j: number) => {
		if (i < 0 || i >= m || j < 0 || j >= n || (!lines[i] ?? !lines[i]?.[j])) return false;
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
			if (isSymbol(i, start - 1) || isSymbol(i, j)) {
				ans += numi;
				continue;
			}

			// Check up/down and diagonals
			for (let k: number = start - 1; k <= j; k++) {
				if (isSymbol(i - 1, k) || isSymbol(i + 1, k)) {
					ans += numi;
					break;
				}
			}
		}
	}
	return ans;
};

await task(p1, {
	year: 2023,
	day: 3,
	part: 1,
});
