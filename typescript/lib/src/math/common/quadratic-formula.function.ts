/**
 * Calculates the roots of a quadratic equation in the form of ax^2 + bx + c.
 * @param {number} a The coefficient of the quadratic term.
 * @param {number} b The coefficient of the linear term.
 * @param {number} c The constant term.
 * @returns {[number, number]} An array containing the two roots of the quadratic equation.
 */
export const quadratic = (a: number, b: number, c: number): [number, number] => {
	const sqrt = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

	// Calculate the roots using the quadratic formula
	const root1 = (-b - sqrt) / (2 * a);
	const root2 = (-b + sqrt) / (2 * a);

	return [root1, root2];
};
