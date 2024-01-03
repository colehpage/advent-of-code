import { task } from '../../../lib/src/platform';
import { compareSamePowerHands, parseLines, type HandWithMeta } from './utils';

export const p2 = (input: string): number => {
	const lines = input.split('\n');

	const hands = parseLines(lines, true) as HandWithMeta[];

	hands.sort((a, b) => {
		return compareSamePowerHands(a, b);
	});

	return hands
		.map((hand, idx) => {
			return hand.bid * (idx + 1);
		})
		.reduce((acc, val) => acc + val, 0);
};

await task(p2, {
	year: 2023,
	day: 7,
	part: 2,
});
