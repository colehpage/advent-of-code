import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p2 } from './p2.js';

describe('2023 6 p2', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: 2023, day: 6, part: 2 });
			expect(p2(input)).toEqual(38220708);
		});
	});
});
