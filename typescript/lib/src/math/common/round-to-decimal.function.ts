/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} n The number to round.
 * @param {number} decimal The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export const roundToDecimal = (n: number, decimal: number): number => {
	// Convert number to exponential notation with the specified decimal places
	const exponent = decimal >= 0 ? decimal : 0; // Handle negative decimal values
	const roundedNumber = Math.round(Number.parseFloat(`${n.toString()}e+${decimal}`));

	// Convert the rounded number back to regular decimal notation
	const roundedDecimal = `e-${exponent}`;
	return Number.parseFloat(roundedNumber + roundedDecimal);
};
