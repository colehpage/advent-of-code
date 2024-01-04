export const parseLines = (lines: string[]): number[][] => {
	return lines.map((line) => line.split(' ').map((str) => parseInt(str)));
};

export const getDiffs = (seq: number[]): number[] => {
	var differences = [];

	for (var i = 1; i < seq.length; i++) {
		differences.push((seq[i] as number) - (seq[i - 1] as number));
	}

	return differences;
};

export const nextNumInSequence = (seq: number[]): number => {
	if (seq.every((num) => num === 0)) {
		return 0;
	}
	const diffs = getDiffs(seq);
	const lastEl = seq[seq.length - 1];
	return nextNumInSequence(diffs) + (lastEl !== undefined ? lastEl : 0);
};

export const prevNumInSequence = (seq: number[]): number => {
	if (seq.every((num) => num === 0)) {
		return 0;
	}
	const diffs = getDiffs(seq);
	const firstEl = seq[0];
	return (firstEl !== undefined ? firstEl : 0) - prevNumInSequence(diffs);
};
