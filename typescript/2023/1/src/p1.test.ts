import { describe, expect, it } from 'vitest';
import { run } from './p1.js';

describe('2023 01 p1', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			expect(await run()).toEqual(54_990);
		});
	});
});
