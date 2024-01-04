import { task } from '../../../lib/src/platform';
import { nextNumInSequence, parseLines } from './utils';

// Pascals Triangle
export const p1 = (input: string): number => {
	const lines = input.split('\n');

	const parsedLines = parseLines(lines);

	return parsedLines.map((line) => nextNumInSequence(line)).reduce((a, b) => a + b);
};

await task(p1, {
	year: 2023,
	day: 9,
	part: 1,
});
