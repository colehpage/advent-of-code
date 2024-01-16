package aoc

import "strconv"

func StringToInt(s string) int {
	i, err := strconv.Atoi(s)
	if err != nil {
		panic(err)
	}
	return i
}

func StringsToInts(s []string) []int {
	res := make([]int, len(s))
	for i, v := range s {
		res[i] = StringToInt(v)
	}
	return res
}

func RuneToInt(r rune) int {
	return int(r - '0')
}

func IntToRune(i int) rune {
	s := strconv.Itoa(i)
	return []rune(s)[0]
}

func IsRuneDecimal(r rune) bool {
	return r >= '0' && r <= '9'
}
