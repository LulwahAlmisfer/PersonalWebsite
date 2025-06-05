import getDefaultColorMode from "./get-default-color-mode";

describe("getDefaultColorMode", () => {
  test("successful return color mode", () => {
    // Test without matchMedia (should return light)
    expect(getDefaultColorMode()).toBe("light");

    // Mock matchMedia to return matches: true for dark mode
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockReturnValue({
        matches: true,
      }),
    });

    expect(getDefaultColorMode()).toBe("dark");

    // Mock matchMedia to return matches: false for light mode
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockReturnValue({
        matches: false,
      }),
    });
    expect(getDefaultColorMode()).toBe("light");
  });

  test("successful return default color mode on ssr", () => {
    // Mock matchMedia to return matches: true
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockReturnValue({
        matches: true,
      }),
    });

    const windowSpy: jest.SpyInstance = jest.spyOn(global, "window", "get");

    windowSpy.mockReturnValue(undefined);
    expect(window).toBeUndefined();

    expect(getDefaultColorMode()).toBe("light");

    windowSpy.mockRestore();
    expect(getDefaultColorMode()).toBe("dark");
  });
});
