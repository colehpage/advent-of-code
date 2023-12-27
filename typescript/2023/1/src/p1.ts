import { readFileSync } from 'fs';

export function getTextFromFile(filePath: string): string {
	const text = readFileSync(filePath, 'utf-8');
	return text;
}

export const p1 = async (input: string) => {
	return input
		.split('\n')
		.map((line) => {
			let firstDigit: string | undefined;
			let lastDigit: string | undefined;
			for (let i = 0; i < line.length; i++) {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				const maybeFirstDigit = line[i]!;
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

export const run = async () => {
	const input = await getTextFromFile('./input.txt');
	const result = await p1(input);
	console.log(result);
	return result;
};

run();
