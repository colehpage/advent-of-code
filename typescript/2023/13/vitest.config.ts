import type { UserConfig } from 'vitest/config';
import type { CoverageOptions, CoverageReporter } from 'vitest';

const vitestReporters: CoverageReporter[] = ['text', 'json', 'html', 'lcov'];

const vitestCoverage: CoverageOptions = {
	provider: 'v8',
	reporter: vitestReporters,
	reportsDirectory: './coverage',
};
export const vitestConfig = {
	plugins: [],
	test: {
		include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		coverage: vitestCoverage,
	},
} satisfies UserConfig;

export default vitestConfig;
