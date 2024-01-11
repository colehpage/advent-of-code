export const rotate = (lines: string[]) => {
	const rocks: string[] = [];
	const vlen = lines.length;
	for (let i = 0; i < vlen; i++) {
		rocks.push(lines.reduce((acc, h) => acc + h[i], ''));
	}
	return rocks;
};

export const tilt = (line: string) => {
	return line
		.split('#')
		.map((s) => s.split('').sort().reverse().join(''))
		.join('#');
};

export const load = (line: string) => {
	const len = line.length;
	let load = 0;
	for (let i = 0; i <= len; i++) {
		if (line[i] === 'O') {
			load = load + (len - i);
		}
	}
	return load;
};
