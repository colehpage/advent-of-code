import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p2 } from './p2.js';

describe('2015 3 p2', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: 2015, day: 3, part: 2 });
			expect(p2(input)).toEqual(2639);
		});
	});
});
