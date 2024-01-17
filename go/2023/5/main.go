package main

import (
	"bytes"
	"io"
	"log"
	"math"
	"sort"
	"strings"

	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	input := aoc.ReadFile("input.txt")

	// Buffer the input
	buf, err := io.ReadAll(input)
	if err != nil {
		log.Fatal(err)
	}

	aoc.TimeOutput("p1", func() int {
		return p1(bytes.NewReader(buf))
	})

	aoc.TimeOutput("p2", func() int {
		return p2(bytes.NewReader(buf))
	})
}

func p1(input io.Reader) int {
	lines := aoc.ReaderToStrings(input)
	groups := aoc.StringGroups(lines)
	seedsStr := groups[0][0]
	seedsStr = strings.TrimPrefix(seedsStr, "seeds: ")
	numsStr := strings.Split(seedsStr, " ")

	seeds := aoc.StringsToInts(numsStr)

	var maps []Map
	// skip seeds and loop through other groups
	for i := 1; i < len(groups); i++ {
		maps = append(maps, parseMap(groups[i]))
	}

	min := math.MaxInt64

	for _, s := range seeds {
		curr := s
		for _, m := range maps {
			for _, r := range m.ranges {
				isValid := curr >= r.source && curr <= r.source+r.length
				if isValid {
					offset := curr - r.source
					curr = r.dest + offset
					break // we found the range, so we can stop looking and move to the next block
				}
				// else we keep the same curr value
			}
		}
		if curr < min {
			min = curr
		}
	}

	return min
}

func p2(input io.Reader) int {
	// Read lines from the input and group them.
	lines := aoc.ReaderToStrings(input)
	groups := aoc.StringGroups(lines)

	// Extract the seed string, remove the prefix, and split it into numbers.
	seedsStr := groups[0][0]
	seedsStr = strings.TrimPrefix(seedsStr, "seeds: ")
	numsStr := strings.Split(seedsStr, " ")

	// Convert the seed strings to integers.
	seeds := aoc.StringsToInts(numsStr)

	// Create a slice to store ranges derived from seeds.
	var seedRanges []Range
	for i := 0; i < len(seeds); i += 2 {
		end := i + 2
		if end > len(seeds) {
			end = len(seeds)
		}
		seedRange := Range{
			from: seeds[i],
			to:   seeds[i] + seeds[end-1],
		}
		seedRanges = append(seedRanges, seedRange)
	}

	// Parse the remaining groups to create a slice of Maps.
	var maps []Map
	for i := 1; i < len(groups); i++ {
		maps = append(maps, parseMap(groups[i]))
	}

	// Sort the ranges in each Map by their source values.
	for _, m := range maps {
		sort.Slice(m.ranges, func(i, j int) bool {
			return m.ranges[i].source < m.ranges[j].source
		})
	}

	// Process each Map and apply its rules to the current ranges.
	for _, m := range maps {
		var currRanges []Range
		for _, curr := range seedRanges {
			for _, rule := range m.ranges {
				offset := rule.dest - rule.source
				isValid := curr.from <= curr.to &&
					curr.from <= rule.source+rule.length &&
					curr.to >= rule.source

					// Apply the rule if it's valid for the current range.
				if isValid {
					// Adjust the current range based on the rule's conditions.
					if curr.from < rule.source {
						currRanges = append(currRanges, Range{from: curr.from, to: rule.source - 1})
						curr.from = rule.source
					}
					if curr.to < rule.source+rule.length {
						currRanges = append(currRanges, Range{from: curr.from + offset, to: curr.to + offset})
						curr.from = curr.to + 1
					} else {
						currRanges = append(currRanges, Range{from: curr.from + offset, to: rule.source + rule.length - 1 + offset})
						curr.from = rule.source + rule.length
					}
				}
			}
			// Add the adjusted range to the list if it's still valid.
			if curr.from <= curr.to {
				currRanges = append(currRanges, curr)
			}
		}
		// Update seedRanges for the next map.
		seedRanges = currRanges
	}

	// Find the smallest 'from' value among all ranges.
	min := math.MaxInt32
	for _, r := range seedRanges {
		if r.from < min {
			min = r.from
		}
	}

	return min
}

// MapRange defines a mapping rule with a destination, source, and length.
type MapRange struct {
	dest   int
	source int
	length int
}

// Map represents a collection of mapping rules (MapRanges).
type Map struct {
	ranges []MapRange
}

// Range defines a numerical range with 'from' and 'to' values.
type Range struct {
	from int
	to   int
}

// parseMap converts a slice of strings to a Map by parsing each line.
func parseMap(lines []string) Map {
	var ranges []MapRange
	for i := 1; i < len(lines); i++ {
		// Skip the headers for each group.
		if i == 0 {
			continue
		}

		// For non-headers, split on spaces and convert to integers.
		r := aoc.StringsToInts(strings.Split(lines[i], " "))

		// Append the parsed range to the list of ranges.
		ranges = append(ranges, MapRange{
			dest:   r[0],
			source: r[1],
			length: r[2],
		})
	}
	return Map{ranges: ranges}
}
