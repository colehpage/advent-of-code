import { task } from '../../../lib/src/platform';
import { parseLine } from './utils';

export const p2 = (input: string) => {
	const lines = input.split('\n');
	const games = lines
		.map(parseLine)
		.map((game) => ({
			red: Math.max(...game.bags.map((bag) => bag.red)),
			green: Math.max(...game.bags.map((bag) => bag.green)),
			blue: Math.max(...game.bags.map((bag) => bag.blue)),
		}))
		.map((game) => game.red * game.green * game.blue);

	return games.reduce((acc, curr) => acc + curr, 0);
};

await task(p2, {
	year: 2023,
	day: 2,
	part: 2,
});
