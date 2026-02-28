import { foo } from "../simulator/foo";

test("foo function returns 'foo'", () => {
  expect(foo()).toBe("foo");
});
