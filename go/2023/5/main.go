package main

import (
	"io"
	"math"
	"strings"

	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	input := aoc.ReadFile("input.txt")

	aoc.TimeOutput("p1", func() int {
		return p1(input)
	})

	aoc.TimeOutput("p2", func() int {
		return p2(input)
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
				is_valid := curr >= r.source && curr <= r.source+r.length
				if is_valid {
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
	return 33
}

type MapRange struct {
	dest   int
	source int
	length int
}

type Map struct {
	ranges []MapRange
}

func parseMap(lines []string) Map {
	var ranges []MapRange
	for i := 1; i < len(lines); i++ {
		// skip the headers for each group
		if i == 0 {
			continue
		}

		// for non headers, split on spaces and convert to ints
		r := aoc.StringsToInts(strings.Split(lines[i], " "))

		ranges = append(ranges, MapRange{
			dest:   r[0],
			source: r[1],
			length: r[2],
		})
	}
	return Map{ranges: ranges}
}
