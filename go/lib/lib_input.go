package aoc

import (
	"bufio"
	"io"
	"log"
	"os"
	"time"
)

func ReadFile(filename string) io.Reader {
	file, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	// return file
	reader := bufio.NewReader(file)
	return reader
}

// io.Reader -> string.
func ReaderToString(input io.Reader) string {
	scanner := bufio.NewScanner(input)
	scanner.Scan()
	return scanner.Text()
}

// io.Reader -> slice of strings.
func ReaderToStrings(input io.Reader) []string {
	scanner := bufio.NewScanner(input)
	var res []string
	for scanner.Scan() {
		res = append(res, scanner.Text())
	}
	return res
}

// io.Reader into a slice of ints.
func ReaderToInts(input io.Reader) []int {
	scanner := bufio.NewScanner(input)
	var res []int
	for scanner.Scan() {
		res = append(res, StringToInt(scanner.Text()))
	}
	return res
}

// StringGroups returns groups of lines inputs that are not separated by empty lines.
func StringGroups(lines []string) [][]string {
	i := 0
	var res [][]string
	var row []string
	for {
		row = append(row, lines[i])
		i++
		if i >= len(lines) {
			res = append(res, row)
			break
		}
		for ; i < len(lines); i++ {
			if lines[i] == "" {
				break
			} else {
				row = append(row, lines[i])
			}
		}
		res = append(res, row)
		row = nil
		i++
		if i >= len(lines) {
			break
		}
	}
	return res
}

func ReadInput(filename string) []string {
	file, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	var inputArray []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		inputArray = append(inputArray, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
	return inputArray
}

// time a function and log the result.
func TimeOutput(name string, action func() int) {
	start := time.Now()
	result := action()
	elapsed := time.Since(start)
	log.Printf("%s() result: %d, execution time: %s", name, result, elapsed)
}
