package main

import (
	"bytes"
	"io"
	"log"
	"sort"
	"strings"

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

	sum := 0

	lines := aoc.ReaderToStrings(input)

	var hands []Hand

	for i := range lines {
		split := strings.Split(lines[i], " ")
		hands = append(hands, Hand{hand: split[0], bid: aoc.StringToInt(split[1])})
	}

	// compare first by hand type
	// second by card values starting with first card

	sort.Slice(hands, func(i, j int) bool {
		handA := hands[i].hand
		handB := hands[j].hand

		scoreA := handScore(handA)
		scoreB := handScore(handB)

		if scoreA[0] == scoreB[0] {
			if scoreA[1] == scoreB[1] {
				// hand types identical
				// check scores of individual cards in order
				for i := 0; i < len(handA); i++ {
					if cardValue(rune(handA[i])) == cardValue(rune(handB[i])) {
						continue
					} else {
						return cardValue(rune(handA[i])) < cardValue(rune(handB[i]))
					}
				}
			} else {
				return scoreA[1] < scoreB[1]
			}

		}
		return scoreA[0] < scoreB[0]
	})

	for i, hand := range hands {
		sum += (i + 1) * hand.bid
	}

	return sum
}

func p2(input io.Reader) int {
	sum := 0

	lines := aoc.ReaderToStrings(input)

	var hands []Hand

	for i := range lines {
		split := strings.Split(lines[i], " ")
		hands = append(hands, Hand{hand: split[0], bid: aoc.StringToInt(split[1])})
	}

	// compare first by hand type
	// second by card values starting with first card

	sort.Slice(hands, func(i, j int) bool {
		handA := hands[i].hand
		handB := hands[j].hand

		scoreA := handScore2(handA)
		scoreB := handScore2(handB)

		if scoreA[0] == scoreB[0] {
			if scoreA[1] == scoreB[1] {
				// hand types identical
				// check scores of individual cards in order
				for i := 0; i < len(handA); i++ {
					if cardValue2(rune(handA[i])) == cardValue2(rune(handB[i])) {
						continue
					} else {
						return cardValue2(rune(handA[i])) < cardValue2(rune(handB[i]))
					}
				}
			} else {
				return scoreA[1] < scoreB[1]
			}

		}
		return scoreA[0] < scoreB[0]
	})

	for i, hand := range hands {
		sum += (i + 1) * hand.bid
	}
	return sum
}

type Hand struct {
	hand string
	bid  int
}

func handScore(hand string) [2]int {
	faces := make([]int, 13)

	for _, c := range hand {
		faces[cardValue(c)]++
	}

	sort.Slice(faces, func(i, j int) bool {
		return faces[i] < faces[j]
	})

	score := [2]int{}

	copy(score[:], faces[11:])

	for i, j := 0, len(score)-1; i < j; i, j = i+1, j-1 {
		score[i], score[j] = score[j], score[i]
	}

	return score
}

func cardValue(c rune) int {
	cards := "23456789TJQKA"
	for i, card := range cards {
		if card == rune(c) {
			return i
		}
	}
	return -1
}

// should probably combine these parts and make things a bit dryer....

func handScore2(hand string) [2]int {
	faces := make([]int, 13)
	jokers := 0

	for _, c := range hand {
		if c == 'J' {
			jokers++
		} else {
			faces[cardValue2(c)]++
		}
	}

	sort.Slice(faces, func(i, j int) bool {
		return faces[i] < faces[j]
	})

	score := [2]int{}

	copy(score[:], faces[11:])

	for i, j := 0, len(score)-1; i < j; i, j = i+1, j-1 {
		score[i], score[j] = score[j], score[i]
	}

	score[0] += jokers

	return score
}

func cardValue2(c rune) int {
	cards := "J23456789TQKA"
	for i, card := range cards {
		if card == rune(c) {
			return i
		}
	}
	return -1
}
