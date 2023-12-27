import { describe, expect, it } from 'vitest';
import { run } from './p2.js';

describe('p2', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			expect(await run()).toEqual(0);
		});
	});
});
