from builtins import print
from builtins import str


def main():
    print(p1())
    print(p2())


def p1():
    lines = parse_input_file()
    for line in lines:
        print(line)

    return 42


def p2():
    lines = parse_input_file()
    for line in lines:
        print(line)

    return 42


def parse_input_file():
    with open('input.txt', 'r') as f:
        lines = f.read().split("\n")
    return lines


if __name__ == "__main__":
    main()
