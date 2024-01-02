import { splitIntoStringPair } from '../../../lib/src/string';

export interface Card {
	id: number;
	winningNumbers: number[];
	myNumbers: number[];
	matchedNumbers: number[];
	score: number;
	p2NewCards: Card[];
	p2CardCount: number;
}

export const parseLine = (line: string): Card => {
	const [rawCardId, numbers] = splitIntoStringPair(line, ': ');
	const [_, id] = splitIntoStringPair(rawCardId, 'Card ');
	const [rawWinning, rawMine] = splitIntoStringPair(numbers, ' | ');
	const winning = rawWinning
		.split(' ')
		.filter((num) => !!num)
		.map((rawNumber) => parseInt(rawNumber));
	const mine = rawMine
		.split(' ')
		.filter((num) => !!num)
		.map((rawNumber) => parseInt(rawNumber));
	const matched = winning.filter((number) => mine.includes(number));
	let score = 0;
	for (let i = 0; i < matched.length; i++) {
		score = score * 2 || 1;
	}

	return {
		id: parseInt(id),
		winningNumbers: winning,
		myNumbers: mine,
		matchedNumbers: matched,
		score,
		p2NewCards: [],
		p2CardCount: 1,
	};
};
