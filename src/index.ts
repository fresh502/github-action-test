export function sum(a: number, b: number) {
  return a + b;
}

test("1 + 2는 3이어야 합니다", () => {
  expect(sum(1, 2)).toBe(3);
});
