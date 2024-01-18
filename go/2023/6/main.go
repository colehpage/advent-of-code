package main

import (
	"bytes"
	"io"
	"log"
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
	times := strings.TrimSpace(strings.TrimPrefix(lines[0], "Time: "))
	dists := strings.TrimSpace(strings.TrimPrefix(lines[1], "Distance: "))

	timesSlice := aoc.StringsToInts(strings.Fields(times))
	distsSlice := aoc.StringsToInts(strings.Fields(dists))

	var races []Race

	for i := 0; i < len(timesSlice); i++ {
		races = append(races, Race{time: timesSlice[i], dist: distsSlice[i]})
	}

	prod := 1

	for _, race := range races {
		prod *= calcNumWins(race.time, race.dist)
	}

	return prod
}

func p2(input io.Reader) int {
	lines := aoc.ReaderToStrings(input)
	times := strings.TrimSpace(strings.TrimPrefix(lines[0], "Time: "))
	dists := strings.TrimSpace(strings.TrimPrefix(lines[1], "Distance: "))

	time := aoc.StringToInt(strings.ReplaceAll(times, " ", ""))
	dist := aoc.StringToInt(strings.ReplaceAll(dists, " ", ""))

	return calcNumWins(time, dist)
}

type Race struct {
	time int
	dist int
}

func calcNumWins(time, distance int) int {
	wins := 0
	for i := 1; i < time; i++ {
		if (time-i)*i > distance {
			wins++
		}
	}
	return wins
}
