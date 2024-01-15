package aoc

import "strconv"

func IsRuneDecimal(r rune) bool {
	return r >= '0' && r <= '9'
}

func RuneToInt(r rune) int {
	return int(r - '0')
}

func IntToRune(i int) rune {
	s := strconv.Itoa(i)
	return []rune(s)[0]
}
