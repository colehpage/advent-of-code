package main

import (
	"testing"

	"github.com/colehpage/aoc/go/util"
	"github.com/stretchr/testify/assert"
)

func TestP1Input(t *testing.T) {
	input := util.ReadInput("test.txt")
	assert.Equal(t, 54990, p1(input))
}

func TestP2Input(t *testing.T) {
	input := util.ReadInput("test.txt")
	assert.Equal(t, 54473, p2(input))
}
