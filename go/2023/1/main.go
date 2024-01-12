package main

import (
	"log"
	"strings"

	"github.com/colehpage/aoc/go/util"
)

var digits = []string{"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"}

func main() {
	input := util.ReadInput("input.txt")
	util.TimeOutput("p1", func() int {
		return p1(input)
	})
	util.TimeOutput("p2", func() int {
		return p2(input)
	})
}

func p1(input []string) int {
	sum := 0
	for _, line := range input {
		sum += firstDigit(line)*10 + lastDigit(line)
	}
	return sum
}

func p2(input []string) int {
	sum := 0
	for _, line := range input {
		sum += firstNumber(line)*10 + lastNumber(line)	}
	return sum
}

func firstDigit(s string) int {
	for i := 0; i < len(s); i++ {
		if s[i] >= '0' && s[i] <= '9' {
			return int(s[i] - '0') // convert rune to int
		}
	}
	log.Fatal("no digit found")
	return -1
}

func lastDigit(s string) int {
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] >= '0' && s[i] <= '9' {
			return int(s[i] - '0') // convert rune to int
		}
	}
	log.Fatal("no digit found")
	return -1
}

func firstNumber(s string) int {
	acc := ""

	for i := 0; i < len(s); i++ {
		if s[i] >= '0' && s[i] <= '9' {
			return int(s[i] - '0')
		}

		acc += string(s[i])

		for i, d := range digits {
			if strings.HasSuffix(acc, d) {
				return i + 1
			}
		}
	}
	log.Fatal("no number found")
	return 0
}

func lastNumber(s string) int {
	acc := ""

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] >= '0' && s[i] <= '9' {
			return int(s[i] - '0')
		}

		acc = string(s[i]) + acc

		for i, d := range digits {
			if strings.HasPrefix(acc, d) {
				return i + 1
			}
		}
	}
	log.Fatal("no digit found")
	return 0
}