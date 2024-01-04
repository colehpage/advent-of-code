import { splitIntoStringPair } from '../../../lib/src/string';

export const parseLines = (
	lines: string[],
): [string[], Map<string, { left: string; right: string }>] => {
	const directions = lines[0] ? lines[0].split('') : [];
	const nodeLines = lines.slice(2, lines.length);

	const nodes = new Map<string, { left: string; right: string }>();

	for (const line of nodeLines) {
		const [node, paths] = splitIntoStringPair(line, ' = ');

		const [left, right] = splitIntoStringPair(
			paths.replaceAll('(', '').replaceAll(')', ''),
			', ',
		);

		if (node && left && right) {
			nodes.set(node, { left, right });
		}
	}
	return [directions, nodes];
};

export const getGhostNodes = (nodes: Map<string, { left: string; right: string }>) => {
	return Array.from(nodes.keys()).filter((key) => key.endsWith('A'));
};

export const walkPaths = (
	directions: string[],
	nodes: Map<string, { left: string; right: string }>,
	start: string,
	end: (curr: string) => boolean,
): number => {
	let step = 0;
	let curr = start;
	while (!end(curr)) {
		const node = nodes.get(curr);
		if (!node) {
			throw new Error(`No node found for ${curr}`);
		}
		const dir = directions[step % directions.length];
		(curr = dir === 'L' ? node.left : node.right), step++;
	}
	console.log(step, curr);
	return step;
};
