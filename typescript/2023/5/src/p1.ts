import { task } from '../../../lib/src/platform';
import { parseInput, seedToLocation } from './utils';

export const p1 = (input: string): number => {
	const parsedInput = parseInput(input);
	const { seeds, maps } = parsedInput;
	const locations = seeds.map((seed) => seedToLocation(seed, maps));

	return Math.min(...locations);
};

await task(p1, {
	year: 2023,
	day: 5,
	part: 1,
});
