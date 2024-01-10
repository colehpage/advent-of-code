/**
 * Memoizes a function by caching its results for different argument combinations.
 * @template TArgs The type of the function's arguments.
 * @template TResult The type of the function's result.
 * @param {Function} fn The function to memoize.
 * @returns {Function} The memoized function.
 */
export function memoize<TArgs extends unknown[], TResult>(fn: Function): Function {
	const cache = new Map<string, TResult>();

	/**
	 * The memoized function.
	 * @param {...TArgs} args The arguments passed to the original function.
	 * @returns {TResult} The result of the original function.
	 */
	return (...args: TArgs) => {
		const cacheKey = JSON.stringify(args);

		if (cache.has(cacheKey)) {
			return cache.get(cacheKey);
		}

		const result = fn(...args);
		cache.set(cacheKey, result);

		return result;
	};
}
