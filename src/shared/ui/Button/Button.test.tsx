import {Button} from "./Button";
import {render, screen} from "@testing-library/react";
import {ThemeButton} from "./Button.types";

describe("Тестирование компонета Button", () => {
  test("test на отрисовку title", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
    screen.debug();
  });

  test("test на содержание класса", () => {
    render(<Button className="test">TEST</Button>);
    const button = screen.getByText("TEST");
    expect(button).toHaveClass("test");
    screen.debug();
  });

  test("test на содержание класса через theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    const button = screen.getByText("TEST");
    expect(button).toHaveClass("clear");
    screen.debug();
  });
});
