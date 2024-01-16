package aoc

import (
	"bufio"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type Input struct {
	scanner *bufio.Scanner
	lines   chan string
}

func FromFile(path string) *Input {
	if path == "" {
		log.Fatal("no path provided, assuming input.txt in working directory")
		path = filepath.Join("input.txt")
	}

	f, err := os.Open(path)
	if err != nil {
		log.Fatal(err)
	}

	return inputFromReader(f, f)
}

func inputFromReader(r io.Reader, c io.Closer) *Input {
	result := &Input{
		scanner: bufio.NewScanner(r),
		lines:   make(chan string),
	}

	go func() {
		defer func() {
			if c != nil {
				_ = c.Close()
			}
		}()

		for result.scanner.Scan() {
			result.lines <- result.scanner.Text()
		}

		close(result.lines)
	}()

	return result
}

func (c *Input) Lines() <-chan string {
	return c.lines
}

func (c *Input) Sections() <-chan string {
	sections := make(chan string)
	go func() {
		defer close(sections)
		section := strings.Builder{}

		for line := range c.lines {
			section.WriteString(line)

			if line == "" {
				sections <- strings.TrimSpace(section.String())
				section.Reset()
			} else {
				section.WriteRune('\n')
			}
		}

		if section.Len() != 0 {
			sections <- strings.TrimSpace(section.String())
		}
	}()

	return sections
}
