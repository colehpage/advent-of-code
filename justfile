gen LANGUAGE YEAR DAY:
    #!/bin/bash

    if [ "{{LANGUAGE}}" = "rust" ]; then
        mkdir -p {{LANGUAGE}}/{{YEAR}}
    else
        mkdir -p {{LANGUAGE}}/{{YEAR}}/{{DAY}}
        cp -R templates/{{LANGUAGE}}/ {{LANGUAGE}}/{{YEAR}}/{{DAY}}
        curl --cookie "session=$AOC_SESSION" https://adventofcode.com/{{YEAR}}/day/{{DAY}}/input -o {{LANGUAGE}}/{{YEAR}}/{{DAY}}/input.txt
        curl --cookie "session=$AOC_SESSION" https://adventofcode.com/{{YEAR}}/day/{{DAY}} | pup 'article.day-desc' > {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.html
        html-to-markdown {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.html -o {{LANGUAGE}}/{{YEAR}}/{{DAY}}
        mv {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.html.md {{LANGUAGE}}/{{YEAR}}/{{DAY}}/README.md
        rm {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.html
        perl -i -pe 'chomp if eof' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/input.txt
    fi
    
    if [ "{{LANGUAGE}}" = "go" ]; then
        echo "TODO"
    fi

    if [ "{{LANGUAGE}}" = "rust" ]; then
        cd {{LANGUAGE}}/{{YEAR}}
        cargo generate --path ../../templates/rust --name d{{DAY}}
        cd d{{DAY}}
        curl --cookie "session=$AOC_SESSION" https://adventofcode.com/{{YEAR}}/day/{{DAY}}/input -o input.txt
        curl --cookie "session=$AOC_SESSION" https://adventofcode.com/{{YEAR}}/day/{{DAY}} | pup 'article.day-desc' > tmp.html
        html-to-markdown tmp.html -o .
        mv tmp.html.md README.md
        rm tmp.html
        perl -i -pe 'chomp if eof' input.txt
        cd ../../..
    fi

    if [ "{{LANGUAGE}}" = "python" ]; then
        echo "TODO"
    fi

    if [ "{{LANGUAGE}}" = "typescript" ]; then
        cd {{LANGUAGE}}/{{YEAR}}/{{DAY}}

        python3 scripts/readme-script.py --y {{YEAR}} --d {{DAY}}
        python3 scripts/package-script.py --y {{YEAR}} --d {{DAY}}

        sed -i '' 's/<<year>>/{{YEAR}}/g' src/p1.ts
        sed -i '' 's/<<day>>/{{DAY}}/g' src/p1.ts
        sed -i '' 's/<<year>>/{{YEAR}}/g' src/p1.test.ts
        sed -i '' 's/<<day>>/{{DAY}}/g' src/p1.test.ts

        sed -i '' 's/<<year>>/{{YEAR}}/g' src/p2.ts
        sed -i '' 's/<<day>>/{{DAY}}/g' src/p2.ts
        sed -i '' 's/<<year>>/{{YEAR}}/g' src/p2.test.ts
        sed -i '' 's/<<day>>/{{DAY}}/g' src/p2.test.ts

        pnpm install
        prettier --write ./package.json
        rm -rf scripts
        cd ../../..
    fi

    echo "successfully generated {{LANGUAGE}}/{{YEAR}}/{{DAY}} directory and imported templates"
    echo "opening directory in vscode now"
    if [ "{{LANGUAGE}}" = "rust" ]; then
        code {{LANGUAGE}}/{{YEAR}}/d{{DAY}}
    else
        code {{LANGUAGE}}/{{YEAR}}/{{DAY}}
    fi

stats:
    go run cmd/stats.go
    echo "Go lines: $(find . -name '*.go' -exec cat {} + | wc -l)"
    echo "Go lines without tests: $(find . -name '*.go' ! -name '*_test.go' -exec cat {} + | wc -l)"
    echo "Rust lines: $(find . -name '*.rs' ! -name '*_test.go' -exec cat {} + | wc -l)"
    echo "Python lines: $(find . -name '*.py' ! -name '*_test.go' -exec cat {} + | wc -l)"
    echo "TypeScript lines: $(find . -name '*.ts' ! -name '*_test.go' -exec cat {} + | wc -l)"