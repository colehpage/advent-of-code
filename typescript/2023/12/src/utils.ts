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

// recursion or dp - going with recursion here...
export const getArrangements = (springs: string[], counts: number[]): number => {
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
};
