import getDefaultColorMode from "./get-default-color-mode";

describe("getDefaultColorMode", () => {
  test("returns light mode by default", () => {
    expect(getDefaultColorMode()).toBe("light");
  });
});
