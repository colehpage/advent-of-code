import { splitIntoStringPair } from '../../../lib/src/string';

export interface Bag {
	red: number;
	green: number;
	blue: number;
}

export interface Game {
	id: number;
	bags: Bag[];
}

const isColor = (s: string | undefined): s is keyof Bag =>
	s === 'red' || s === 'green' || s === 'blue';

const parseBag = (bag: string) => {
	const parsedBag: Bag = {
		red: 0,
		green: 0,
		blue: 0,
	};

	// split cubes (or potential cubes)
	const [c1, c2, c3] = bag.split(', ');

	// split cube into value and color
	const [c1v, c1c] = c1?.trim()?.split(' ') ?? [];
	const [c2v, c2c] = c2?.trim()?.split(' ') ?? [];
	const [c3v, c3c] = c3?.trim()?.split(' ') ?? [];

	const c1vi = !c1v ? null : parseInt(c1v);
	if (isColor(c1c) && c1vi) {
		parsedBag[c1c] = c1vi;
	}
	const c2vi = !c2v ? null : parseInt(c2v);
	if (isColor(c2c) && c2vi) {
		parsedBag[c2c] = c2vi;
	}
	const c3vi = !c3v ? null : parseInt(c3v);
	if (isColor(c3c) && c3vi) {
		parsedBag[c3c] = c3vi;
	}

	return parsedBag;
};

export const parseLine = (line: string) => {
	const [rawGameId, data] = splitIntoStringPair(line, ': ');
	const [, gameId] = splitIntoStringPair(rawGameId, ' ');

	return {
		id: parseInt(gameId),
		bags: data.split('; ').map(parseBag),
	} as Game;
};
