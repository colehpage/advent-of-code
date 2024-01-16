package aoc

import (
	"fmt"
	"strings"
)

// Substring returns the substring from a given delimiter.
func Substring(s string, del string) string {
	idx := strings.Index(s, del)
	if idx == -1 {
		panic(fmt.Sprintf("substring: %s is not present in %s", del, s))
	}
	return s[idx+len(del):]
}
