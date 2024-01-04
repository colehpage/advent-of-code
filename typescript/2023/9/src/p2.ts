import { task } from '../../../lib/src/platform';
import { parseLines, prevNumInSequence } from './utils';

export const p2 = (input: string): number => {
	const lines = input.split('\n');

	const parsedLines = parseLines(lines);

	return parsedLines.map((line) => prevNumInSequence(line)).reduce((a, b) => a + b);
};

await task(p2, {
	year: 2023,
	day: 9,
	part: 2,
});
