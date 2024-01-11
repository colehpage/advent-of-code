import { task } from '../../../lib/src/platform';
import { load, rotate, tilt } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	return rotate(lines)
		.map(tilt)
		.map(load)
		.reduce((acc, curr) => acc + curr, 0);
};

await task(
	p1,
	{
		year: 2023,
		day: 14,
		part: 1,
	},
	'input.txt',
);
