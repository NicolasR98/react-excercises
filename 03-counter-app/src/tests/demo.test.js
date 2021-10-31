describe("tests on demo.test.js", () => {
  test("Strings must be equals", () => {
    const msg1 = "Hello World";
    const msg2 = "Hello World";

    expect(msg1).toBe(msg2); // ===
  });
});
