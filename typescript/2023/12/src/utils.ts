export const parseLines = (lines: string[]): { springs: string[][]; counts: number[][] } => {
	const springs: string[][] = [];
	const counts: number[][] = [];
	lines.forEach((line) => {
		const [l, r] = line.split(' ');
		if (l) springs.push(l.split(''));
		if (r) counts.push(r.split(',').map((c) => parseInt(c)));
	});

	return { springs, counts };
};

export const parseLinesP2 = (lines: string[]): { springs: string[][]; counts: number[][] } => {
	const springs: string[][] = [];
	const counts: number[][] = [];
	lines.forEach((line) => {
		const [l, r] = line.split(' ');
		if (l) springs.push(Array(6).join(`${l}?`).slice(0, -1).split(''));
		if (r) counts.push(r.split(',').map((c) => parseInt(c)));
	});

	const countsUnfolded = counts.map((c) => Array(5).fill(c).flat());

	return { springs, counts: countsUnfolded };
};

export function memoize<TArgs extends unknown[], TResult>(fn: Function): Function {
	const cache = new Map<string, TResult>();

	return (...args: TArgs) => {
		const cacheKey = JSON.stringify(args);

		if (cache.has(cacheKey)) {
			return cache.get(cacheKey);
		}

		const result = fn(...args);
		cache.set(cacheKey, result);

		return result;
	};
}

// recursion or dp - going with recursion here...
export const getArrangements = memoize((springs: string[], counts: number[]): number => {
	if (springs.length === 0) return counts.length === 0 ? 1 : 0;
	if (counts.length === 0) return springs.includes('#') ? 0 : 1;
	let res = 0;
	if (springs[0] === '.' || springs[0] === '?') {
		res += getArrangements(springs.slice(1), counts);
	}

	if (springs[0] === '?' || springs[0] === '#') {
		if (
			counts[0]! <= springs.length &&
			!springs.slice(0, counts[0]!).includes('.') &&
			(counts[0] === springs.length || springs[counts[0]!] !== '#')
		) {
			res += getArrangements(springs.slice(counts[0]! + 1), counts.slice(1));
		} else {
			res += 0;
		}
	}

	return res;
});
