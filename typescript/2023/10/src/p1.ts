import { task } from '../../../lib/src/platform';
import { getLoop, getStart, getTiles, parseLines } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	const parsedLines = parseLines(lines);
	const start = getStart(parsedLines);
	if (!start) {
		throw new Error('start not found');
	}
	const tiles = getTiles(parsedLines);
	const loop = getLoop(tiles, start);
	return loop.length / 2;
};

await task(p1, {
	year: 2023,
	day: 10,
	part: 1,
});
