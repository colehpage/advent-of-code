package main

import (
	"bytes"
	"io"
	"log"

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
	for _, line := range lines {
		log.Println(line)
	}
	return 33
}

func p2(input io.Reader) int {
	return 33
}
