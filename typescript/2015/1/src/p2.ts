import { task } from '../../../lib/src/platform';

export const p2 = (input: string): number => {
	let floor = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(') {
			floor++;
		} else if (input[i] === ')') {
			floor--;
		}

		if (floor < 0) {
			return i + 1; // 1-indexed
		}
	}

	return -1;
};

await task(p2, {
	year: 2015,
	day: 1,
	part: 2,
});
