import { task } from '../../../lib/src/platform';
import { getGhostNodes, parseLines, walkPaths } from './utils';

function gcd(a: number, b: number): number {
	return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
	let lcm = (a * b) / gcd(a, b);
	return lcm;
}

function lcmArray(nums: number[]): number {
	if (nums.length === 1) {
		return nums[0] || 0;
	} else if (nums.length === 0) {
		return 0;
	}

	let res = nums[0] as number;
	for (let i = 1; i < nums.length; i++) {
		res = lcm(res, nums[i] as number);
	}

	return res || 0;
}

// Cycle Detection!
export const p2 = (input: string): number => {
	const lines = input.split('\n');

	const [directions, nodes] = parseLines(lines);
	// okay so we need to find when every ghost is on a Z step, which might not
	// be on the same cycle (initial mistake) because they don't stop moving and will
	// keep wrapping around the paths.
	// thus this is going to be a GCD/LCM problem to get the first time that all ghosts are on a Z step
	const ghosts = getGhostNodes(nodes);

	const ghostCycles = ghosts.map((ghost) =>
		walkPaths(directions, nodes, ghost, (str) => str.endsWith('Z')),
	);

	return lcmArray(ghostCycles);
};

await task(p2, {
	year: 2023,
	day: 8,
	part: 2,
});
