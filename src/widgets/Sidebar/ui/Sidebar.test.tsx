import {Sidebar} from "./Sidebar";
// import {withTranslation, WithTranslation} from "react-i18next";
// import {renderWithTranslation} from "shared/libs/tests/renderWithTranslation/renderWithTranslation";
import {fireEvent, screen} from "@testing-library/react";
import {componentRender} from "shared/config/test/componentRender/componentRender";

describe("Testing Sidebar component", () => {
  test("test render sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument;
  });

  test("test toggle", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
