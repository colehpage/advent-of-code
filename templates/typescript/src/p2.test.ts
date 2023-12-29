import { describe, expect, it } from 'vitest';
import { loadTaskResources } from '../../../lib/src/platform';
import { p2 } from './p2.js';

describe('<<year>> <<day>> p2', () => {
	describe('the input', () => {
		it('should solve the input', async () => {
			const { input } = await loadTaskResources({ year: <<year>>, day: <<day>>, part: 2 });
			expect(p2(input)).toEqual(0);
		});
	});
});
