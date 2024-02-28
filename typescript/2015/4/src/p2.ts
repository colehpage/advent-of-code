import { task } from '../../../lib/src/platform';
import { md5Hash } from './utils';

export const p2 = (input: string): number => {
	let num = 0;
	while (true) {
		if (md5Hash(`${input}${num}`).startsWith('000000')) {
			break;
		}
		num++;
	}

	return num;
};

await task(p2, {
	year: 2015,
	day: 4,
	part: 2,
});
