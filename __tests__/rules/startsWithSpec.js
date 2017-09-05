import { contains } from "./../../src/rules";

describe("contains", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";
  const input = document.createElement("input");
  input.value = "My Name";

  it("should return true if input starts with the given string", () => {
    expect(contains(input, valid)).toBeTruthy();
  });

  it("should return false if input doesn't start with the given string", () => {
    expect(contains(input, invalid)).toBeFalsy();
  });
});
