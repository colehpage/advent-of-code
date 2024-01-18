package main

import (
	"testing"

	aoc "github.com/colehpage/aoc/go/lib"
	"github.com/stretchr/testify/assert"
)

func TestP1(t *testing.T) {
	input := aoc.ReadFile("input.txt")
	assert.Equal(t, 741000, p1(input))
}

func TestP2(t *testing.T) {
	input := aoc.ReadFile("input.txt")
	assert.Equal(t, 33, p2(input))
}
