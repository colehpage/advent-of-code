import { task } from '../../../lib/src/platform';
import { parseInput } from './utils';

function zip<T>(arr1: T[], arr2: T[]): [T, T][] {
	return arr1.map((item, index) => [item, arr2[index]!]);
}

function getSeedRangePairs(seeds: number[]): [number, number][] {
	return zip(
		seeds.filter((_, index) => index % 2 === 0),
		seeds.filter((_, index) => index % 2 !== 0),
	);
}

export const p2 = (input: string): number => {
	const parsedInput = parseInput(input);
	const { seeds } = parsedInput;
	const seedRangePairs: [number, number][] = getSeedRangePairs(seeds);

	const sections = input.split('\n\n');
	const iterableMaps = sections.slice(1).map((x) =>
		x
			.split('\n')
			.slice(1)
			.map((y) => y.split(' ').map((z) => parseInt(z))),
	);

	const resultArray = [];

	function expand(index: number, rangePair: [number, number]): [number, number][] {
		if (index == iterableMaps.length) return [rangePair];

		const result = [];
		for (const [destination, source, range] of iterableMaps[index]!) {
			if (!source || !range || !destination) continue;
			if (
				rangePair[0] < source &&
				rangePair[0] + rangePair[1] > source &&
				rangePair[0] + rangePair[1] <= source + range
			) {
				const firstTuple = [rangePair[0], source - rangePair[0]] as [number, number];
				const lastTuple = [destination, rangePair[1] - source + rangePair[0]] as [
					number,
					number,
				];
				result.push(...expand(index + 1, lastTuple), ...expand(index, firstTuple));
				break;
			} else if (
				rangePair[0] >= source &&
				rangePair[0] < source + range &&
				rangePair[0] + rangePair[1] > source + range
			) {
				const firstTuple = [
					destination + rangePair[0] - source,
					source + range - rangePair[0],
				] as [number, number];
				const lastTuple = [
					source + range,
					rangePair[0] + rangePair[1] - source - range,
				] as [number, number];
				result.push(...expand(index + 1, firstTuple), ...expand(index, lastTuple));
				break;
			} else if (rangePair[0] >= source && rangePair[0] + rangePair[1] <= source + range) {
				result.push(
					...expand(index + 1, [destination + rangePair[0] - source, rangePair[1]]),
				);
				break;
			} else if (rangePair[0] < source && rangePair[0] + rangePair[1] > source + range) {
				const firstTuple = [rangePair[0], source - rangePair[0]] as [number, number];
				const middleTuple = [destination, range] as [number, number];
				const lastTuple = [
					source + range,
					rangePair[0] + rangePair[1] - source - range,
				] as [number, number];
				result.push(
					...expand(index, lastTuple),
					...expand(index + 1, middleTuple),
					...expand(index, firstTuple),
				);
				break;
			}
		}

		if (result.length == 0) result.push(...expand(index + 1, rangePair));
		return result;
	}

	for (const seedRangePair of seedRangePairs) {
		resultArray.push(expand(0, seedRangePair));
	}

	return Math.min(...resultArray.flat().map((x) => x[0]));
};

await task(p2, {
	year: 2023,
	day: 5,
	part: 2,
});
