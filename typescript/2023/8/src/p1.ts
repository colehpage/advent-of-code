import { task } from '../../../lib/src/platform';
import { parseLines, walkPaths } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	const [directions, nodes] = parseLines(lines);

	return walkPaths(directions, nodes, 'AAA', (str) => str === 'ZZZ');
};

await task(p1, {
	year: 2023,
	day: 8,
	part: 1,
});
