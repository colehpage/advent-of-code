def main():            
    print(p1())
    print(p2())

def p1():
    lines = parse_input_file()
    p1 = 0
    for line in lines:
        p1_digits = []
        for i,c in enumerate(line):
            if c.isdigit():
                p1_digits.append(c)
        p1 += int(p1_digits[0]+p1_digits[-1])

    return p1

def p2():
    lines = parse_input_file()
    p2 = 0
    for line in lines:
        p2_digits = []
        for i,c in enumerate(line):
            if c.isdigit():
                p2_digits.append(c)
            for d,val in enumerate(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']):
                if line[i:].startswith(val):
                    p2_digits.append(str(d+1))
        p2 += int(p2_digits[0]+p2_digits[-1])
    
    return p2

def parse_input_file():
    with open('input.txt', 'r') as f:
        lines = f.read().split("\n")
    return lines

if __name__ == "__main__":
    main()