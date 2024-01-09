import { task } from '../../../lib/src/platform';
import { findMirrorP2, flipPattern, parseLines } from './utils';

export const p2 = (input: string): number => {
	const lines = input.split('\n\n');

	const patterns: string[][] = parseLines(lines);

	let total = 0;

	for (const pattern of patterns) {
		const row = findMirrorP2(pattern);
		total += row * 100;

		const col = findMirrorP2(flipPattern(pattern));
		total += col;
	}

	return total;
};

await task(
	p2,
	{
		year: 2023,
		day: 13,
		part: 2,
	},
	'input.txt',
);
