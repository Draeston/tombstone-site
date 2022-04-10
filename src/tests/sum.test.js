const sum = require("../functions/sum")

test("testing sum 1", () => {
  expect(sum(2, 3)).toBe(5);
})

test("testing sum 2", () => {
  expect(sum(4, 3)).toBe(7);
})

test("testing sum 3", () => {
  expect(sum(2, 3)).not.toBe(7);
})
