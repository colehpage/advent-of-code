import argparse


def create_markdown_file(year, day):
    content = f"""
# [Day {day}](https://adventofcode.com/{year}/day/{day})

## [Part One](https://adventofcode.com/{year}/day/{day}#part1)

> [TypeScript](/typescript/{year}/{day}/src/p1.ts)

## [Part Two](https://adventofcode.com/{year}/day/{day}#part2)

> [TypeScript](/typescript/{year}/{day}/src/p2.ts)
"""
    with open(f"README.md", "w") as file:
        file.write(content)


# Parsing the command-line arguments
parser = argparse.ArgumentParser()
parser.add_argument("-y", "--year", type=int, help="Year argument")
parser.add_argument("-d", "--day", type=int, help="Day argument")
args = parser.parse_args()

# Calling the function to create the Markdown file
create_markdown_file(args.year, args.day)
