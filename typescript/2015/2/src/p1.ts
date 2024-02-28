import { task } from '../../../lib/src/platform';

export const p1 = (input: string): number => {
	const lines = input.split('\n');

	let output = 0;

	lines.forEach((line) => {
		const [l, w, h] = line.split('x').map(Number) as [number, number, number];
		const smallestSide = Math.min(l * w, w * h, h * l);
		const area = 2 * l * w + 2 * w * h + 2 * h * l;
		output += area + smallestSide;
	});

	return output;
};

await task(p1, {
	year: 2015,
	day: 2,
	part: 1,
});
