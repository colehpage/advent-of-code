package main

import (
	aoc "github.com/colehpage/aoc/go/lib"
)

func main() {
	rows := aoc.ReadInput("input.txt")
	aoc.TimeOutput("p1", func() int {
		return p1(rows)
	})
	aoc.TimeOutput("p2", func() int {
		return p2(rows)
	})
}

func p1(rows []string) int {
	sum := 0

	for x, row := range rows {
		runes := []rune(row)
		for y := 0; y < len(runes); y++ {
			if !aoc.IsRuneDecimal(runes[y]) {
				continue
			}
			start := y
			end := -1
			y++
			for ; y < len(runes); y++ {
				if !aoc.IsRuneDecimal(runes[y]) {
					end = y - 1
					break
				}
			}
			if end == -1 {
				end = len(runes) - 1
			}
			y = end

			number := 0
			for i := start; i <= end; i++ {
				number = number*10 + aoc.RuneToInt(runes[i])
			}

			if isPeriod(x, start-1, rows) || isPeriod(x, end+1, rows) {
				sum += number
				continue
			}
			for col := start - 1; col <= end+1; col++ {
				if isPeriod(x-1, col, rows) || isPeriod(x+1, col, rows) {
					sum += number
					break
				}
			}
		}
	}

	return sum
}

func p2(rows []string) int {
	gearCount := make(map[aoc.Position]int)
	gearNumbers := make(map[aoc.Position][]int)

	for x, row := range rows {
		runes := []rune(row)
		for y := 0; y < len(runes); y++ {
			if !aoc.IsRuneDecimal(runes[y]) {
				continue
			}
			start := y
			end := -1
			y++
			for ; y < len(runes); y++ {
				if !aoc.IsRuneDecimal(runes[y]) {
					end = y - 1
					break
				}
			}
			if end == -1 {
				end = len(runes) - 1
			}
			y = end

			number := 0
			for i := start; i <= end; i++ {
				number = number*10 + aoc.RuneToInt(runes[i])
			}

			if isGear(x, start-1, rows) {
				pos := aoc.Position{Row: x, Col: start - 1}
				gearCount[pos]++
				gearNumbers[pos] = append(gearNumbers[pos], number)
				continue
			}
			if isGear(x, end+1, rows) {
				pos := aoc.Position{Row: x, Col: end + 1}
				gearCount[pos]++
				gearNumbers[pos] = append(gearNumbers[pos], number)
				continue
			}
			for col := start - 1; col <= end+1; col++ {
				foundRow := -1
				if isGear(x-1, col, rows) {
					foundRow = x - 1
				} else {
					if isGear(x+1, col, rows) {
						foundRow = x + 1
					}
				}
				if foundRow == -1 {
					continue
				}

				pos := aoc.Position{Row: foundRow, Col: col}
				gearCount[pos]++
				gearNumbers[pos] = append(gearNumbers[pos], number)
				break
			}
		}
	}

	res := 0
	for pos, count := range gearCount {
		if count != 2 {
			continue
		}
		numbers := gearNumbers[pos]
		res += numbers[0] * numbers[1]
	}
	return res
}

func isPeriod(row, col int, rows []string) bool {
	if row < 0 || row >= len(rows) || col < 0 || col >= len(rows[0]) {
		return false
	}

	r := []rune(rows[row])[col]
	if aoc.IsRuneDecimal(r) {
		return false
	}
	return r != '.'
}

func isGear(row, col int, rows []string) bool {
	if row < 0 || row >= len(rows) || col < 0 || col >= len(rows[0]) {
		return false
	}

	r := []rune(rows[row])[col]
	if aoc.IsRuneDecimal(r) {
		return false
	}
	return r == '*'
}
