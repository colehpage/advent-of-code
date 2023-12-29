import { NEWLINE } from '../regex/index.js';

export const split = (input: string, keepEmptyLines = false): string[] => {
	const split = input.split(NEWLINE);
	return keepEmptyLines ? split : split.filter((line) => !!line);
};
