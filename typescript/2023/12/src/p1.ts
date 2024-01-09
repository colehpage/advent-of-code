import { task } from '../../../lib/src/platform';
import { getArrangements, parseLines } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	const { springs, counts } = parseLines(lines);

	if (!springs || !counts) throw new Error('missing springs and counts!');

	return springs
		.map((val, idx) => getArrangements(val, counts[idx]! as number[]))
		.reduce((acc, curr) => acc + curr, 0);
};

await task(
	p1,
	{
		year: 2023,
		day: 12,
		part: 1,
	},
	'input.txt',
);
