export interface TaskMetadata {
	year: number;
	day: number;
	part?: 1 | 2;
}

/**
 Checks if the provided is of type Task.
 * @param {} o The object check.
 * @returns {bool} True if the object is of type TaskMetadata, false otherwise.
 */
export const isTaskMetadata = (o: object): o is TaskMetadata =>
	Object.hasOwn(o, 'year') && Object.hasOwn(o, 'day');

/**
 * Represents the resources required for a task.
 * Some tasks define different handling for their examples than the real input.
 * These differences can be stored alongside the input file as a `.args.json` file
 * which will be automatically read and parsed.
 * @template T The type of the input.
 * @template A The type of additional arguments required by the task.
 */
export interface TaskResources<T, A = undefined> {
	input: T;
	args?: A | undefined;
}

/**
 * Represents the type of results for different parts of a task - there is a default but more can be added
 * @template T The type of the results.
 */
export interface PartResults<T = number> {
	input: T;
	example: T;
	[key: string]: T;
}

/**
 * The type of all the available inputs when it's not presented in a file.
 * @template T The type of the input data.
 * @template A The type of additional arguments required by the task.
 */
export interface PartInputs<T, A> {
	input: TaskResources<T, A>;
	example: TaskResources<T, A>;
	[key: string]: TaskResources<T, A>;
}

/**
 * The type of the results of a Day, describes the results of both parts.
 * @template O The type of the result for the first part.
 * @template T The type of the result for the second part.
 */
export interface DayResults<O = number, T = O> {
	one: Partial<PartResults<O>>;
	two: Partial<PartResults<T>>;
}

/**
 * When the input is so brief that it's not even presented to you as a separate page,
 * you can just add them into the `index.ts` in this format.
 * @template O The type of the result for the first part.
 * @template T The type of the result for the second part.
 * @template A The type of additional arguments required by the task.
 */
export interface DayInputs<O = number, T = O, A = undefined> {
	one: PartInputs<O, A>;
	two: PartInputs<T, A>;
}
