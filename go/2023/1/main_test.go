package main

import (
	"testing"

	"github.com/colehpage/aoc/go/util"
	"github.com/stretchr/testify/assert"
)

func TestP1(t *testing.T) {
	input := util.ReadInput("input.txt")
	assert.Equal(t, 54990, p1(input))
}

func TestP2(t *testing.T) {
	input := util.ReadInput("input.txt")
	assert.Equal(t, 54473, p2(input))
}