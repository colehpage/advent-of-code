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
        awk '/^```/{print; flag=!flag; next} flag{if (/^[ \t]*$/) next; sub(/^[ \t]+/, ""); print; next} 1' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/README.md > {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.md && mv {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.md {{LANGUAGE}}/{{YEAR}}/{{DAY}}/README.md
        
        # "this is hacky and won't always work - most are 'For example:' before the test cases, but they can be different so you'll have to check and manually import in some cases"
        awk '/example/ {example=1} /^```/ && example==1 && !flag {flag=1; next} /^```/ && flag {flag=0; exit} flag {print}' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/README.md > {{LANGUAGE}}/{{YEAR}}/{{DAY}}/test.txt
        
        rm {{LANGUAGE}}/{{YEAR}}/{{DAY}}/tmp.html
        perl -i -pe 'chomp if eof' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/input.txt
        perl -i -pe 'chomp if eof' {{LANGUAGE}}/{{YEAR}}/{{DAY}}/test.txt
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
        awk '/^```/{print; flag=!flag; next} flag{if (/^[ \t]*$/) next; sub(/^[ \t]+/, ""); print; next} 1' README.md > tmp.md && mv tmp.md README.md
        
        # "this is hacky and won't always work - most are 'For example:' before the test cases, but they can be different so you'll have to check and manually import in some cases"
        awk '/example/ {example=1} /^```/ && example==1 && !flag {flag=1; next} /^```/ && flag {flag=0; exit} flag {print}' README.md > test.txt
        
        rm tmp.html
        perl -i -pe 'chomp if eof' input.txt
        perl -i -pe 'chomp if eof' test.txt
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