import { task } from '../../../lib/src/platform';
import { findMirror, flipPattern, parseLines } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n\n');

	const patterns: string[][] = parseLines(lines);

	let total = 0;

	for (const pattern of patterns) {
		const row = findMirror(pattern);
		total += row * 100;

		const col = findMirror(flipPattern(pattern));
		total += col;
	}

	return total;
};

await task(
	p1,
	{
		year: 2023,
		day: 13,
		part: 1,
	},
	'input.txt',
);
