import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { findNearestDirectoryNamed } from './find-nearest-directory-named.function.js';
import type { TaskMetadata, TaskResources } from './task-resources.type.js';

/**
 * Loads task resources from the file system.
 * @template A The type of additional arguments required by the task.
 * @param {TaskMetadata} taskMetadata The metadata of the task.
 * @param {string} [file='input.txt'] The name of the input file.
 * @returns {Promise<TaskResources<string, A>>} A promise that resolves to the loaded task resources.
 */
export const loadTaskResources = async <A>(
	taskMetadata: TaskMetadata,
	file = 'input.txt',
): Promise<TaskResources<string, A>> => {
	// Find the nearest directory named 'typescript'
	const resourcesRoot = findNearestDirectoryNamed('typescript');
	if (!resourcesRoot) {
		throw new Error('Resource directory not found');
	}

	const baseUrl = join(
		resourcesRoot,
		'typescript',
		taskMetadata.year.toString(),
		taskMetadata.day.toString(),
	);

	// Read the input file and the corresponding args file (if exists)
	const [input, args] = await Promise.all([
		readFile(join(baseUrl, file), {
			encoding: 'utf8',
		}),
		readFile(join(baseUrl, `${file.split(/(.*)\..*/)[1]}.args.json`), {
			encoding: 'utf8',
		}).catch(() => undefined) as Promise<string>,
	]);

	return { input, args: args ? (JSON.parse(args) as A) : undefined };
};
