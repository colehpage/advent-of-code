export async function getTextFromFile(filePath: string): Promise<string> {
	const response = await fetch(filePath);
	const text = await response.text();
	return text;
}
