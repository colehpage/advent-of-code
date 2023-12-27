gen LANGUAGE YEAR DAY:
  #!/bin/bash
  mkdir -p {{LANGUAGE}}/{{YEAR}}/{{DAY}}

  cp -R templates/{{LANGUAGE}}/ {{LANGUAGE}}/{{YEAR}}/{{DAY}}
  curl --cookie "session=$ADVENT_OF_CODE_COOKIE" https://adventofcode.com/{{YEAR}}/day/{{DAY}}/input -o {{LANGUAGE}}/{{YEAR}}/{{DAY}}/input.txt
  perl -i -pe 'chomp if eof' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/input.txt
  if [ "{{LANGUAGE}}" = "go" ]; then
    sed -i '' '45i\
  * [Day {{DAY}}](https://adventofcode.com/{{YEAR}}/day/{{DAY}}): [Go]({{YEAR}}/day{{DAY}}-go/main.go)\
  ' README.md

    cd {{LANGUAGE}}/{{YEAR}}/{{DAY}}
    go mod init day{{YEAR}}-{{DAY}}
    go mod tidy
    go get github.com/stretchr/testify
    go get golang.org/x/exp

    # Temporary workaround as the Go version is generated with 3 digits for some reason
    sed -i -e 's/go 1.21.4/go 1.21/' go.mod
    rm go.mod-e

    cd ../../..
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

  if [ "{{LANGUAGE}}" = "typescript" ]; then
    sed -i '' '45i\
  * [Day {{DAY}}](https://adventofcode.com/{{YEAR}}/day/{{DAY}}): [TS]({{YEAR}}/day{{DAY}}-typescript/main.ts)\
  ' README.md

    cd {{LANGUAGE}}/{{YEAR}}/{{DAY}}
    python3 scripts/readme-script.py --y {{YEAR}} --d {{DAY}}
    python3 scripts/package-script.py --y {{YEAR}} --d {{DAY}}
    pnpm install
    prettier --write ./package.json
    rm -rf scripts
    cd ../../..
  fi

  echo "successfully generated {{LANGUAGE}}/{{YEAR}}/{{DAY}} directory and imported templates"
  echo "opening directory in vscode now"
  code {{LANGUAGE}}/{{YEAR}}/{{DAY}}

stats:
  go run cmd/stats.go
  echo "Go lines: $(find . -name '*.go' -exec cat {} + | wc -l)"
  echo "Go lines without tests: $(find . -name '*.go' ! -name '*_test.go' -exec cat {} + | wc -l)"
  echo "Rust lines: $(find . -name '*.rs' ! -name '*_test.go' -exec cat {} + | wc -l)"
  echo "Python lines: $(find . -name '*.py' ! -name '*_test.go' -exec cat {} + | wc -l)"
  echo "TypeScript lines: $(find . -name '*.ts' ! -name '*_test.go' -exec cat {} + | wc -l)"