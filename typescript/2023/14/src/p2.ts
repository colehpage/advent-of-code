import { task } from '../../../lib/src/platform';
import { cycle, loadP2 } from './utils';

// too large to just brute force cycle here...
// so we need to use patterns or cycle-detecting
const totalCycles = 1_000_000_000;

export const p2 = (input: string): number => {
	const lines = input.split('\n');
	let platform = lines.map((x) => x.split(''));

	const loads: number[] = [];
	const seen = new Map<string, number>();
	let idx = 0;
	let cycleEnd: number | undefined = undefined;
	while (cycleEnd === undefined) {
		platform = cycle(platform);
		const platformHash = platform.map((l) => l.join('')).join('');
		cycleEnd = seen.get(platformHash);
		if (cycleEnd === undefined) {
			idx++;
			seen.set(platformHash, idx);
			loads[idx] = loadP2(platform);
		}
	}
	idx++;
	const loadIndex = ((totalCycles - cycleEnd!) % (idx - cycleEnd!)) + cycleEnd!;
	return loads[loadIndex]!;
};

await task(
	p2,
	{
		year: 2023,
		day: 14,
		part: 2,
	},
	'input.txt',
);
