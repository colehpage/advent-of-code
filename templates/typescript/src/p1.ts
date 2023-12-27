import { readFileSync } from 'fs';

export function getTextFromFile(filePath: string): string {
	const text = readFileSync(filePath, 'utf-8');
	return text;
}

export const p1 = async (input: string) => {
	const lines = input.split('\n');

	lines.forEach((line) => {
		console.log(line);
	});

	return 42;
};

export const run = async () => {
	const input = await getTextFromFile('./input.txt');
	const result = await p1(input);
	console.log(result);
	return result;
};

run();
