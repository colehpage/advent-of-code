import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p1 } from './p1.js';

describe('2015 2 p1', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: 2015, day: 2, part: 1 });
			expect(p1(input)).toEqual(1598415);
		});
	});
});
