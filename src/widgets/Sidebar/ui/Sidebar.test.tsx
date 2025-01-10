import {Sidebar} from "./Sidebar";
// import {withTranslation, WithTranslation} from "react-i18next";
import {renderWithTranslation} from "shared/libs/tests/renderWithTranslation/renderWithTranslation";
import {fireEvent, screen} from "@testing-library/react";

describe("Тестирование компонета Sidebar", () => {
  test("test render sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument;
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
