// import {classNames} from "./classNames";
import {classNames} from "shared/libs/classNames/classNames";
import {ThemeButton} from "shared/ui/Button/Button.types";

describe("Тестирование функции classNames", () => {
  // Тест с одним классом
  test("test с одним классом", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  // Тест с несколькими классами
  test("test с несколькими классами", () => {
    expect(classNames("someClass1 someClass2")).toBe("someClass1 someClass2");
  });

  // Тест с модификаторами (mods)
  test("test с mods", () => {
    expect(classNames("someClass", {a: true, b: false, c: "true"}, [])).toBe("someClass a c");
  });

  // Тест с дополнительными классами (additional)
  test("test с дополнительными классами", () => {
    expect(classNames("", {}, ["extra"])).toBe("extra");
  });

  // Тест с модификаторами, где некоторые значения false
  test("test с модификаторами, где некоторые значения false", () => {
    expect(classNames("baseClass", {active: false, disabled: true})).toBe("baseClass disabled");
  });

  // Тест с пустыми значениями (когда пустая строка, пустой объект и пустой массив)
  test("test с пустыми значениями", () => {
    expect(classNames("", {}, [])).toBe("");
  });

  // Тест с булевыми значениями в объекте
  test("test с булевыми значениями", () => {
    expect(classNames("baseClass", {active: true, disabled: false})).toBe("baseClass active");
  });

  // Тест с объектами с дополнительными классами
  test("test с дополнительными классами и объектами", () => {
    expect(classNames("baseClass", {active: true, disabled: true}, ["extraClass"])).toBe(
      "baseClass extraClass active disabled",
    );
  });

  //   // Тест с null и undefined в классе
  //   test("test с null и undefined", () => {
  //     expect(classNames("baseClass", {active: true, disabled: null}, ["extraClass"])).toBe(
  //       "baseClass active extraClass",
  //     );
  //   });

  test("test c unit типом", () => {
    let styles = {
      clear: "clear",
    };
    expect(classNames("baseClass", {[styles[ThemeButton.CLEAR]]: true}, ["extraClass"])).toBe(
      "baseClass extraClass clear",
    );
  });

  // Тест со строками в объекте
  test("test с числовыми значениями", () => {
    expect(classNames("baseClass", {active: "1", disabled: ""})).toBe("baseClass active");
  });
});
