use crate::custom_error::AocError;

#[tracing::instrument]
pub fn process(_input: &str) -> miette::Result<String, AocError> {
    todo!("process part 2!");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_process() -> miette::Result<()> {
        todo!("build tests for part 2!");
        let input = "";
        assert_eq!("", process(input)?);
        Ok(())
    }
}
