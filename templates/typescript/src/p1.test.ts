import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p1 } from './p1.js';

describe('<<year>> <<day>> p1', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: <<year>>, day: <<day>>, part: 1 });
			expect(p1(input)).toEqual(0);
		});
	});
});
