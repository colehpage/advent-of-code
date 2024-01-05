import { task } from '../../../lib/src/platform';

export const p2 = (input: string): number => {
	const lines = input.split('\n');

	lines.forEach((line) => {
		console.log(line);
	});

	return 42;
};

await task(p2, {
	year: 2023,
	day: 11,
    part: 2
});
