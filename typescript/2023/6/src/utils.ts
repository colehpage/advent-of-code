export interface Race {
	t: number;
	d: number;
}

export const parseLinesP1 = (input: string): Race[] => {
	const races: Race[] = [];
	const lines = input.split('\n');

	for (const line of lines) {
		const [, ...x] = line.split(/ +/g);
		const values = x.map((x) => parseInt(x));
		if (line.startsWith('Time')) {
			for (const value of values) {
				races.push({ t: value, d: -1 });
			}
		} else {
			for (let i = 0; i < values.length; i++) {
				races[i]!.d = values[i]!;
			}
		}
	}
	return races;
};

export const parseLinesP2 = (input: string): Race => {
	const race: Race = { t: -1, d: -1 };
	const lines = input.split('\n');

	for (const [idx, line] of lines.entries()) {
		const val = line.replace(/\s/g, '').split(':')[1] as string;
		if (idx === 0) {
			race.t = parseInt(val);
		} else {
			race.d = parseInt(val);
		}
	}
	return race;
};
