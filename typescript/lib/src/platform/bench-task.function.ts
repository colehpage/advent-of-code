import { performance, PerformanceObserver } from 'node:perf_hooks';
import { roundToDecimal } from '../math/index.js';
import type { Logger } from './logger.function.js';
import type { Solution } from './solution.type.js';
import type { TaskResources } from './task-resources.type.js';

/**
 * Benchmarks a task by measuring its performance and logging the results.
 * @template Input The type of the task's input.
 * @template Result The type of the task's result.
 * @template Args The type of additional arguments required by the task.
 * @param {Solution<Input, Result, Args>} runner The function that executes the task.
 * @param {TaskResources<Input, Args>} resources The resources required for the task.
 * @param {Logger} [logger] The optional logger function for logging performance results.
 * @returns {Promise<Result>} The result of the task.
 */
export const benchTask = async <Input, Result = string, Args = undefined>(
	runner: Solution<Input, Result, Args>,
	resources: TaskResources<Input, Args>,
	logger?: Logger,
): Promise<Result> => {
	// Check if the environment supports the 'bun' version
	if (process.versions['bun'] === undefined) {
		// Create a performance observer to measure performance entries
		const obs = new PerformanceObserver((list) => {
			list.getEntries().forEach((entry) => {
				logger?.(`${entry.name}: ${roundToDecimal(entry.duration, 2)} ms`);
			});
		});
		obs.observe({ entryTypes: ['measure'], buffered: true });
	}

	performance.mark('runstart');
	const result = await runner(resources.input, resources.args);
	performance.mark('runend');
	performance.measure('run', 'runstart', 'runend');

	return result;
};
