import getContactHref from "./get-contact-href";

describe("getContactHref", () => {
  test("successful return contact href", () => {
    expect(getContactHref("medium", "#")).toBe("https://medium.com/#");
    expect(getContactHref("github", "#")).toBe("https://github.com/#");
    expect(getContactHref("twitter", "#")).toBe("https://www.twitter.com/#");


    expect(getContactHref("linkedin", "#")).toBe(
      "https://www.linkedin.com/in/#",
    );
    expect(getContactHref("mastodon", "#")).toBe("#");
  });
});
