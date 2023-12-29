import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { findNearestDirectoryNamed } from './find-nearest-directory-named.function.js';
import type { TaskMetadata, TaskResources } from './task-resources.type.js';

export const loadTaskResources = async <A>(
	taskMetadata: TaskMetadata,
	file = 'input.txt',
): Promise<TaskResources<string, A>> => {
	const resourcesRoot = findNearestDirectoryNamed('typescript');
	if (!resourcesRoot) {
		throw new Error('resource directory not found');
	}

	const baseUrl = join(
		resourcesRoot,
		'typescript',
		taskMetadata.year.toString(),
		taskMetadata.day.toString(),
	);

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
