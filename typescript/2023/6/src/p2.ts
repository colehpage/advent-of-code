import { quadratic } from '../../../lib/src/math/common';
import { task } from '../../../lib/src/platform';
import { parseLinesP2 } from './utils';

export const p2 = (input: string): number => {
	const race = parseLinesP2(input);
	let wins = 0;

	// BRUTE FORCE SOLUTION (41.12ms)
	// for (let i = 0; i <= race.t; i++) {
	// 	if ((race.t - i) * i > race.d) wins++;
	// }

	// QUADRATIC SOLUTION (0.17ms)
	// x(t - x) > d
	// x^2 - tx +d = 0 <-- solve for
	// diff between two points on a parabola that crosses the x axis will be the solution
	// a=1, b=-t, c=d
	const [x1, x2] = quadratic(1, -race.t, race.d);
	wins = Math.floor(x2) - Math.ceil(x1) + 1;
	return wins;
};

await task(p2, {
	year: 2023,
	day: 6,
	part: 2,
});
