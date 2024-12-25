// import {render, screen} from "@testing-library/react";
// import "@testing-library/jest-dom";
// import App from "./App";

// describe("Component App", () => {
//   it("should render the component", () => {
//     render(<App />);
//     // Проверь, что элемент с data-testid="app" существует в документе
//     expect(screen.getByTestId("app")).toBeInTheDocument();
//   });
// });

interface Sum<T> {
  (a: T, b: T): T;
}

describe("Тестирование функции суммирования", () => {
  it("должна возвращать сумму двух чисел", () => {
    const sum: Sum<number> = (a, b) => a + b;
    expect(sum(1, 2)).toBe(3);
  });
});
