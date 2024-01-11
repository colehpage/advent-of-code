import { task } from '../../../lib/src/platform';
import { load, tilt, transpose } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	return transpose(lines)
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
