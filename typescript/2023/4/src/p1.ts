import { task } from '../../../lib/src/platform';
import { parseLine } from './utils';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	const parsedLines = lines.map(parseLine);

	return parsedLines.reduce((acc, card) => acc + card.score, 0);
};

await task(p1, {
	year: 2023,
	day: 4,
	part: 1,
});
