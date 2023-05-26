import { ICONS } from "@/constants";
import { getIcon } from "@/utils";

describe("getIcon", () => {
  test("successful return icon", () => {

    expect(getIcon("github")).toBe(ICONS.github);
    expect(getIcon("email")).toEqual(ICONS.email);

    expect(getIcon("twitter")).toBe(ICONS.twitter);

    expect(getIcon("medium")).toEqual(ICONS.medium);

    expect(getIcon("linkedin")).toEqual(ICONS.linkedin);
 
  });
});
