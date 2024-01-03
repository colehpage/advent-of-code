type Card = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
type Hand = [Card, Card, Card, Card, Card];

export enum HandType {
	FIVE_OF_A_KIND = 'five-of-a-kind',
	FOUR_OF_A_KIND = 'four-of-a-kind',
	FULL_HOUSE = 'full-house',
	THREE_OF_A_KIND = 'three-of-a-kind',
	TWO_PAIRS = 'two-pairs',
	ONE_PAIR = 'one-pair',
	HIGH_CARD = 'high-card',
}

export const handTypePowerMap: Record<HandType, number> = {
	[HandType.FIVE_OF_A_KIND]: 6,
	[HandType.FOUR_OF_A_KIND]: 5,
	[HandType.FULL_HOUSE]: 4,
	[HandType.THREE_OF_A_KIND]: 3,
	[HandType.TWO_PAIRS]: 2,
	[HandType.ONE_PAIR]: 1,
	[HandType.HIGH_CARD]: 0,
};

export interface HandWithMeta {
	cards: Hand;
	cardsPower: [number, number, number, number, number];
	handType: HandType;
	bid: number;
}

export const parseLines = (lines: string[], p2 = false): HandWithMeta[] => {
	const hands: HandWithMeta[] = [];
	lines.map((line) => {
		const [hand, bid] = line.split(' ') as [string, string];
		const cards = hand.split('') as Hand;
		const handType = p2 ? getHandTypeJokers(cards) : getHandType(cards);
		const cardsPower = cards.map((card) => {
			switch (card) {
				case 'A':
					return 14;
				case 'K':
					return 13;
				case 'Q':
					return 12;
				case 'J':
					return p2 ? 1 : 11;
				case 'T':
					return 10;
				default:
					return parseInt(card);
			}
		}) as [number, number, number, number, number];

		hands.push({ cards, cardsPower, handType, bid: parseInt(bid) });
	});

	return hands;
};

const getHandType = (hand: Hand): HandType => {
	const cardCounts = hand.reduce(
		(acc, card) => {
			acc[card] = (acc[card] || 0) + 1;
			return acc;
		},
		{} as Record<Card, number>,
	);

	const counts = Object.values(cardCounts);

	if (counts.includes(5)) {
		return HandType.FIVE_OF_A_KIND;
	}

	if (counts.includes(4)) {
		return HandType.FOUR_OF_A_KIND;
	}

	if (counts.includes(3) && counts.includes(2)) {
		return HandType.FULL_HOUSE;
	}

	if (counts.includes(3)) {
		return HandType.THREE_OF_A_KIND;
	}

	if (counts.filter((count) => count === 2).length === 2) {
		return HandType.TWO_PAIRS;
	}

	if (counts.includes(2)) {
		return HandType.ONE_PAIR;
	}

	return HandType.HIGH_CARD;
};

const getHandTypeJokers = (hand: Hand): HandType => {
	const cardCounts = hand.reduce(
		(acc, card) => {
			acc[card] = (acc[card] || 0) + 1;
			return acc;
		},
		{} as Record<Card, number>,
	);

	const jokerCounts = cardCounts['J'];

	const cardCountsNoJokers = Object.fromEntries(
		Object.entries(cardCounts).filter(([key]) => key !== 'J'),
	);

	const counts = Object.values(cardCountsNoJokers);

	if (counts.includes(5) || jokerCounts === 5 || jokerCounts + Math.max(...counts) >= 5) {
		return HandType.FIVE_OF_A_KIND;
	}

	if (counts.includes(4) || jokerCounts + Math.max(...counts) >= 4) {
		return HandType.FOUR_OF_A_KIND;
	}

	if (
		(counts.includes(3) && counts.includes(2)) ||
		(counts.includes(3) && jokerCounts >= 1) ||
		(counts.includes(2) && counts.includes(1) && jokerCounts >= 2) ||
		(counts.filter((count) => count === 2).length === 2 && jokerCounts >= 1)
	) {
		return HandType.FULL_HOUSE;
	}

	if (counts.includes(3) || jokerCounts + Math.max(...counts) >= 3) {
		return HandType.THREE_OF_A_KIND;
	}

	// no way to make two pairs with jokers will always be 3 of a kind or better
	// unless 1 joker and no other pairs which is max 1 pair
	if (counts.filter((count) => count === 2).length === 2) {
		return HandType.TWO_PAIRS;
	}

	if (jokerCounts === 1 || counts.includes(2)) {
		return HandType.ONE_PAIR;
	}

	return HandType.HIGH_CARD;
};

export const compareSamePowerHands = (a: HandWithMeta, b: HandWithMeta): number => {
	if (a.handType === b.handType) {
		for (let i = 0; i < a.cards.length; i++) {
			const ac = a.cardsPower[i]!;
			const bc = b.cardsPower[i]!;
			if (ac > bc) {
				return 1;
			} else if (bc > ac) {
				return -1;
			}
		}

		return 0;
	} else {
		return handTypePowerMap[a.handType] - handTypePowerMap[b.handType];
	}
};
