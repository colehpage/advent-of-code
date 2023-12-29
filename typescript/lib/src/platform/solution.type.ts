export type Solution<Input = string, Result = number, Args = undefined> = (
	input: Input,
	args: Args | undefined,
) => Result | PromiseLike<Result>;
