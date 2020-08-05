function unknown() {
    let a: unknown = 30;
    let b = a === 123;
    let c = a + 10;
    if (typeof a === 'number') {
        let d = a + 10
        console.log(d);
    }
    console.log(c);
}

unknown();