import { task } from '../../../lib/src/platform';
import { getArrangements, parseLinesP2 } from './utils';

export const p2 = (input: string): number => {
	const lines = input.split('\n');

	const { springs, counts } = parseLinesP2(lines);

	if (!springs || !counts) throw new Error('missing springs and counts!');

	return springs
		.map((val, idx) => getArrangements(val, counts[idx]! as number[]))
		.reduce((acc, curr) => acc + curr, 0);
};

await task(
	p2,
	{
		year: 2023,
		day: 12,
		part: 2,
	},
	'input.txt',
);
