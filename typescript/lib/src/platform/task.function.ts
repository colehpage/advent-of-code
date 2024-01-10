import { benchTask } from './bench-task.function.js';
import { loadTaskResources } from './load-task-resources.function.js';
import { createLogger } from './logger.function.js';
import type { Solution } from './solution.type.js';
import type { TaskMetadata, TaskResources } from './task-resources.type.js';

/**
 * Executes a task using the provided solution and task resources.
 * @template Input The type of the task's input.
 * @template Result The type of the task's result.
 * @template Args The type of additional arguments required by the task.
 * @param {Solution<Input, Result, Args>} solution The solution function for the task.
 * @param {TaskMetadata} taskMetadata The metadata of the task.
 * @param {TaskResources<Input, Args> | string} [resourcesOverride] The optional task resources or the name of the resource file override.
 * @returns {Promise<Result | undefined>} A promise that resolves to the result of the task.
 */
export const task = async <Input extends string | number, Result, Args>(
	solution: Solution<Input, Result, Args>,
	taskMetadata: TaskMetadata,
	resourcesOverride?: TaskResources<Input, Args> | string,
): Promise<Result | undefined> => {
	const log = createLogger(taskMetadata);
	log('starting...');
	log('year: ' + taskMetadata.year + ' day: ' + taskMetadata.day + ' part: ' + taskMetadata.part);

	let resources: TaskResources<Input, Args>;

	if (typeof resourcesOverride === 'object') {
		resources = resourcesOverride;
	} else {
		resources = (await loadTaskResources<Args>(
			taskMetadata,
			resourcesOverride,
		)) as TaskResources<Input, Args>;
	}

	if (process.env['RESOURCE']) {
		resources = (await loadTaskResources<Args>(
			taskMetadata,
			process.env['RESOURCE'],
		)) as TaskResources<Input, Args>;
	}

	const result = await benchTask(solution, resources, log);
	log(`result: ${String(result)}`);
	return result;
};
