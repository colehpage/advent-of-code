import { task } from '../../../lib/src/platform/index.js';

export const p1 = (input: string) => {
	return input
		.split('\n')
		.map((line) => {
			let firstDigit: string | undefined;
			let lastDigit: string | undefined;
			for (let i = 0; i < line.length; i++) {
				const maybeFirstDigit = line[i]!;
				const maybeLastDigit = line[line.length - i - 1]!;

				if (firstDigit === undefined && /\d/.test(maybeFirstDigit)) {
					firstDigit = maybeFirstDigit;
				}

				if (lastDigit === undefined && /\d/.test(maybeLastDigit)) {
					lastDigit = maybeLastDigit;
				}

				if (firstDigit !== undefined && lastDigit !== undefined) {
					break;
				}
			}

			return parseInt((firstDigit ?? '') + (lastDigit ?? ''));
		})
		.reduce((acc, curr) => acc + curr, 0);
};

await task(p1, {
	year: 2023,
	day: 1,
	part: 1,
});
