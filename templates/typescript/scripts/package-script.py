import json
import argparse

# Create JSON data


def create_package_json_file(year, day):
    data = {
        "name": f"@colehpage/advent-of-code-{year}-{day}",
        "description": f"Advent of Code {year} {day} solutions",
        "version": "1.0.0",
        "license": "MIT",
        "private": True,
        "archetype": {
            "platform": "node",
            "framework": "adventofcode",
            "language": "ts"
        },
        "keywords": [
            "advent-of-code",
            "javascript",
            "js",
            "ts",
            "typescript"
        ],
        "type": "module",
        "aoc": {
            "day": day,
            "year": year
        },
        "scripts": {
            "lint:depcheck": f"turbo run lint:depcheck_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "lint:depcheck_": "depcheck",
            "lint:es": f"turbo run lint:es_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "lint:es_": "eslint --max-warnings=0 --fix --no-error-on-unmatched-pattern .",
            "lint:format": f"turbo run lint:format_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "lint:format_": "prettier --cache-location .cache/prettier --plugin prettier-plugin-svelte --plugin prettier-plugin-tailwindcss --check .",
            "lint:md": f"turbo run lint:md_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "lint:md_": "remark --frail --no-stdout --silently-ignore .",
            "lint:tsc": f"turbo run lint:tsc_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "lint:tsc_": "tsc --noEmit",
            "test": f"turbo run test_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "test_": "vitest --passWithNoTests --coverage --run",
            "test:watch": "vitest --passWithNoTests --coverage",
            "all": f"BUILD_REASON='publish' turbo run all_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "bench": "ts-node-esm src/bench.ts",
            "build": f"turbo run build-lib_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "build-lib_": "vite build",
            "format": f"turbo run format_ --concurrency 16 --cache-dir .cache/turbo --filter @colehpage/advent-of-code-{year}-{day}",
            "format_": "prettier --cache-location .cache/prettier --plugin prettier-plugin-svelte --plugin prettier-plugin-tailwindcss --write .",
            "p1": "tsx src/p1.ts",
            "p2": "tsx src/p2.ts"
        },
        "exports": {
            "./bench": {
                "types": "./src/bench.ts",
                "import": "./dist/bench.js",
                "default": "./dist/bench.js"
            },
            "./p1": {
                "types": "./src/p1.ts",
                "import": "./dist/p1.js",
                "default": "./dist/p1.js"
            },
            "./p2": {
                "types": "./src/p2.ts",
                "import": "./dist/p2.js",
                "default": "./dist/p2.js"
            },
            "./readme": "./readme.md"
        },
        "dependencies": {
            "jsdom": "^23.0.1"
        },
        "devDependencies": {
            "@types/node": "^20.10.5",
            "ts-node": "^10.9.2",
            "benny": "^3.7.1",
            "typescript": "^5.3.3",
            "vite": "^5.0.10",
            "vitest": "^1.1.0"
        }
    }

    # Write JSON data to a file
    with open("package.json", "w") as json_file:
        json.dump(data, json_file)


# Create argument parser
parser = argparse.ArgumentParser()
parser.add_argument("-y", "--year", type=int, help="Year argument")
parser.add_argument("-d", "--day", type=int, help="Day argument")
args = parser.parse_args()

# Collect the values from the parsed arguments
year = args.year
day = args.day

create_package_json_file(args.year, args.day)
