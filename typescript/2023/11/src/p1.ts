import { task } from '../../../lib/src/platform';
import { getGalaxies, getGalaxyPairs, getManhattanDistance, parseLines } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	// add rows and columns to empty rows and columns
	const universe = parseLines(lines);
	const galaxies = getGalaxies(universe);
	const galaxyPairs = getGalaxyPairs(galaxies);

	return galaxyPairs
		.map((pair) => getManhattanDistance(pair[0], pair[1]))
		.reduce((acc, curr) => acc + curr, 0);
};

await task(p1, {
	year: 2023,
	day: 11,
	part: 1,
});
