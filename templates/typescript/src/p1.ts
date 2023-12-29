import { task } from '../../../lib/src/platform';

export const p1 = (input: string) => {
	const lines = input.split('\n');

	lines.forEach((line) => {
		console.log(line);
	});

	return 42;
};

await task(p1, {
	year: <<year>>,
	day: <<day>>,
    part: 1
});
