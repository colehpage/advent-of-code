package main

import (
	"testing"

	aoc "github.com/colehpage/aoc/go/lib"
	"github.com/stretchr/testify/assert"
)

func TestP1(t *testing.T) {
	input := aoc.ReadInput("input.txt")
	assert.Equal(t, 560670, p1(input))
}

func TestP2(t *testing.T) {
	input := aoc.ReadInput("input.txt")
	assert.Equal(t, 91622824, p2(input))
}
