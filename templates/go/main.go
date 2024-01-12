package main

import (
	"log"

	"github.com/colehpage/aoc/go/util"
)

func main() {
	input := util.ReadInput("test.txt")
	util.TimeOutput("p1", func() int {
		return p1(input)
	})
	util.TimeOutput("p2", func() int {
		return p2(input)
	})
}

func p1(input []string) int {
	log.Println(input)
	return 42
}

func p2(input []string) int {
	return 42
}
