extern crate core;

pub fn p1(input: &str) -> i32 {
    let lines: Vec<_> = input.lines().collect();

    1
}

pub fn p2(input: &str) -> i32 {
    let lines: Vec<_> = input.lines().collect();

    1
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn test_p1_unit() {
        let s = fs::read_to_string("test.txt").unwrap();
        assert_eq!(p1(s.as_str()), 1);
    }

    #[test]
    fn test_p1_input() {
        let s = fs::read_to_string("input.txt").unwrap();
        assert_eq!(p1(s.as_str()), 1);
    }

    #[test]
    fn test_p2_unit() {
        let s = fs::read_to_string("test.txt").unwrap();
        assert_eq!(p2(s.as_str()), 1);
    }

    #[test]
    fn test_p2_input() {
        let s = fs::read_to_string("input.txt").unwrap();
        assert_eq!(p2(s.as_str()), 1);
    }
}
