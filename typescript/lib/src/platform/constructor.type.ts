/**
 * Represents a constructor function.
 * @template T The type of the instance created by the constructor.
 */
export type Constructor<T> = abstract new (...args: any[]) => T;

/**
 * Represents the instance types of a tuple of constructor functions.
 * @template C The tuple of constructor functions.
 */
export type InstanceTypeOfConstructorTuple<C extends Constructor<unknown>[]> = {
	[K in keyof C]: C[K] extends C[number] ? InstanceType<C[K]> : never;
};
