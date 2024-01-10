/**
 * Represents a solution function for a task.
 * @template Input The type of the input to the solution function.
 * @template Result The type of the result returned by the solution function.
 * @template Args The type of additional arguments required by the solution function.
 */
export type Solution<Input = string, Result = number, Args = undefined> = (
	input: Input,
	args: Args | undefined,
) => Result | PromiseLike<Result>;
