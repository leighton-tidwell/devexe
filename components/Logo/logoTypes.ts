import { BoxProps as ThemeUIBoxProps } from "theme-ui";

export interface LogoProps extends ThemeUIBoxProps {
  variant?: "default" | "icon" | "no-icon";
}