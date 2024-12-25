import {classNames} from "./classNames";

describe("classnames", () => {
  test("test with some class", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("test with mods & additional", () => {
    expect(classNames("someClass", {a: true, b: false, c: "true"}, ["extra"])).toBe(
      "someClass extra a c",
    );
  });

  test("test with additional", () => {
    expect(classNames("", {}, ["extra"])).toBe("extra");
  });
});
