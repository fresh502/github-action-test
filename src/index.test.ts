import { sum } from "./index";

test("1 + 2는 3이어야 합니다", () => {
  // expect(sum(1, 2)).toBe(3);
  // 테스트 실패 예정
  expect(sum(1, 2)).toBe(4);
});
