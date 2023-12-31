import { task } from '../../../lib/src/platform';
import { parseLine } from './utils';

export const p1 = (input: string) => {
	const lines = input.split('\n');
	const games = lines
		.map(parseLine)
		.filter(
			(game) =>
				game.bags.every((bag) => bag.red <= 12) &&
				game.bags.every((bag) => bag.green <= 13) &&
				game.bags.every((bag) => bag.blue <= 14),
		)
		.map((game) => game.id);

	return games.reduce((acc, curr) => acc + curr, 0);
};

await task(p1, {
	year: 2023,
	day: 2,
	part: 1,
});
