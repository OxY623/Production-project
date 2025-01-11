import {ButtonHTMLAttributes} from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  backgroundColor?: string;
}
