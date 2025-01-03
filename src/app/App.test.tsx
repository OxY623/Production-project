// import {render, screen} from "@testing-library/react";
// import "@testing-library/jest-dom";
// import App from "./App";

// jest.mock("app/providers/ThemeProviders", () => ({
//   useTheme: jest.fn(() => ({
//     theme: "dark", // Мокаем возвращаемое значение
//     setTheme: jest.fn(), // Мокаем функцию
//   })),
// }));
// describe("App Component", () => {
//   test("renders learn react link", () => {
//     screen.debug();
//     render(<App />);
//     const linkElement = screen.getByTestId("app");
//     expect(linkElement).toBeInTheDocument();
//     screen.debug();
//   });

//   test("should render App component with dark theme"),
//     () => {
//       const {container} = render(<App />);
//       expect(container).toHaveTextContent("dark");
//     };
// });

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
