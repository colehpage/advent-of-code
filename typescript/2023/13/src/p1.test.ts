import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p1 } from './p1.js';

describe('2023 13 p1', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: 2023, day: 13, part: 1 });
			expect(p1(input)).toEqual(0);
		});
	});
});
