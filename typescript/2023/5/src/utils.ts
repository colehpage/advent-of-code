export interface Range {
	destinationRangeStart: number;
	sourceRangeStart: number;
	rangeLength: number;
}

export interface Lines {
	seedToSoilMap: string[];
	soilToFertilizerMap: string[];
	fertilizerToWaterMap: string[];
	waterToLightMap: string[];
	lightToTemperatureMap: string[];
	temperatureToHumidityMap: string[];
	humidityToLocationMap: string[];
}

export interface Maps {
	seedToSoilMap: Range[];
	soilToFertilizerMap: Range[];
	fertilizerToWaterMap: Range[];
	waterToLightMap: Range[];
	lightToTemperatureMap: Range[];
	temperatureToHumidityMap: Range[];
	humidityToLocationMap: Range[];
}

export const seedToLocation = (seed: number, maps: Maps) => {
	const soil = getRange(seed, maps.seedToSoilMap as Range[]);
	const fertilizer = getRange(soil, maps.soilToFertilizerMap as Range[]);
	const water = getRange(fertilizer, maps.fertilizerToWaterMap as Range[]);
	const light = getRange(water, maps.waterToLightMap as Range[]);
	const temperature = getRange(light, maps.lightToTemperatureMap as Range[]);
	const humidity = getRange(temperature, maps.temperatureToHumidityMap as Range[]);
	const location = getRange(humidity, maps.humidityToLocationMap as Range[]);

	return location;
};

export const getRange = (seed: number, rangeMap: Range[]): number => {
	const range = rangeMap.find(
		(range) =>
			range.sourceRangeStart <= seed && seed < range.sourceRangeStart + range.rangeLength,
	);
	const delta = range ? range.destinationRangeStart - range.sourceRangeStart : 0;
	return seed + delta;
};

export const parseInput = (input: string) => {
	const sections = input.split('\n\n');
	// 8 sections, first is seeds rest are maps
	let seeds: number[] = sections[0]?.split(': ')[1]?.split(' ').map(Number) ?? [];

	const lineMaps: { [key: string]: string[] } = {
		seedToSoilLines: [],
		soilToFertilizerLines: [],
		fertilizerToWaterLines: [],
		waterToLightLines: [],
		lightToTemperatureLines: [],
		temperatureToHumidityLines: [],
		humidityToLocationLines: [],
	};

	for (let i = 0; i < Object.keys(lineMaps).length; i++) {
		const key = Object.keys(lineMaps)[i] as string;
		lineMaps[key] = sections[i + 1]?.split(':\n')[1]?.split('\n') ?? [];
	}

	const maps: Maps = {
		seedToSoilMap: <Range[]>[],
		soilToFertilizerMap: <Range[]>[],
		fertilizerToWaterMap: <Range[]>[],
		waterToLightMap: <Range[]>[],
		lightToTemperatureMap: <Range[]>[],
		temperatureToHumidityMap: <Range[]>[],
		humidityToLocationMap: <Range[]>[],
	};

	for (let i = 0; i < Object.keys(lineMaps).length; i++) {
		const linesKey = Object.keys(lineMaps)[i] as string;
		const mapsKey = Object.keys(maps)[i] as keyof Maps;
		const lines = lineMaps[linesKey];
		maps[mapsKey] =
			lines?.map((line) => {
				const [destinationRangeStart, sourceRangeStart, rangeLength] = line
					.split(' ')
					.map(Number);
				return { destinationRangeStart, sourceRangeStart, rangeLength } as Range;
			}) ?? [];
	}

	return {
		seeds,
		maps,
	};
};
