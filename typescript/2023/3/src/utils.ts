export function isDigit(value: string | undefined) {
	if (!value) return false;
	return /^\d$/.test(value);
}
