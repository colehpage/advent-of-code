package main

import (
	"fmt"
	"strings"

	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	input := aoc.ReadInput("input.txt")
	aoc.TimeOutput("p1", func() int {
		return p1(input)
	})
	aoc.TimeOutput("p2", func() int {
		return p2(input)
	})
}

func p1(input []string) int {
	sum := 0
	for _, line := range input {
		game, exs := parseLine(line)
		if possible(exs) {
			sum += game
		}
	}
	return sum
}

func p2(input []string) int {
	sum := 0
	for _, line := range input {
		_, exs := parseLine(line)
		m := max(exs)
		sum += m.Blue * m.Red * m.Green
	}
	return sum
}

type Game struct {
	Red, Blue, Green int
}

func max(exs []Game) Game {
	var maximum Game
	for _, ex := range exs {
		if ex.Red > maximum.Red {
			maximum.Red = ex.Red
		}
		if ex.Green > maximum.Green {
			maximum.Green = ex.Green
		}
		if ex.Blue > maximum.Blue {
			maximum.Blue = ex.Blue
		}
	}
	return maximum
}

func possible(exs []Game) bool {
	for _, ex := range exs {
		if ex.Blue > 14 || ex.Red > 12 || ex.Green > 13 {
			return false
		}
	}
	return true
}

func parseLine(line string) (int, []Game) {
	ff := strings.Split(line, ":")
	var game int
	_, _ = fmt.Sscanf(ff[0], "Game %d", &game)

	extractions := []Game{}

	for _, ex := range strings.Split(ff[1], ";") {
		var extraction Game

		for _, c := range strings.Split(ex, ",") {
			var stones int
			var color string

			_, _ = fmt.Sscanf(c, "%d %s", &stones, &color)

			switch color {
			case "red":
				extraction.Red = stones
			case "blue":
				extraction.Blue = stones
			case "green":
				extraction.Green = stones
			}
		}
		extractions = append(extractions, extraction)
	}

	return game, extractions
}
