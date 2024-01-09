export const parseLines = (lines: string[]): string[][] => {
	return lines.map((line) => line.split('\n'));
};

export const findMirror = (pattern: string[]): any => {
	for (let i = 1; i < pattern.length; i++) {
		let above = pattern.slice(0, i).reverse();
		let below = pattern.slice(i);

		above = above.slice(0, below.length);
		below = below.slice(0, above.length);

		if (above.join() === below.join()) {
			return i;
		}
	}
	return 0;
};

const getDifference = (a: string, b: string) => a.split('').filter((c, i) => c != b[i]).length;

export const findMirrorP2 = (pattern: string[]): any => {
	for (let i = 1; i < pattern.length; i++) {
		let above = pattern.slice(0, i).reverse();
		let below = pattern.slice(i);

		above = above.slice(0, below.length);
		below = below.slice(0, above.length);

		for (let i = 1; i < pattern.length; i++) {
			let diff = 0;
			for (let j = 0; j < Math.min(pattern.length - i, i); j++) {
				// @ts-ignore
				diff = diff + getDifference(pattern[i + j], pattern[i - j - 1]);
				if (diff > 1) {
					break;
				}
			}
			if (diff === 1) {
				return i;
			}
		}
		return 0;
	}
};

export const flipPattern = (pattern: string[]): string[] => {
	const flippedPattern: string[] = [];
	const numRows = pattern.length;
	const numCols = pattern[0]?.length ?? 0;

	for (let col = 0; col < numCols; col++) {
		flippedPattern[col] = '';
		for (let row = 0; row < numRows; row++) {
			flippedPattern[col] += pattern?.[row]?.[col] ?? '';
		}
	}

	return flippedPattern;
};
