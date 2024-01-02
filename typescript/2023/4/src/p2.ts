import { task } from '../../../lib/src/platform';
import { parseLine } from './utils';

export const p2 = (input: string) => {
	const lines = input.split('\n');

	const parsedLines = lines.map(parseLine);

	parsedLines.forEach((line, lineIdx) => {
		const numMatches = line.matchedNumbers.length;
		for (let i = 1; i <= numMatches; i++) {
			const newCard = parsedLines[lineIdx + i];
			if (newCard) {
				line.p2NewCards.push(newCard);
			}
		}
	});

	for (const line of parsedLines) {
		for (const newCard of line.p2NewCards) {
			newCard.p2CardCount = newCard.p2CardCount + line.p2CardCount;
		}
	}

	return parsedLines.reduce((acc, card) => acc + card.p2CardCount, 0);
};

await task(p2, {
	year: 2023,
	day: 4,
	part: 2,
});
