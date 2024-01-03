import { task } from '../../../lib/src/platform';
import { parseLinesP1 } from './utils';

export const p1 = (input: string): number => {
	const races = parseLinesP1(input);
	const wins = races.map((race) => {
		let wins = 0;
		for (let i = 0; i <= race.t; i++) {
			if ((race.t - i) * i > race.d) wins++;
		}
		return wins;
	});

	return wins.reduce((acc, curr) => acc * curr, 1);
};

await task(p1, {
	year: 2023,
	day: 6,
	part: 1,
});
