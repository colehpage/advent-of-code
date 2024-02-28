import { task } from '../../../lib/src/platform';

export const p2 = (input: string): number => {
	const santaVisted = new Set<string>();
	const roboVisted = new Set<string>();
	let sx = 0;
	let sy = 0;
	let rx = 0;
	let ry = 0;
	santaVisted.add(`${sx},${sy}`);
	roboVisted.add(`${rx},${ry}`);

	for (let i = 0; i < input.length; i++) {
		const c = input[i];
		let x = i % 2 === 0 ? sx : rx;
		let y = i % 2 === 0 ? sy : ry;
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
		if (i % 2 === 0) {
			santaVisted.add(`${x},${y}`);
			sx = x;
			sy = y;
		} else {
			roboVisted.add(`${x},${y}`);
			rx = x;
			ry = y;
		}
	}

	const mergedSet = new Set([...santaVisted, ...roboVisted]);
	return mergedSet.size;
};

await task(p2, {
	year: 2015,
	day: 3,
	part: 2,
});
