use {{crate_name}}::*;

fn main() {
    divan::main();
}

#[divan::bench]
fn p1() {
    p1::process(divan::black_box(include_str!(
        "../input.txt",
    )))
    .unwrap();
}

#[divan::bench]
fn p2() {
    p2::process(divan::black_box(include_str!(
        "../input.txt",
    )))
    .unwrap();
}