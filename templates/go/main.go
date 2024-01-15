package main

import (
	"log"

	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	rows := aoc.ReadInput("test.txt")
	aoc.TimeOutput("p1", func() int {
		return p1(rows)
	})
	aoc.TimeOutput("p2", func() int {
		return p2(rows)
	})
}

func p1(rows []string) int {
	for _, row := range rows {
		log.Println(row)
	}
	return 33
}

func p2(rows []string) int {
	return 33
}
