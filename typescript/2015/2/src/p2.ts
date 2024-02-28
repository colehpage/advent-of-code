import { task } from '../../../lib/src/platform';

export const p2 = (input: string): number => {
	const lines = input.split('\n');

	let output = 0;

	lines.forEach((line) => {
		const [l, w, h] = line.split('x').map(Number) as [number, number, number];
		const cubicVolume = l * w * h;
		const smallestPerimeter = Math.min(2 * (l + w), 2 * (w + h), 2 * (h + l));
		output += smallestPerimeter + cubicVolume;
	});

	return output;
};

await task(p2, {
	year: 2015,
	day: 2,
	part: 2,
});
