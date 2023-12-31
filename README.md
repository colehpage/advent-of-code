# [Advent of Code](https://adventofcode.com/)

[![Last commit on GitHub](https://img.shields.io/github/last-commit/colehpage/advent-of-code.svg)](https://github.com/colehpage/advent-of-code)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/582468824308438c88d4f07960719864)](https://app.codacy.com/gh/colehpage/advent-of-code/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Ongoing solutions to the [Advents of Code](https://adventofcode.com/) challenges!

I started the challenge with some co-workers last year (thanks Aaron!) but for this repo I'm going to be working backwards from 2023 and hopefully tackling in a few different languages including Go, Python, TypeScript, and maybe some Rust.

Personal libraries/helpers/utils will be added at a later time.

## Usage

After installing ([Just](https://github.com/casey/just)) and setting up the languages as posted below the justfile can be run with:

```sh
just gen [LANGUAGE] [YEAR] [DAY]
```

which will kick off a day in any language and create appropriate directories if they don't already exist.

## Setup/Installation

## [Go](./go)

<!-- TODO -->

## [Typescript](./ts)

[![2023 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2023.json)](/typescript/2023/)
[![2022 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2022.json)](/typescript/2022/)
[![2021 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2021.json)](/typescript/2021/)
[![2020 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2020.json)](/typescript/2020/)
[![2019 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2019.json)](/typescript/2019/)
[![2018 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2018.json)](/typescript/2018/)
[![2017 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2017.json)](/typescript/2017/)
[![2016 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2016.json)](/typescript/2016/)
[![2015 TypeScript Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/typescript/2015.json)](/typescript/2015/)

### Setup TypeScript workspace

Install latest stable `node` and `pnpm`

```sh
pnpm install
```

### Running individual TypeScript solutions

```sh
# Navigate to the solution
cd typescript/2023/1
pnpm p1
pnpm p2
```

### Debugging TypeScript solutions using VS Code

Open the solutions file, then run the `[TS] Current File` debug profile.

### Testing all TypeScript solutions

```sh
pnpm test
```

### Testing individual TypeScript solutions

```sh
# Navigate to the solution
cd typescript/2023/1
pnpm test
```

### Benchmarking individual TypeScript solutions

```sh
# Navigate to the solution
cd typescript/2023/1
pnpm bench
```

### Linting all TypeScript solutions

```sh
pnpm lint
```

### Linting individual TypeScript solutions

```sh
# Navigate to the solution
cd typescript/2023/1
pnpm lint:tsc
pnpm lint:es
pnpm lint:format
```

## [Python](./python)

<!-- TODO -->

## [Rust](./rust)

<!-- TODO -->

## Credit(s)

[Advent of Code](https://adventofcode.com/) was created by [Eric Wastl](http://was.tl/) and has been running since 2015.

Thanks to [teivah](https://github.com/teivah/advent-of-code) for the idea to use a [justfile](justfile) ([casey/just](https://github.com/casey/just)) plus templates. The justfile is a bit modified and may be updated further at a later date to suit my purposes.
