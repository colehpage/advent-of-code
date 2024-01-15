package main

import (
	"math"
	"slices"
	"strings"

	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	rows := aoc.ReadInput("input.txt")
	aoc.TimeOutput("p1", func() int {
		return p1(rows)
	})
	aoc.TimeOutput("p2", func() int {
		return p2(rows)
	})
}

func p1(rows []string) int {
	sum := 0
	for _, card := range rows {
		wins := checkCard(card)
		if wins > 0 {
			sum += int(math.Pow(2, float64(wins-1)))
		}
	}
	return sum
}

func p2(rows []string) int {
	counts := make([]int, len(rows))
	for i := 0; i < len(rows); i++ {
		counts[i] = 1
	}

	for i, card := range rows {
		if wins := checkCard(card); wins > 0 {
			for j := i + 1; j <= i+wins; j++ {
				counts[j] += counts[i]
			}
		}
	}

	sum := 0

	for _, c := range counts {
		sum += c
	}

	return sum
}

func checkCard(card string) int {
	count := 0

	parts := strings.Split(card, ":")
	parts = strings.Split(parts[1], "|")
	winning := strings.Fields(parts[0])
	mine := strings.Fields(parts[1])

	for _, m := range mine {
		if slices.Contains(winning, m) {
			count++
		}
	}
	return count
}
