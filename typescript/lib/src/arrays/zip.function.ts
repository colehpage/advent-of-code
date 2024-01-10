/**
 * Zips together corresponding elements from multiple arrays.
 * @param arrays Arrays to be zipped together.
 * @returns Generator object that yields arrays containing the corresponding elements. (The generator will stop when the shortest input array is exhausted.)
 * remember to use the spread operator to convert the generator to an array of arrays (e.g. [...zip([1, 2, 3], [4, 5, 6])])
 */
export function* zip<T>(...arrays: T[][]): Generator<T[], void, undefined> {
	// calc the minimum length of the arrays
	const minLength = Math.min(...arrays.map((arr) => arr.length));

	// Iterate from 0 to the min length
	for (let i = 0; i < minLength; i++) {
		// Yield an array containing the elements at the corresponding index in each input array
		yield arrays.map((arr) => arr[i]) as T[];
	}
}
