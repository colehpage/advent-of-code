import { task } from '../../../lib/src/platform';

export const p1 = (input: string): number => {
	const visited = new Set<string>();
	let x = 0;
	let y = 0;
	visited.add(`${x},${y}`);
	for (const c of input) {
		switch (c) {
			case '^':
				y++;
				break;
			case 'v':
				y--;
				break;
			case '>':
				x++;
				break;
			case '<':
				x--;
				break;
		}
		visited.add(`${x},${y}`);
	}

	return visited.size;
};

await task(p1, {
	year: 2015,
	day: 3,
	part: 1,
});
