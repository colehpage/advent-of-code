gen LANGUAGE YEAR DAY:
  #!/bin/bash
  # [[ -s "$GVM_ROOT/scripts/gvm" ]] && source "$GVM_ROOT/scripts/gvm"
  # gvm use go1.21.4

  mkdir -p {{YEAR}}/{{LANGUAGE}}/{{DAY}}

  cp -R templates/{{LANGUAGE}}/ {{YEAR}}/{{LANGUAGE}}/{{DAY}}
  curl --cookie "session=$ADVENT_OF_CODE_COOKIE" https://adventofcode.com/{{YEAR}}/day/{{DAY}}/input -o {{YEAR}}/{{LANGUAGE}}/{{DAY}}/input.txt
  perl -i -pe 'chomp if eof' {{YEAR}}/{{LANGUAGE}}/{{DAY}}/input.txt
  if [ "{{LANGUAGE}}" = "go" ]; then
    sed -i '' '45i\
  * [Day {{DAY}}](https://adventofcode.com/{{YEAR}}/day/{{DAY}}): [Go]({{YEAR}}/day{{DAY}}-go/main.go)\
  ' README.md

    cd {{YEAR}}/{{LANGUAGE}}/{{DAY}}
    go mod init day{{YEAR}}-{{DAY}}
    go mod tidy
    go get github.com/stretchr/testify
    go get github.com/teivah/advent-of-code@v1.9.1
    go get golang.org/x/exp

    # Temporary workaround as the Go version is generated with 3 digits for some reason
    sed -i -e 's/go 1.21.4/go 1.21/' go.mod
    rm go.mod-e

    cd ../..
  fi

  if [ "{{LANGUAGE}}" = "rust" ]; then
    sed -i '' '45i\
  * [Day {{DAY}}](https://adventofcode.com/{{YEAR}}/day/{{DAY}}): [Rust]({{YEAR}}/day{{DAY}}-rust/src/lib.rs)\
  ' README.md
  fi

  if [ "{{LANGUAGE}}" = "python" ]; then
    sed -i '' '45i\
  * [Day {{DAY}}](https://adventofcode.com/{{YEAR}}/day/{{DAY}}): [Python]({{YEAR}}/day{{DAY}}-python/main.py)\
  ' README.md
  fi

  # comment out to automatically open the newly created folder/day
  # code {{YEAR}}/{{LANGUAGE}}/{{DAY}}

stats:
  go run cmd/stats.go
  echo "Go lines: $(find . -name '*.go' -exec cat {} + | wc -l)"
  echo "Go lines without tests: $(find . -name '*.go' ! -name '*_test.go' -exec cat {} + | wc -l)"
  echo "Rust lines: $(find . -name '*.rs' ! -name '*_test.go' -exec cat {} + | wc -l)"
  echo "Python lines: $(find . -name '*.py' ! -name '*_test.go' -exec cat {} + | wc -l)"