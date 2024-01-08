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

[![2023 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2023.json)](/go/2023/)
[![2022 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2022.json)](/go/2022/)
[![2021 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2021.json)](/go/2021/)
[![2020 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2020.json)](/go/2020/)
[![2019 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2019.json)](/go/2019/)
[![2018 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2018.json)](/go/2018/)
[![2017 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2017.json)](/go/2017/)
[![2016 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2016.json)](/go/2016/)
[![2015 Go Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/go/2015.json)](/go/2015/)

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
pnpm p1
pnpm p2
```

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

[![2023 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2023.json)](/python/2023/)
[![2022 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2022.json)](/python/2022/)
[![2021 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2021.json)](/python/2021/)
[![2020 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2020.json)](/python/2020/)
[![2019 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2019.json)](/python/2019/)
[![2018 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2018.json)](/python/2018/)
[![2017 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2017.json)](/python/2017/)
[![2016 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2016.json)](/python/2016/)
[![2015 Python Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/python/2015.json)](/python/2015/)

<!-- TODO -->

## [Rust](./rust)

[![2023 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2023.json)](/rust/2023/)
[![2022 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2022.json)](/rust/2022/)
[![2021 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2021.json)](/rust/2021/)
[![2020 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2020.json)](/rust/2020/)
[![2019 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2019.json)](/rust/2019/)
[![2018 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2018.json)](/rust/2018/)
[![2017 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2017.json)](/rust/2017/)
[![2016 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2016.json)](/rust/2016/)
[![2015 Rust Progress](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/colehpage/advent-of-code/main/.github/badges/rust/2015.json)](/rust/2015/)

### Setup Rust workspace

```sh
rustup default nightly
# FlameGraph only if stack trace visualization is desired
# I'm not using right now, but might later
cargo install cargo-nextest cargo-generate flamegraph
```

[FlameGraph Info](https://github.com/brendangregg/FlameGraph?tab=readme-ov-file)


### Running individual Rust solutions

```sh
cargo run --bin p1
cargo run --bin p2
```

### Testing

We are using [cargo-nextest](https://github.com/nextest-rs/nextest) here.

#### Testing individual parts

```sh
cargo nextest run -p d1 p1
```

#### Running full tests

```sh
cargo nextest run
```

### Benchmarking

We are using [Divan](https://github.com/nvzqz/divan) here.

#### Running benchmark for individual parts

```sh
cargo bench --bench d1-bench p1
```

#### Running all benchmarks

```sh
cargo bench -q > benchmarks.txt
```

## Credits

For the whole purpose we are here, thanks to [Eric Wastl](http://was.tl/) who created [Advent of Code](https://adventofcode.com/) which has been running since 2015 and always brings some serious coding holiday cheer to the end of the year.

### Just

Thanks to [teivah](https://github.com/teivah/advent-of-code) for the idea to use a [justfile](justfile) ([casey/just](https://github.com/casey/just)) and to kickstart my templating system.

### Rust

Thanks to [ChristopherBiscardi](https://github.com/ChristopherBiscardi/advent-of-code) for the introduction to Rust and the Rust templating/testing/benchmarking ideas.

### TypeScript

Thanks to [AlexAegis](https://github.com/AlexAegis/advent-of-code) for some inspiration in fleshing out my TypeScript workflow as well as some general repo goodies.