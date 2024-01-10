import { existsSync } from 'node:fs';
import { join, normalize } from 'node:path';

/**
 * Finds the nearest directory with the given name starting from a specified path.
 * @param {string} directoryName The name of the directory to find.
 * @param {string} [cwd=process.cwd()] The current working directory to start the search from.
 * @param {string[]} [collection=[]] An optional collection to store intermediate paths.
 * @returns {string | undefined} The path of the nearest directory found, or undefined if not found.
 */
export const findNearestDirectoryNamed = (
	directoryName: string,
	cwd: string = process.cwd(),
	collection: string[] = [],
): string | undefined => {
	const path = normalize(cwd);

	// Check if the directory exists at the current path
	if (existsSync(join(path, directoryName))) {
		return path;
	}

	// Move up to the parent directory
	const parentPath = join(path, '..');

	// Return undefined if reached the root directory
	if (parentPath === path) {
		return undefined;
	}

	// Recursively search in the parent directory
	return findNearestDirectoryNamed(directoryName, parentPath, collection);
};
