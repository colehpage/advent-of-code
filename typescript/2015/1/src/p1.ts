import { task } from '../../../lib/src/platform';

export const p1 = (input: string): number => {
	let floor = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(') {
			floor++;
		} else if (input[i] === ')') {
			floor--;
		}
	}

	return floor;
};

await task(p1, {
	year: 2015,
	day: 1,
	part: 1,
});
